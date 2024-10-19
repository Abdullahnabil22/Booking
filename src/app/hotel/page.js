"use client";
import GuestReviews from "@/Components/HotelPage/GuestReviews";
import TravelersAsking from "@/Components/HotelPage/TravelersAsking";
import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";
import SearchBar from "@/Components/searchBar/AttractionSearch";
import { useState, useEffect } from "react";
import OverView from "@/Components/divs/overView";
import HotelFacilities from "@/Components/divs/hotelFacilities";
import Policy from "@/Components/divs/policy";
import FinePrint from "@/Components/divs/FinePrint";
import Footer from "@/Components/Footer/Footer";
import EndLinks from "@/Components/Footer/endLinks";
import { GetHotelAmenities, GetHotelID } from "@/API/GET";
import { IoAirplane } from "react-icons/io5";
import { motion } from "framer-motion";
import RoomTable from "@/Components/divs/roomTable";
function Hotel() {
  const InfoTabs = [
    "Overview",
    "Apartment Info & Price",
    "Facilities",
    "House Rules",
    "Guest Reviews",
  ];
  const [activeTab, setActiveTab] = useState("Overview");
  let [hotel, setHotel] = useState(null);
  let [amenities, setAmenities] = useState(null);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const hotelId = "670b29ac401ba9c92d116a70";
        const [hotelData, amenitiesData] = await Promise.all([
          GetHotelID(hotelId),
          GetHotelAmenities(hotelId),
        ]);

        setHotel(hotelData);
        setAmenities(amenitiesData);
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <motion.div
            animate={{ x: 100, opacity: 1 }}
            transition={{
              x: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              },
              y: {
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          >
            <IoAirplane className="text-6xl text-blue-900" />
          </motion.div>
        </div>
      ) : (
        <>
          <Navbar />
          <Header />
          <div className="bg-gradient-to-b from-[#003B95] to-[#003B95] bg-no-repeat bg-[length:100%_50%]">
            <SearchBar />
          </div>

          <section className=" mx-auto  pt-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
            <div className="flex w-full overflow-x-auto pb-4 ">
              {InfoTabs.map((Tab) => (
                <button
                  key={Tab}
                  className={`flex-1 px-6 py-2 text-sm text-center font-medium ${
                    activeTab === Tab
                      ? " border-b-2 border-blue-600"
                      : " hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("Overview")}
                >
                  <a href={`#${Tab}`} className="no-underline">
                    {Tab}
                  </a>
                </button>
              ))}
            </div>
          </section>
          <section
            className="container mx-auto  px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48"
            id="Overview"
          >
            <OverView hotel={hotel} amenities={amenities} />
          </section>
          <section
            className="container mx-auto mt-5  py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48"
            id="Apartment Info & Price"
          >
            <RoomTable hotel={hotel} />
          </section>
          <section
            className="container mx-auto mt-5  py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48"
            id="Guest Reviews"
          >
            <GuestReviews hotel={hotel} />
          </section>
          <section className="container mx-auto  py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
            <TravelersAsking hotel={hotel} />
          </section>
          <section
            className="container mx-auto  py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48"
            id="Facilities"
          >
            <HotelFacilities hotel={hotel} amenities={amenities} />
          </section>
          <section
            className="container mx-auto  py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48"
            id="House Rules"
          >
            <Policy hotel={hotel} />
          </section>
          <section className="container mx-auto  py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
            <FinePrint hotel={hotel} />
          </section>
          <EndLinks />
          <Footer />
        </>
      )}
    </>
  );
}

export default Hotel;
