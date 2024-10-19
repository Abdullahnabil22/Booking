"use client";
import { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { GetHotelID, GetHotelReviews, GetHotelRooms } from "@/API/GET";
import ProgressSteps from "@/Components/divs/bookingProgress";
import Navbar from "@/Components/Navbar/Navbar";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Loader } from "lucide-react";
import { BsCurrencyExchange, BsInfoCircle } from "react-icons/bs";
import { CiLock, CiMoneyBill } from "react-icons/ci";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { GoQuestion } from "react-icons/go";
import { IoWifi } from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { useRouter } from "next/navigation";

const testBookingDetails = {
  check_in_date: new Date("2024-10-18T00:00:00.000Z"),
  check_out_date: new Date("2024-10-20T00:00:00.000Z"),
  booking_date: new Date(),
  userID: "650550defc249cd1553613db",
  host_id: "670550defc249cd1553613db",
  members: 2,
  payment: {
    status: "PENDING",
    date: new Date(),
    method: "PayPal",
    amount: 10823.42,
    coin: "EGP",
    payment_id: "PAY-1234567890",
  },
  commission: {
    rate: 0.05,
  },
  room_id: ["660b29ac401ba9c92d116a71"],
  email: "user@example.com",
  numberOfNights: 2,
  numberOfRooms: 1,
  status: "PENDING",
};

