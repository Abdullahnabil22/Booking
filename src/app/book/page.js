"use client";
import {
  GetHotelID,
  GetHotelReviews,
  GetHotelRooms,
  GetRoom,
  GetUser,
} from "@/API/GET";
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
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";
import { IoWifi } from "react-icons/io5";
import { MdOutlineRoomService } from "react-icons/md";
import { useSearchParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { PostBooking } from "@/API/POST";

function Book() {
  const t = useTranslations("Book");
  const locale = useLocale();
  const searchParams = useSearchParams();
  const [step, setStep] = useState(2);
  const [user, setUser] = useState(null);
  const [hotel, setHotel] = useState(null);
  const [rooms, setRooms] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);
  const price = searchParams.get("price");
  const type = searchParams.get("type");
  const handleStep = (step) => {
    setStep(step);
  };
  const checkInDate = searchParams.get("checkInDate");
  const checkOutDate = searchParams.get("checkOutDate");
  const numberOfRooms = Math.round(price / rooms?.price);
  useEffect(() => {
    const hotel = searchParams.get("hotel");
    const room = searchParams.get("room");
    async function fetchData() {
      try {
        const [hotelData, roomData, reviewData, userData] = await Promise.all([
          GetHotelID(hotel),
          GetRoom(room),
          GetHotelReviews(hotel),
          GetUser("66f9f2cfa46b697f106da79a"),
        ]);

        setHotel(hotelData);
        setRooms(roomData);
        setReviews(reviewData);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  async function onSubmit() {
    let postData = {
      check_in_date: checkInDate,
      check_out_date: checkOutDate,
      booking_date: new Date(),
      userID: user._id,
      host_id: hotel._id,
      members: type === "Deluxe Double" ? 2 : 1,
      payment: {
        status: "PENDING",
        date: new Date(),
        method: "paypal",
        amount: Math.round(price / 48),
        coin: "USD",
        payment_id: "",
      },
      room_id: Array(numberOfRooms).fill(rooms._id),
      email: user.email,
      numberOfNights: getDateDifference(checkInDate, checkOutDate),
      numberOfRooms: numberOfRooms,
      status: "PENDING",
      updatedAt: new Date(),
    };
    console.log(postData);
    try {
      console.log(postData);
      const res = await fetch("http://localhost:3000/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      console.log(res);
      if (res.ok) {
        alert("Success");
      } else {
        alert("Error");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred");
    }
  }

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
    if (rating >= 8) return t("excellent");
    if (rating >= 7) return t("very_good");
    if (rating >= 6) return t("good");
    if (rating >= 5) return t("average");
    return t("poor");
  }
  function formatDate(date) {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${monthNames[monthIndex]} ${day} ${year}`;
  }
  function getDateDifference(checkInDate, checkOutDate) {
    let startDate = new Date(checkInDate);
    let endDate = new Date(checkOutDate);
    const difference = endDate.getDay() - startDate.getDay();
    return difference;
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
                  <h1 className="text-base font-bold">{hotel?.name[locale]}</h1>
                  <div className="text-sm">
                    {hotel?.location?.Address[locale]}
                    <span className="text-xs text-[#008234]">
                      {t("excellent_location")}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs rounded bg-[#003b95] text-white p-1 w-fit">
                      {ratingCategory}
                    </span>{" "}
                    <span className="text-xs rounded p-1 w-fit">
                      {getRatingCategory(ratingCategory)}{" "}
                      <span className="text-xs rounded text-[#595959] w-fit">
                        {reviews?.length} . {t("reviews")}
                      </span>
                    </span>
                  </div>
                  <p className="flex gap-2 items-center">
                    <IoWifi className=" text-xl" />
                    <span className="text-xs">{t("free_wifi")}</span>
                    <GiForkKnifeSpoon className=" text-xl" />
                    <span className="text-xs">{t("free_breakfast")}</span>
                  </p>
                </div>
                <div className="flex flex-col gap-2 rounded-lg p-4 border border-gray-300 mt-4">
                  <h1 className="text-base font-bold">
                    {t("your_booking_details")}
                  </h1>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="col-span-1 flex flex-col gap-2">
                      <h1 className="text-sm font-medium">{t("check_in")}</h1>
                      <div
                        className={`text-sm font-bold  border-gray-300 ${
                          locale === "ar"
                            ? "text-right border-l-2"
                            : "text-left border-r-2"
                        }`}
                      >
                        {formatDate(checkInDate)}
                        <span className="text-sm text-[#595959] font-normal block">
                          {t("o_clock")} {hotel?.HouseRules.CheckInTime}
                        </span>
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-2">
                      <h1 className="text-sm font-medium">{t("check_out")}</h1>
                      <div className="text-sm font-bold">
                        {formatDate(checkOutDate)}
                        <span className="text-sm text-[#595959] font-normal block">
                          {t("o_clock")} {hotel?.HouseRules.CheckOutTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-semibold border-b border-gray-300 pb-2">
                    {t("total_length_of_stay")}:{" "}
                    <span className="text-sm font-bold">
                      {getDateDifference(checkInDate, checkOutDate)}{" "}
                      {t("nights")}
                    </span>
                  </div>
                  <div className="text-sm font-semibold">
                    {t("you_selected")}:
                    <span className="text-sm font-bold block">
                      1 {t("room")} {t("for")} {type == "Deluxe Double" ? 2 : 1}{" "}
                      {t("adults")}
                    </span>
                  </div>
                  <button className="text-sm font-semibold bg-white text-[#006ce4] p-2 rounded-md w-fit hover:bg-blue-50">
                    {t("change_your_selection")}
                  </button>
                </div>
                <div className=" flex flex-col gap-2 rounded-lg p-4 border border-gray-300 mt-4">
                  <h2 className="text-base font-bold mb-4">
                    {t("your_price_summary")}
                  </h2>
                  <div className="bg-[#EBF3FF] p-4 rounded-md mb-4 ">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xl font-bold">{t("price")}</span>
                      <div className="text-right">
                        <p className="text-xl font-bold">EGP {price}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      {t("additional_charges_may_apply")}
                    </p>
                    <p className="text-sm text-gray-600">
                      {t("in_property_currency")}: US${Math.round(price / 48)}
                    </p>
                  </div>

                  <h3 className="font-semibold mb-2">
                    {t("price_information")}
                  </h3>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm  flex items-center">
                      <CiMoneyBill className="inline-block text-2xl mx-4" />
                      {t("excludes_taxes_and_charges")}
                    </p>
                    <p className="text-sm  flex items-center">
                      <BsCurrencyExchange className="inline-block text-4xl mx-4" />
                      {t(
                        "bear_in_mind_that_your_card_issuer_may_charge_you_a_foreign_transaction_fee"
                      )}
                    </p>
                    <p className="text-sm  flex items-center">
                      <BsInfoCircle className="inline-block text-5xl mx-4 " />
                      {t(
                        "please_note_that_by_egyptian_law_all_foreign_guests_must_pay_in_a_foreign_currency_not_in_egyptian_currency"
                      )}
                    </p>
                    <p className="text-sm  flex items-center ">
                      <BsInfoCircle className="inline-block text-xl mx-4 " />
                      {t(
                        "egyptian_citizens_are_required_to_pay_in_the_local_currency_according_to_the_exchange_rate_at_the_time_of_payment"
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 rounded-lg p-4 border border-gray-300 mt-4">
                  <h2 className="text-base font-bold mb-4">
                    {t("your_payment_schedule")}
                  </h2>
                  <p className="text-sm ">
                    {t(
                      "you_will_be_charged_a_prepayment_of_the_total_price_at_any_time"
                    )}
                  </p>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex flex-col gap-2 rounded-lg p-4 border border-gray-300 ">
                  <div className="px-4 py-3 flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center border-2 border-yellow-500 mx-2">
                      <FaUserLarge className="text-gray-600 text-xl" />
                    </div>
                    <div>
                      <h2 className="text-base- font-bold text-gray-800">
                        {t("you_are_signed_in")}
                      </h2>
                      <p className="text-sm text-gray-600">
                        {t("your_account")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 rounded-lg p-6 border border-gray-300 mt-4">
                  <h2 className="text-xl font-bold mb-6">
                    {t("enter_your_details")}
                  </h2>

                  <div className="bg-[#F5F5F5] border-2 border-[#BEBEBE] p-4 mb-6 flex items-center rounded-lg">
                    <BsInfoCircle className=" mx-2 text-xl" />
                    <p className="text-sm">
                      {t("almost_done_just_fill_in_the")}:
                      <span className="text-red-700">*</span>{" "}
                      {t("required_info")}
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormControl fullWidth>
                        <label className="text-sm font-bold mb-1">
                          {t("first_name")}{" "}
                          <span className="text-red-700">*</span>
                        </label>
                        <TextField
                          required
                          fullWidth
                          size="small"
                          value={user?.firstName}
                        />
                      </FormControl>
                      <FormControl fullWidth>
                        <label className="text-sm font-bold mb-1">
                          {t("last_name")}{" "}
                          <span className="text-red-700">*</span>
                        </label>
                        <TextField
                          required
                          fullWidth
                          size="small"
                          value={user?.lastName}
                        />
                      </FormControl>
                    </div>
                    <div className="flex flex-col gap-4">
                      <FormControl className="w-1/2 ">
                        <label className="text-sm font-bold mb-1">
                          {t("email_address")}{" "}
                          <span className="text-red-700">*</span>
                        </label>
                        <TextField
                          type="email"
                          required
                          fullWidth
                          size="small"
                          value={user?.email}
                        />
                      </FormControl>

                      <FormControl className="w-1/2 ">
                        <label className="text-sm font-bold mb-1">
                          {t("country_region")}{" "}
                          <span className="text-red-700">*</span>
                        </label>
                        <Select
                          value={user?.nationality}
                          displayEmpty
                          renderValue={(value) => value || t("country_region")}
                          size="small"
                        >
                          <MenuItem value="select country" disabled>
                            {t("select_country")}
                          </MenuItem>
                          <MenuItem value="Egypt">{t("egypt")}</MenuItem>
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
                        value={user?.phoneNumber}
                        helperText={t("so_the_accommodation_can_reach_you")}
                      />
                    </div>

                    <FormControlLabel
                      control={<Checkbox size="medium" />}
                      label={
                        <span className="text-sm">
                          {t("yes_i_d_like_free_paperless_confirmation")}

                          <span className="block text-xs text-gray-500">
                            {t("we_ll_text_you_a_link_to_download_our_app")}
                          </span>
                        </span>
                      }
                    />
                    <div className="border-b border-gray-300"></div>
                    <div className="flex flex-col gap-2">
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          <span className="text-sm font-bold text-black">
                            {t("who_are_you_booking_for")}
                          </span>
                        </FormLabel>
                        <RadioGroup defaultValue="main">
                          <FormControlLabel
                            value="main"
                            control={<Radio />}
                            label={t("i_am_the_main_guest")}
                          />
                          <FormControlLabel
                            value="other"
                            control={<Radio />}
                            label={t("booking_is_for_someone_else")}
                          />
                        </RadioGroup>
                      </FormControl>

                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          <span className="text-sm font-bold text-black">
                            {t("are_you_travelling_for_work")}
                          </span>
                        </FormLabel>
                        <RadioGroup defaultValue="no" row>
                          <FormControlLabel
                            value="yes"
                            control={<Radio />}
                            label={t("yes")}
                          />
                          <FormControlLabel
                            value="no"
                            control={<Radio />}
                            label={t("no")}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </form>
                </div>
                <div className="flex flex-col gap-2 rounded-lg p-4 border border-gray-300 mt-4">
                  <h2 className="text-xl font-bold mb-6">
                    {t("special_requests")}
                  </h2>
                  <p className="text-sm">
                    {t("special_requests_cannot_be_guaranteed")} –{" "}
                    {t("the_property_will_do_its_best_to_meet_your_needs")}{" "}
                    {t(
                      "you_can_always_make_a_special_request_after_your_booking_is_complete"
                    )}
                  </p>
                  <label className="text-sm font-bold mb-1">
                    {t("please_write_your_requests_in_english")}.{" "}
                    <span className="text-xs text-gray-500 font-normal">
                      {t("optional")}
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
                  <h2 className="text-xl font-bold mb-6">
                    {t("your_arrival_time")}
                  </h2>
                  <p className="text-sm flex items-center">
                    <IoIosCheckmarkCircleOutline className="inline-block mx-2 text-3xl text-[#1F8F27]" />
                    {t("your_room_will_be_ready_for_check_in")} {t("o_clock")}{" "}
                    {hotel?.HouseRules.CheckInTime}
                  </p>
                  <p className="text-sm flex items-center">
                    <MdOutlineRoomService className="inline-block mx-2 text-3xl text-[#1F8F27]" />
                    {t("24_hour_front_desk")} – {t("help_whenever_you_need_it")}
                  </p>
                </div>
                <div className="mt-6 flex justify-end">
                  <form action={onSubmit}>
                    <button
                      type="submit"
                      className="flex items-center  text-base font-semibold bg-[#006ce4] text-white py-4 px-6 rounded  hover:bg-blue-700"
                    >
                      {t("next")}: {t("final_details")}{" "}
                      {locale === "ar" ? (
                        <IoIosArrowBack className="inline-block mr-2 text-xl" />
                      ) : (
                        <IoIosArrowForward className="inline-block ml-2 text-xl" />
                      )}
                    </button>
                  </form>
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
