import ReviewCard from "@/Components/Cards/ReviewCard";
import RatingBar from "@/Components/divs/RatingBar";
import { categories, reviews } from "@/Static/Arrays";
import React from "react";
import Rating from "@mui/material/Rating";
import { GoPlus } from "react-icons/go";

import { FaDotCircle } from "react-icons/fa";

const GuestReviews = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Guest reviews</h2>
        <button className="bg-blue-600 text-white px-3 py-2 rounded text-sm">
          See availability
        </button>
      </div>

      <div className="py-2 flex items-center gap-2 mb-4">
        <span className="text-base px-2 py-1 font-bold mr-2 bg-blue-900 text-white rounded">
          7.9
        </span>
        <h2 className="font-semibold text-base text-black">Good</h2>
        <div className="text-sm font-semibold text-[#595959]">
          13 reviews{" "}
          <a href="#" className=" text-blue-600 text-xs">
            Read all reviews
          </a>
        </div>
      </div>

      <h3 className="font-bold mb-2 text-base">Categories:</h3>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {categories.map((category, index) => (
          <RatingBar
            key={index}
            category={category.name}
            score={category.score}
          />
        ))}
      </div>

      <h3 className="font-bold mb-2">Select topics to read reviews:</h3>
      <div className="flex space-x-2 mb-6">
        {["Breakfast", "View", "Dinner"].map((topic, index) => (
          <button
            key={index}
            className="border rounded-full px-3 py-1 flex items-center text-sm font-semibold"
          >
            <GoPlus size={16} className="mr-1 " /> {topic}
          </button>
        ))}
      </div>

      <h3 className="font-bold mb-4">Guests who stayed here loved</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>

      <button className="border border-blue-600 text-blue-600 px-3 py-2 rounded text-sm font-semibold">
        Read all reviews
      </button>

      <div className="mt-6 flex items-center p-4 border-2 border-grey-600  rounded-lg flex-wrap">
        <h3 className="font-bold mb-2 text-xl">Quality rating</h3>
        <Rating
          value={3}
          readOnly
          precision={0.5}
          className="m-4"
          size="small"
          icon={<FaDotCircle size={16} className="text-yellow-500" />}
          emptyIcon={<FaDotCircle size={16} className="text-grey-500" />}
        />
        <div className="">
          <span className="text-sm">
            Booking.com rated the quality of this property as 3 out of 5 based
            on factors like facilities, size, location, and service.
          </span>
        </div>
      </div>
    </div>
  );
};

export default GuestReviews;