function BookPage() {
  const [step, setStep] = useState(3);
  const [hotel, setHotel] = useState(null);
  const [rooms, setRooms] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookingId, setBookingId] = useState(null);
  const [paypalError, setPaypalError] = useState(null);
  const [paypalOrderError, setPaypalOrderError] = useState(null);
  const router = useRouter();

  const handleStep = (step) => {
    setStep(step);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const hotelId = "670b29ac401ba9c92d116a70";
        const [hotelData, roomData, reviewData] = await Promise.all([
          GetHotelID(hotelId),
          GetHotelRooms(hotelId),
          GetHotelReviews(hotelId),
        ]);

        setHotel(hotelData);
        setRooms(roomData);
        setReviews(reviewData);
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleBookingSubmit = async () => {
    try {
      console.log("Creating booking with test data:", testBookingDetails);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setBookingId("66fea17eaaceadd4e2cba971");

      console.log("Booking ID set:", "test_booking_123");
      setPaypalOrderError(null);
    } catch (error) {
      console.error("Error creating booking:", error);
      setPaypalOrderError("Failed to create booking. Please try again.");
    }
  };

  function collectRatings(reviews) {
    return reviews?.map((review) => review.rating) || [];
  }

  const ratings = collectRatings(reviews);

  function calculateRatingCategory(ratings) {
    if (!ratings || ratings.length === 0) return 0;
    const totalScore = ratings.reduce((sum, rating) => sum + rating, 0);
    const averageRating = totalScore / ratings.length;
    return averageRating;
  }

  const ratingCategory = calculateRatingCategory(ratings);

  function getRatingCategory(rating) {
    if (rating >= 8) return "Excellent";
    if (rating >= 7) return "Very good";
    if (rating >= 6) return "Good";
    if (rating >= 5) return "Average";
    return "Poor";
  }
  return (
    <>
      <PayPalScriptProvider
        options={{
          "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
          currency: "USD",
        }}
      >
        <Navbar />
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="spinner">
              <Loader className="animate-spin text-blue-500 text-4xl" />
            </div>
          </div>
        ) : (
          <>
            <section className="py-8 sm:py-4">
              <ProgressSteps step={step} handleStep={handleStep} />
            </section>
            <section className="py-8 ">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
                <div className="col-span-1">
                  <div className="flex flex-col gap-2 rounded-lg p-4 border border-gray-300">
                    <h1 className="text-base font-bold">{hotel?.name.en}</h1>
                    <div className="text-sm">
                      <p>{hotel?.location?.Address.en}</p>
                      <p className="text-xs text-[#008234]">
                        Excellent location
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs rounded bg-[#003b95] text-white p-1 w-fit">
                        {ratingCategory}
                      </span>{" "}
                      <span className="text-xs rounded  p-1 w-fit">
                        {getRatingCategory(ratingCategory)}{" "}
                        <span className="text-xs rounded text-[#595959]  w-fit">
                          . {reviews?.length} reviews{" "}
                        </span>
                      </span>
                    </div>
                    <p className="flex gap-2 items-center">
                      <IoWifi className=" text-xl" />
                      <span className="text-xs">Free WiFi</span>
                      <GiForkKnifeSpoon className=" text-xl" />
                      <span className="text-xs">Free Breakfast</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 rounded-lg p-4 border border-gray-300 mt-4">
                    <h1 className="text-base font-bold">
                      Your booking details
                    </h1>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="col-span-1 flex flex-col gap-2  ">
                        <h1 className="text-sm font-medium">Check-in</h1>
                        <div className="text-sm font-bold border-r-2 border-gray-300">
                          <p>Fri 18 Oct 2024</p>
                          <p className="text-sm text-[#595959] font-normal">
                            {hotel?.HouseRules.CheckInTime} o&apos;clock
                          </p>
                        </div>
                      </div>
                      <div className="col-span-1 flex flex-col gap-2  ">
                        <h1 className="text-sm font-medium">Check-out</h1>
                        <div className="text-sm font-bold">
                          <p>Wed 20 Nov 2024</p>
                          <p className="text-sm text-[#595959] font-normal">
                            {hotel?.HouseRules.CheckOutTime} o&apos;clock
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm font-semibold border-b border-gray-300 pb-2">
                      <p>Total length of stay:</p>
                      <p className="text-sm font-bold">2 nights</p>
                    </div>
                    <div className="text-sm font-semibold">
                      <p>You selected</p>
                      <p className="text-sm font-bold">1 room for 2 adults</p>
                    </div>

                    <button className="text-sm font-semibold bg-white text-[#006ce4] p-2 rounded-md w-fit hover:bg-blue-50">
                      Change your selection
                    </button>
                  </div>
                  <div className=" flex flex-col gap-2 rounded-lg p-4 border border-gray-300 mt-4">
                    <h2 className="text-base font-bold mb-4">
                      Your price summary
                    </h2>
                    <div className="bg-[#EBF3FF] p-4 rounded-md mb-4 ">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xl font-bold">Price</span>
                        <div className="text-right">
                          <p className="text-xl font-bold">EGP 10,823.42</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Additional charges may apply
                      </p>
                      <p className="text-sm text-gray-600">
                        In property currency: US$222.75
                      </p>
                    </div>

                    <h3 className="font-semibold mb-2">Price information</h3>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm  flex items-center">
                        <CiMoneyBill className="inline-block text-2xl mr-4" />
                        Excludes taxes and charges
                      </p>
                      <p className="text-sm  flex items-center">
                        <BsCurrencyExchange className="inline-block text-4xl mr-4" />
                        Bear in mind that your card issuer may charge you a
                        foreign transaction fee.
                      </p>
                      <p className="text-sm  flex items-center">
                        <BsInfoCircle className="inline-block text-5xl mr-4 " />
                        Please note that by Egyptian law all foreign guests must
                        pay in a foreign currency, not in Egyptian currency.
                      </p>
                      <p className="text-sm  flex items-center">
                        <BsInfoCircle className="inline-block text-xl mr-4" />
                        Egyptian citizens are required to pay in the local
                        currency according to the exchange rate at the time of
                        payment.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 rounded-lg p-4 border border-gray-300 mt-4">
                    <h2 className="text-base font-bold mb-4">
                      Your payment schedule
                    </h2>
                    <p className="text-sm ">
                      You will be charged a prepayment of the total price at any
                      time.
                    </p>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="flex flex-col gap-2 rounded-lg p-4 border border-gray-300 ">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-bold">
                        How do you want to pay?
                      </h2>
                      <button className="flex items-center text-sm  font-semibold bg-white text-[#006ce4] p-2 rounded-md w-fit hover:bg-blue-50 ">
                        <GoQuestion className="inline-block text-xl mr-2" /> No
                        card?
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <FormControl className="col-span-1">
                        <label className="text-sm font-bold mb-1">
                          Cardholder&apos;s name{" "}
                          <span className="text-red-700">*</span>
                        </label>
                        <TextField size="small" />
                      </FormControl>
                      <FormControl className="col-span-1">
                        <label className="text-sm font-bold mb-1">
                          Card type <span className="text-red-700">*</span>
                        </label>
                        <Select fullWidth label="-- Select --" size="small">
                          <MenuItem value="-- Select --" disabled>
                            -- Select card type --
                          </MenuItem>
                          <MenuItem value="visa">Visa</MenuItem>
                          <MenuItem value="mastercard">Mastercard</MenuItem>
                          <MenuItem value="amex">American Express</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <FormControl className="col-span-1">
                        <label className="text-sm font-bold mb-1">
                          Card number <span className="text-red-700">*</span>
                        </label>
                        <TextField size="small" />
                      </FormControl>
                      <FormControl className="col-span-1">
                        <label className="text-sm font-bold mb-1">
                          Expiry date <span className="text-red-700">*</span>
                        </label>
                        <TextField size="small" />
                      </FormControl>
                    </div>
                    <h2 className="text-sm font-bold ">CVC-code</h2>
                    <p className="text-sm mb-4">
                      You do not need to enter a CVC code for this booking.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 mt-4">
                    {bookingId && (
                      <PayPalButtons
                        createOrder={(data, actions) => {
                          console.log("Creating PayPal order");
                          return fetch("http://localhost:3000/paypal/pay", {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                              bookingId: bookingId,
                            }),
                          })
                            .then((response) => {
                              if (!response.ok) {
                                return response.json().then((err) => {
                                  throw new Error(
                                    err.message ||
                                      "Failed to create PayPal order"
                                  );
                                });
                              }
                              return response.json();
                            })
                            .then((order) => {
                              console.log("PayPal order created:", order);
                              setPaypalOrderError(null); // Clear any previous errors
                              return order.id;
                            })
                            .catch((error) => {
                              console.error(
                                "Error creating PayPal order:",
                                error
                              );
                              setPaypalOrderError(error.message);
                              throw error;
                            });
                        }}
                        onApprove={(data, actions) => {
                          console.log("Payment approved, executing payment");
                          return fetch(
                            `http://localhost:3000/paypal/success?token=${data.orderID}&bookingId=${bookingId}`
                          )
                            .then((response) => response.json())
                            .then((details) => {
                              console.log("Payment successful:", details);
                              if (
                                details.message === "Failed to process payment"
                              ) {
                                throw new Error(
                                  "Backend failed to process payment"
                                );
                              }
                              router.push("/payment-success");
                            })
                            .catch((error) => {
                              console.error("Error processing payment:", error);
                              setPaypalError(error);
                            });
                        }}
                        onError={(err) => {
                          setPaypalError(err);
                          console.error("PayPal error:", err);
                        }}
                      />
                    )}

                    {paypalOrderError && (
                      <p className="text-red-500 mb-2">
                        Error: {paypalOrderError}
                      </p>
                    )}

                    {paypalError && (
                      <p className="text-red-500 mb-2">
                        PayPal Error: {paypalError.message}
                      </p>
                    )}

                    <button className="mb-2 rounded-full bg-green-500 text-white p-2 flex justify-center items-center text-bold font-semibold">
                      <RiMoneyDollarCircleFill className="mr-2 text-3xl" /> Pay
                      cash on arrival
                    </button>
                  </div>

                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="I consent to receiving marketing emails from Booking.com, including promotions, personalized recommendations, rewards, travel experiences and updates about Booking.com's products and services."
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: "14px",
                      },
                    }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    label="I consent to receiving marketing emails from Booking.com, including promotions, personalized recommendations, rewards, travel experiences and updates about Booking.com Transport Limited's products and services."
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: "14px",
                      },
                    }}
                  />

                  <p className="my-4 text-xs">
                    By signing up, you let us tailor offers and content to your
                    interests by monitoring how you use Booking.com through
                    tracking technologies. Unsubscribe at any time. Read our
                    <span className="text-[#006ce4] underline font-bold">
                      {" "}
                      privacy policy.
                    </span>
                  </p>

                  <p className="my-4 text-sm">
                    Your booking is with {hotel?.name.en} directly and by
                    completing this booking you agree to the{" "}
                    <span className="text-[#006ce4] underline font-bold">
                      booking conditions
                    </span>
                    ,{" "}
                    <span className="text-[#006ce4] underline font-bold">
                      general terms
                    </span>
                    , and{""}
                    <span className="text-[#006ce4] underline font-bold ">
                      privacy policy
                    </span>
                    .
                  </p>

                  <div className="flex justify-end gap-2">
                    <button className="rounded-md border border-[#006CE8] bg-white text-[#006CE8] py-2 px-6 flex justify-center items-center text-base font-semibold hover:bg-blue-50 ">
                      Check your booking
                    </button>
                    <button
                      className="rounded-md bg-[#006CE8] text-white py-4 px-6 flex justify-center items-center text-base font-semibold hover:bg-[#0057B8]"
                      onClick={handleBookingSubmit}
                    >
                      <CiLock className="mr-2 text-3xl" /> Complete booking
                      (Test)
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </PayPalScriptProvider>
    </>
  );
}

export default BookPage;
