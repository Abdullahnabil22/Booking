"use client";
import { useState } from "react";
import { useLocale } from "next-intl";
import * as React from "react";
import Image from "next/image";
import "./page.css";
import giza from "@/Public/car/giza.jpg";
import giza8 from "@/Public/car/giza8.jpg";
import hurghada from "@/Public/car/hurghada.jpg";
import alex from "@/Public/car/alex.jpg";
import phot33 from "@/Public/car/phot33.png";
import phot333 from "@/Public/car/phot333.png";
import phot3333 from "@/Public/car/phot3333.png";
import phot1 from "@/Public/car/phot1.png";
import phot2 from "@/Public/car/phot2.png";
import phot3 from "@/Public/car/phot3.png";
import phot4 from "@/Public/car/phot4.png";
import phot5 from "@/Public/car/phot5.png";
import phot6 from "@/Public/car/phot6.png";
import phot7 from "@/Public/car/phot7.png";
import phot8 from "@/Public/car/phot8.png";
import phot9 from "@/Public/car/phot9.png";
import GeniusGenericGiftBox from "@/Public/car/GeniusGenericGiftBox.png";
import SearchBar from "@/Components/searchBar/searchBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/Components/ui/alert";
import { Button } from "@/Components/ui/button";

import Main from "@/Components/divs/Main";
import SmFooter from "@/Components/Footer/smFooter";
import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";
import AccountTravel from "@/Components/AccountTravel/page";
const data = {
  "Cities in Egypt": [
    { name: "Cairo", locations: 3, price: 1939.71, imge: giza8 },
    { name: "Alexandria", locations: 5, price: 24400.0, imge: alex },
    // { name: "Alexandria", locations: 5, price: 2400.00,imge:giza8},
  ],
  "Regions in Egypt": [
    { name: "Red Sea Governorate", locations: 17, price: 2541.94, imge: giza8 },
    { name: "Giza Governorate", locations: 4, price: 1741.54, imge: alex },
    { name: " Governorate", locations: 55, price: 1221.54, imge: giza },
  ],
  "Cities worldwide": [
    { name: "El Segund", locations: 105, price: 28033.83, imge: giza8 },
    { name: "Coolangta", locations: 22, price: 25681.29, imge: giza },
    { name: "Coolanaa", locations: 92, price: 6483.29, imge: giza },
  ],
  "Airports worldwide": [
    { name: "Phoenix", locations: 79, price: 30040.0, imge: giza8 },
    { name: "qena", locations: 437, price: 320.0, imge: alex },
    { name: "aswan", locations: 467, price: 3920.0, imge: hurghada },
  ],
};
function Cars() {
  const locale = useLocale();
  const [category, setCategory] = useState("Cities in Egypt");

  return (
    <>
      <Navbar />
      <Header />

      <Main
        title="Car rentals for any kind of trip"
        description="Great cars at great prices from the biggest rental companies"
      />
      <div className=" -mt-6 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 mb-4">
        <SearchBar />
      </div>
      <section className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 mb-4">
        <form className="flex justify-start mx-1">
          <div className="flex m-5 grid grid-cols-2 ">
            <div className=" flex gap-x-2 ">
              <p htmlFor="candidates" className="text-gray-500 text-xs Deliver">
                Drop car off at different location.
              </p>

              <input
                id="candidates"
                name="candidates"
                type="checkbox"
                className="h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>

            <div className=" flex gap-x-2">
              <p
                htmlFor="candidates"
                className=" text-gray-500 text-xs Deliver"
              >
                Driver aged 30 – 65?
              </p>

              <input
                id="candidates"
                name="candidates"
                type="checkbox"
                className="h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
          </div>
        </form>

        <div className="flex justify-start mx-5">
          <h4 className="Popular">Popular car hire brands</h4>
        </div>
        {/* photo */}
        <div className="my-5 flex justify-start mx-5 ">
          <div>
            <Image
              className="imgg"
              src={phot8}
              alt="My Image"
              width={120}
              height={100}
            />
            <p className="font">Thrifty</p>
          </div>
          <div>
            <Image
              className="imgg"
              src={phot9}
              alt="My Image"
              width={110}
              height={100}
            />
            <p className="font">Enterprise</p>
          </div>

          <div>
            <Image
              className="imgg"
              src={phot7}
              alt="My Image"
              width={110}
              height={100}
            />
            <p className="font">National</p>
          </div>

          <div>
            <Image
              className="imgg"
              src={phot6}
              alt="My Image"
              width={110}
              height={100}
            />
            <p className="font">Surprice</p>
          </div>

          <div>
            <Image
              className="imgg"
              src={phot5}
              alt="My Image"
              width={110}
              height={100}
            />
            <p className="font">Avis</p>
          </div>

          <div>
            <Image
              className="imgg"
              src={phot4}
              alt="My Image"
              width={110}
              height={100}
            />
            <p className="font">Caldera</p>
          </div>

          <div>
            <Image
              className="imgg"
              src={phot3}
              alt="My Image"
              width={110}
              height={100}
            />
            <p className="font">SK Rent</p>
          </div>

          <div>
            <Image
              className="imgg"
              src={phot1}
              alt="My Image"
              width={110}
              height={100}
            />
            <p className="font">Enterprise</p>
          </div>

          <div>
            <Image
              className="imgg"
              src={phot2}
              alt="My Image"
              width={120}
              height={100}
            />
            <p className="font">budget</p>
          </div>
        </div>
        <br />
      </section>
      <section className="w-full mb-5">
        <AccountTravel />
      </section>

      <section className="bg-gray-100 flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 mb-4">
        <div className=" flex m-6">
          <div className=" flex mt-5 mx-4 ">
            <Image
              src={phot33}
              width={40}
              height={40}
              className="pt-4"
              alt="My Image"
            />
            <div>
              <h6 className="Sign">We’re here for you</h6>
              <p className="phot33">Customer support in over 30 languages</p>
            </div>
          </div>
          <div className=" flex mt-5 mx-4">
            <Image
              src={phot333}
              width={40}
              height={40}
              className="pt-4"
              alt="My Image"
            />

            <div>
              <h6 className="Sign">Free cancellation</h6>
              <p className="phot33">
                Up to 48 hours before pick-up, on most bookings
              </p>
            </div>
          </div>
          <div className=" flex mt-5 mx-4">
            <Image
              src={phot3333}
              width={80}
              height={50}
              className="pt-4"
              alt="My Image"
            />

            <div>
              <h6 className="Sign">5 million+ reviews</h6>
              <p className="phot33">By real, verified customers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 mb-4">
        <div className="flex justify-start mx-5 mt-5">
          <h4 className="Popular">Popular car hire brands</h4>
        </div>

        <div className="Accordion grid grid-cols-3 gap-4 p-4 ">
          <Accordion type="single" collapsible className=" Accordion1 ">
            <AccordionItem value="item-1 ">
              <AccordionTrigger className="Sign">
                How much does it cost to rent a car in Egypt for a week?
              </AccordionTrigger>
              <AccordionContent className="Save_10">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2 ">
              <AccordionTrigger className="Sign">
                How much does it cost to rent a car in Egypt for a week?
              </AccordionTrigger>
              <AccordionContent className="Save_10">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3 ">
              <AccordionTrigger className="Sign">
                How much does it cost to rent a car in Egypt for a week?
              </AccordionTrigger>
              <AccordionContent className="Save_10">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4 ">
              <AccordionTrigger className="Sign">
                How much does it cost to rent a car in Egypt for a week?
              </AccordionTrigger>
              <AccordionContent className="Save_10">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5 ">
              <AccordionTrigger className="Sign">
                How much does it cost to rent a car in Egypt for a week?
              </AccordionTrigger>
              <AccordionContent className="Save_10">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6 ">
              <AccordionTrigger className="Sign">
                How much does it cost to rent a car in Egypt for a week?
              </AccordionTrigger>
              <AccordionContent className="Save_10">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type="single"
            collapsible
            className="w-full Accordion1 mx-16 "
          >
            <AccordionItem value="item-7 ">
              <AccordionTrigger className="Sign">
                How much does it cost to rent a car in Egypt for a week?
              </AccordionTrigger>
              <AccordionContent className="Save_10">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8 ">
              <AccordionTrigger className="Sign">
                How much does it cost to rent a car in Egypt for a week?
              </AccordionTrigger>
              <AccordionContent className="Save_10">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9 ">
              <AccordionTrigger className="Sign">
                How much does it cost to rent a car in Egypt for a week?
              </AccordionTrigger>
              <AccordionContent className="Save_10">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10 ">
              <AccordionTrigger className="Sign">
                How much does it cost to rent a car in Egypt for a week?
              </AccordionTrigger>
              <AccordionContent className="Save_10">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11 ">
              <AccordionTrigger className="Sign">
                How much does it cost to rent a car in Egypt for a week?
              </AccordionTrigger>
              <AccordionContent className="Save_10">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-12 ">
              <AccordionTrigger className="Sign">
                How much does it cost to rent a car in Egypt for a week?
              </AccordionTrigger>
              <AccordionContent className="Save_10">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex justify-start mx-5 mt-5">
          <h4 className="Popular">Popular car hire brands</h4>
        </div>
        <div className="flex justify-start mx-5 ">
          <h4 className="Save_10">
            Explore more options to hire a car for cheap
          </h4>
        </div>
        <div>
          <div className="Save_10 pt-1 mx-2 ">
            {Object.keys(data).map((key) => (
              <button
                key={key}
                onClick={() => setCategory(key)}
                className={`button-category ${
                  category === key ? "active" : ""
                }`}
              >
                {key}
              </button>
            ))}
          </div>
          <div className="item-container">
            {data[category].map((item) => (
              <div key={item.name} className="item col-4 mt-5">
                <Image
                  src={item.imge}
                  width={70}
                  height={90}
                  className="pt-4"
                  alt={item.name}
                />
                <div>
                  <h3 className="Sign">{item.name}</h3>
                  <p className="Save_10">{item.locations} car hire locations</p>
                  <p className="Save_10">
                    Average price of EGP {item.price.toFixed(5)} per day
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SmFooter />
    </>
  );
}

export default Cars;
