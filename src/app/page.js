import Footer from "@/Components/Footer/Footer";
import Heading from "@/Components/Headings/Heading";
import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";
import Image from "next/image";
import SeizeTheMoment from "@/Public/SeizeMoment.jpeg";
import GoForAGoodTime from "@/Public/GoodTime.jpeg";
import EgyptFlag from "@/Public/Egypt.png";
import ExploreCard from "@/Components/Cards/ExploreCard";
import { Egypt, locations } from "@/Static/Arrays";
import { PropertyType } from "@/Static/Arrays";
import Browse from "@/Components/Cards/Browse";
import { TbBeach } from "react-icons/tb";
import { LiaCitySolid } from "react-icons/lia";
import { LuBike } from "react-icons/lu";
import Nav from "@/Components/Navbar/Nav";
import Deals from "@/Components/Cards/Deals";
import NewCairo from "@/Public/PrimeNewCairo.jpg";
import Gouna from "@/Public/Gouna.jpg";
import People from "@/Public/People.webp";
import Japan from "@/Public/Japan.webp";
import Asia from "@/Public/Asia.webp";
import Properties from "@/Components/Cards/properties";
import Destination from "@/Components/Navbar/Destination";
import Animated from "@/Components/divs/animated";
import { imageMap } from "@/Static/images";
import { BrowseImagesMap } from "@/Static/images";
import EndLinks from "@/Components/Footer/endLinks";
import Main from "@/Components/divs/Main";
import Places from "@/Components/divs/places";
import SearchBar from "@/Components/searchBar/searchBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Main
        title="Find your next stay "
        description="Search deals on hotels, homes, and much more..."
      />
      <div className=" -mt-6 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 mb-4">
        <SearchBar />
      </div>
      {/* offers section */}
      <section className="py-8 sm:py-20 hidden lg:block">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 mb-4">
          <Heading
            title="Offers"
            description="Promotions, deals and special offers for you"
          />
        </div>
        <div className="flex space-x-4 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          {/* Left card */}
          <div
            className="bg-white shadow-lg rounded-lg overflow-hidden w-1/2"
            style={{
              backgroundImage: `url(${SeizeTheMoment.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="p-6">
              <h2 className="text-xl text-white font-bold mb-2">
                Seize the moment
              </h2>
              <p className="text-white mb-4 text-sm">
                Save 15% or more when you book and stay before 1 October <br />{" "}
                2024
              </p>
              <button
                href="#"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-semibold"
              >
                Find Getaway Deals
              </button>
            </div>
          </div>

          {/* Right card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/2 flex justify-between">
            <div className="p-6 ">
              <h2 className="text-xl font-bold mb-2">
                Go for a good time, not a long time
              </h2>
              <p className="text-gray-700 mb-4 text-sm">
                Finish your year with a mini break. Save 15% or more when you
                book and stay by 7 January 2025.
              </p>
              <button
                href="#"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-semibold"
              >
                Find Late Escape Deals
              </button>
            </div>
            <div className="flex justify-center items-center pe-5">
              <Image
                src={GoForAGoodTime}
                alt="Go for a good time"
                className="rounded-lg"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      </section>
      {/* destinations section */}
      <section className="py-8 sm:py-4">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading
            title="Trending destinations"
            description="Travellers searching for Egypt also booked these"
          />
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          {/* <!-- Luxor Card --> */}
          <div
            className="relative overflow-hidden rounded-lg shadow-lg w-full h-64 destination-card"
            style={{
              backgroundImage: `url(${imageMap.Luxor.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-0 left-0 text-white p-3 text-2xl z-10 flex items-center">
              <h3 className="font-bold text-stroke">Luxor</h3>
              <Image
                src={EgyptFlag}
                alt="Egypt Flag"
                className=" ms-2"
                width={24}
                height={24}
              />
            </div>
          </div>
          {/* <!-- Cairo Card --> */}
          <div
            className="relative overflow-hidden rounded-lg shadow-lg w-full h-64 destination-card"
            style={{
              backgroundImage: `url(${imageMap.Cairo.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-0 left-0 text-white p-3 text-2xl z-10 flex items-center">
              <h3 className="font-bold text-stroke">Cairo</h3>
              <Image
                src={EgyptFlag}
                alt="Egypt Flag"
                className=" ms-2"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <div
            className="relative bg-white shadow-lg rounded-lg overflow-hidden w-full h-64 destination-card"
            style={{
              backgroundImage: `url(${imageMap.Aswan.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-0 left-0 w-full p-3 z-10 flex items-center">
              <h3 className="font-bold text-white text-2xl text-stroke">
                Aswan
              </h3>
              <Image
                src={EgyptFlag}
                alt="Egypt Flag"
                className=" ms-2"
                width={24}
                height={24}
              />
            </div>
          </div>
          <div
            className="relative bg-white shadow-lg rounded-lg overflow-hidden w-full h-64 destination-card"
            style={{
              backgroundImage: `url(${imageMap.Hurghada.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-0 left-0 w-full p-3 z-10 flex items-center">
              <h3 className="font-bold text-white text-2xl text-stroke">
                Hurghada
              </h3>
              <Image
                src={EgyptFlag}
                alt="Egypt Flag"
                className=" ms-2"
                width={24}
                height={24}
              />
            </div>
          </div>
          <div
            className="relative bg-white shadow-lg rounded-lg overflow-hidden w-full h-64 destination-card"
            style={{
              backgroundImage: `url(${imageMap["Sharm el-Sheikh"].src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-0 left-0 w-full p-3 z-10 flex items-center">
              <h3 className="font-bold text-white text-2xl text-stroke">
                Sharm El Sheikh
              </h3>
              <Image
                src={EgyptFlag}
                alt="Egypt Flag"
                className=" ms-2"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </section>
      {/* explore section */}
      <section className="py-1 sm:py-4">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading
            title="Explore Egypt"
            description="These popular destinations have a lot to offer"
          />
        </div>

        <div className="mt-8 flex  overflow-x-auto custom-scrollbar px-4 xl:mx-48">
          {Egypt.map((destination) => (
            <ExploreCard
              key={destination.name}
              src={imageMap[destination.name]}
              title={destination.name}
              description={destination.description}
            />
          ))}
        </div>
      </section>
      {/* browse by property type section */}
      <section className="py-8 sm:py-4">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading title="Browse by property type" />
        </div>
        <div className="mt-8 flex  space-x-4 overflow-x-auto custom-scrollbar px-4 xl:mx-48">
          {PropertyType.map((Property) => (
            <Browse
              key={Property.name}
              src={BrowseImagesMap[Property.name]}
              title={Property.name}
              description={Property.description}
            />
          ))}
        </div>
      </section>
      {/* planner section */}
      <section className="py-8 sm:py-4">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading
            title="Quick and easy trip planner"
            description="Pick a vibe and explore the top destinations in Egypt"
          />
        </div>
        <div className="mt-8 flex  space-x-4 overflow-x-auto custom-scrollbar  xl:mx-48">
          <Nav icon={TbBeach} text="Beach" isActive={true} />
          <Nav icon={LiaCitySolid} text="City" isActive={false} />
          <Nav icon={LuBike} text="Outdoors" isActive={false} />
        </div>
        <div className="mt-8 flex  overflow-x-auto custom-scrollbar px-4 xl:mx-48">
          {Egypt.map((destination) => (
            <ExploreCard
              key={destination.name}
              src={imageMap[destination.name]}
              title={destination.name}
              description={destination.description}
            />
          ))}
        </div>
      </section>
      {/* deals section */}
      <section className="py-8 sm:py-4">
        <div className="flex justify-start items-start flex-col mb-4 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading
            title="Deals for the weekend"
            description="Save on stays for September 13 - September 15" //TODO: change this description
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Deals
            imageSrc={NewCairo.src}
            title="Comfort Giza Inn View"
            location="Cairo, Egypt"
            rating="9.4"
            reviews="151"
            oldPrice="3,923"
            newPrice="2,354"
            nights="2"
          />
          <Deals
            imageSrc={Gouna.src}
            title="Steigenberger Golf Resort El Gouna"
            location="Hurghada, Egypt"
            rating="8.9"
            reviews="698"
            oldPrice="20,730"
            newPrice="12,438"
            nights="2"
          />
          {/* Add more DealCard components as needed */}
        </div>
      </section>
      {/* inspiration section */}
      <section className="py-1 sm:py-4">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading title="Get inspiration for your next trip" />
        </div>
        <div className="flex flex-col lg:flex-row space-y-4 mt-4 lg:space-y-0 lg:space-x-4 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          {/* Large Card */}
          <div className="w-full lg:w-1/2 overflow-hidden rounded-lg">
            <div
              className="relative h-full w-full transition-transform duration-300 hover:scale-105"
              style={{
                backgroundImage: `url(${People.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white z-10">
                <h3 className="font-bold text-lg">
                  {"New Year's Eve in New York City"}
                </h3>
                <p className="text-sm mt-2">
                  Ring in the new year with iconic moments and unforgettable
                  memories in New York City.
                </p>
              </div>
            </div>
          </div>

          {/* Small Cards */}
          <div className="flex flex-col sm:flex-row lg:w-1/2 space-y-4 sm:space-y-0 sm:space-x-4">
            {/* First Card */}
            <div className="w-full sm:w-1/2">
              <div className=" rounded-lg  overflow-hidden">
                <Image
                  className="object-cover rounded-lg w-full h-48 sm:h-40 lg:h-60"
                  src={Japan.src}
                  alt="Ryokan in Japan"
                  width={265}
                  height={240}
                />
                <div className="pt-4">
                  <h3 className="font-bold text-base">
                    6 best ryokans in Japan to rejuvenate yourself
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Discover unmissable ryokans to relax and unwind in style.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className="w-full sm:w-1/2">
              <div className=" rounded-lg  overflow-hidden">
                <Image
                  className="object-cover rounded-lg w-full h-48 sm:h-40 lg:h-60"
                  src={Asia.src}
                  alt="Asia Christmas"
                  width={265}
                  height={240}
                />
                <div className="pt-4">
                  <h3 className="font-bold text-base">
                    7 best places in Asia to celebrate Christmas
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {
                      " Discover the shimmering lights and festive sights of Asia's holiday season."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* properties section */}
      <section className="py-1 sm:py-4">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading
            title="Stay at our top unique properties"
            description="From castles and villas to boats and igloos, we've got it all"
          />
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Properties
            imageSrc={NewCairo.src}
            title="Comfort Giza Inn View"
            location="Cairo, Egypt"
            rating="9.4"
            reviews="151"
            oldPrice="3,923"
            newPrice="2,354"
            nights="2"
          />
          <Properties
            imageSrc={NewCairo.src}
            title="Comfort Giza Inn View"
            location="Cairo, Egypt"
            rating="9.4"
            reviews="151"
            oldPrice="3,923"
            newPrice="2,354"
            nights="2"
          />
        </div>
      </section>
      {/* Travel section */}
      <section className="py-1 sm:py-4">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading title="Travel more, spend less" />
        </div>
        <div className="mt-8 flex space-x-4 overflow-x-auto custom-scrollbar px-4 xl:mx-48">
          <Animated />
        </div>
      </section>

      <section className="py-1 sm:py-4">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading title="Destinations we love" />
        </div>
        <div className="mt-8 flex space-x-4 overflow-x-auto custom-scrollbar  xl:mx-48">
          <Destination text="Regions" isActive={true} />
          <Destination text="Cities" isActive={false} />
          <Destination text="Places of interest" isActive={false} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 pt-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          {locations.map((location, index) => (
            <Places
              key={index}
              name={location.name}
              propertyCount={location.propertyCount}
            />
          ))}
        </div>
      </section>
      <EndLinks />
      <Footer />
    </>
  );
}
