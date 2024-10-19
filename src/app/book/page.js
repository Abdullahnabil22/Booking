"use client";
import { GetHotelID, GetHotelReviews, GetHotelRooms } from "@/API/GET";
import ProgressSteps from "@/Components/divs/bookingProgress";
import Navbar from "@/Components/Navbar/Navbar";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { InfoIcon, Loader } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BsCurrencyExchange, BsInfoCircle } from "react-icons/bs";
import { CiMoneyBill } from "react-icons/ci";
import { FaUserLarge } from "react-icons/fa6";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { IoIosArrowForward, IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoWifi } from "react-icons/io5";
import { MdOutlineRoomService } from "react-icons/md";

function Book() {
  const [step, setStep] = useState(2);
  const [hotel, setHotel] = useState(null);
  const [rooms, setRooms] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);
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
                  <p className="text-sm">
                    {hotel?.location?.Address.en}
                    <p className="text-xs text-[#008234] ">Excllent location</p>
                  </p>
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
                  <h1 className="text-base font-bold">Your booking details</h1>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="col-span-1 flex flex-col gap-2  ">
                      <h1 className="text-sm font-medium">Check-in</h1>
                      <p className="text-sm font-bold border-r-2 border-gray-300">
                        Fri 18 Oct 2024
                        <p className="text-sm text-[#595959] font-normal ">
                          {hotel?.HouseRules.CheckInTime} o&apos;clock
                        </p>
                      </p>
                    </div>
                    <div className="col-span-1 flex flex-col gap-2  ">
                      <h1 className="text-sm font-medium">Check-out</h1>
                      <p className="text-sm font-bold ">
                        Wed 20 Nov 2024
                        <p className="text-sm text-[#595959] font-normal ">
                          {hotel?.HouseRules.CheckOutTime} o&apos;clock
                        </p>
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold border-b border-gray-300 pb-2">
                    Total length of stay:
                    <p className="text-sm font-bold ">2 nights</p>
                  </p>
                  <p className="text-sm font-semibold  ">
                    You selected
                    <p className="text-sm font-bold ">1 room for 2 adults</p>
                  </p>

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
                  <div className="px-4 py-3 flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center border-2 border-yellow-500">
                      <FaUserLarge className="text-gray-600 text-xl" />
                    </div>
                    <div>
                      <h2 className="text-base- font-bold text-gray-800">
                        You are signed in
                      </h2>
                      <p className="text-sm text-gray-600">Your account</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 rounded-lg p-6 border border-gray-300 mt-4">
                  <h2 className="text-xl font-bold mb-6">Enter your details</h2>

                  <div className="bg-[#F5F5F5] border-2 border-[#BEBEBE] p-4 mb-6 flex items-center rounded-lg">
                    <BsInfoCircle className=" mr-2 text-xl" />
                    <p className="text-sm">
                      Almost done! Just fill in the{" "}
                      <span className="text-red-700">*</span> required info
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormControl fullWidth>
                        <label className="text-sm font-bold mb-1">
                          First name <span className="text-red-700">*</span>
                        </label>
                        <TextField required fullWidth size="small" />
                      </FormControl>
                      <FormControl fullWidth>
                        <label className="text-sm font-bold mb-1">
                          Last name <span className="text-red-700">*</span>
                        </label>
                        <TextField required fullWidth size="small" />
                      </FormControl>
                    </div>
                    <div className="flex flex-col gap-4">
                      <FormControl className="w-1/2 ">
                        <label className="text-sm font-bold mb-1">
                          Email address <span className="text-red-700">*</span>
                        </label>
                        <TextField
                          type="email"
                          required
                          fullWidth
                          size="small"
                        />
                      </FormControl>

                      <FormControl className="w-1/2 ">
                        <label className="text-sm font-bold mb-1">
                          Country/region <span className="text-red-700">*</span>
                        </label>
                        <Select
                          value="select country"
                          displayEmpty
                          renderValue={(value) => value || "Country/region *"}
                          size="small"
                        >
                          <MenuItem value="Egypt">Egypt</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="flex w-1/2">
                      <FormControl className="w-1/4">
                        <Select value="EG +20" displayEmpty size="small">
                          <MenuItem value="EG +20">EG</MenuItem>
                        </Select>
                      </FormControl>
                      <TextField
                        className="w-3/4 ml-2"
                        required
                        size="small"
                        value="+20"
                        helperText="So the accommodation can reach you"
                      />
                    </div>

                    <FormControlLabel
                      control={<Checkbox size="medium" />}
                      label={
                        <span className="text-sm">
                          Yes, I&apos;d like free paperless confirmation
                          (recommended)
                          <span className="block text-xs text-gray-500">
                            We&apos;ll text you a link to download our app
                          </span>
                        </span>
                      }
                    />
                    <div className="border-b border-gray-300"></div>
                    <div className="flex flex-col gap-2">
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          <span className="text-sm font-bold text-black">
                            Who are you booking for?
                          </span>
                        </FormLabel>
                        <RadioGroup defaultValue="main">
                          <FormControlLabel
                            value="main"
                            control={<Radio />}
                            label="I am the main guest"
                          />
                          <FormControlLabel
                            value="other"
                            control={<Radio />}
                            label="Booking is for someone else"
                          />
                        </RadioGroup>
                      </FormControl>

                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          <span className="text-sm font-bold text-black">
                            Are you travelling for work?
                          </span>
                        </FormLabel>
                        <RadioGroup defaultValue="no" row>
                          <FormControlLabel
                            value="yes"
                            control={<Radio />}
                            label="Yes"
                          />
                          <FormControlLabel
                            value="no"
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </form>
                </div>
                <div className="flex flex-col gap-2 rounded-lg p-4 border border-gray-300 mt-4">
                  <h2 className="text-xl font-bold mb-6">Special requests</h2>
                  <p className="text-sm">
                    Special requests cannot be guaranteed – but the property
                    will do its best to meet your needs. You can always make a
                    special request after your booking is complete!
                  </p>
                  <label className="text-sm font-bold mb-1">
                    Please write your requests in English.{" "}
                    <span className="text-xs text-gray-500 font-normal">
                      (optional)
                    </span>
                  </label>
                  <TextField
                    className="w-full border-black"
                    size="small"
                    multiline
                    rows={3}
                  />
                </div>
                <div className="flex flex-col gap-2 rounded-lg p-4 border border-gray-300 mt-4">
                  <h2 className="text-xl font-bold mb-6">Your arrival time</h2>
                  <p className="text-sm flex items-center">
                    <IoIosCheckmarkCircleOutline className="inline-block mr-2 text-3xl text-[#1F8F27]" />
                    Your room will be ready for check-in{" "}
                    {hotel?.HouseRules.CheckInTime} o&apos;clock
                  </p>
                  <p className="text-sm flex items-center">
                    <MdOutlineRoomService className="inline-block mr-2 text-3xl text-[#1F8F27]" />
                    24-hour front desk – Help whenever you need it!
                  </p>
                </div>
                <div className="mt-6 flex justify-end">
                  <button className="flex items-center  text-base font-semibold bg-[#006ce4] text-white py-4 px-6 rounded  hover:bg-blue-700">
                    Next: Final details{" "}
                    <IoIosArrowForward className="inline-block ml-2 text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-8">
            <footer className="bg-[#F5F5F5] py-8 text-sm">
              <div className="container mx-auto px-4">
                <div className="text-center mb-2">
                  <Link
                    href="/about"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    About Booking.com
                  </Link>
                  {" | "}
                  <Link
                    href="/customer-service"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Customer Service help
                  </Link>
                  {" | "}
                  <Link
                    href="/terms"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Terms & Conditions
                  </Link>
                  {" | "}
                  <Link
                    href="/privacy"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Privacy & Cookie Statement
                  </Link>
                </div>
                <div className="text-center text-xs text-gray-600">
                  Copyright © 1996-{new Date().getFullYear()} Booking.com. All
                  rights reserved.
                </div>
              </div>
            </footer>
          </section>
        </>
      )}
    </>
  );
}

export default Book;
