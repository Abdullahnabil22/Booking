"use client";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
import Link from "next/link";

export default function List() {
  return (
    <div>
      <header className="bg-blue-900 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left side - Booking.com Logo */}
          <Link href="/">
            <h1 className="text-2xl font-bold">Booking.com</h1>
          </Link>

          {/* Right side - Partner info, Sign in, Help, Flag */}
          <div className="flex items-center space-x-4">
            {/* US Flag */}
            <div className="w-6 h-6 overflow-hidden">
              <Image
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                alt="US flag"
                width={30}
                height={20}
              />
            </div>

            {/* Already a partner text */}
            <span className="text-sm">Already a partner?</span>

            {/* Sign in button */}
            <button className="border border-white py-1 px-3 rounded text-sm hover:bg-white hover:text-blue-900 transition-colors">
              Sign in
            </button>

            {/* Help button */}
            <button className="bg-blue-500 text-white py-1 px-3 rounded text-sm hover:bg-blue-600 transition-colors">
              Help
            </button>
          </div>
        </div>
      </header>
      <div className="text-left text-white max-w-md">
        <h1 className="text-4xl font-bold">
          List <span className="text-blue-500">anything</span> on Booking.com
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Whether hosting is your side passion or full-time job, list your home
          today and quickly start earning more income.
        </p>
      </div>
      <div className="bg-white text-black p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-semibold mb-4">Register for free</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
          <li>45% of hosts get their first booking within a week</li>
          <li>Choose between instant bookings and booking requests</li>
          <li>We handle payments for you</li>
        </ul>
        <Link href="/en/signlist">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full">
            Get started now
          </button>
        </Link>

        <p className="mt-4 text-sm ">
          Already started registration?{" "}
          <a href="#" className="underline">
            <br></br>Continue your registration
          </a>
        </p>
      </div>
      <div className="w-full">
        {/* Top Navigation Links */}
        <div className="flex space-x-8 bg-gray-100 py-4 px-8">
          <a
            href="#peace-of-mind"
            className="text-black hover:bg-gray-200 focus:text-blue-800 border-b-2 border-transparent focus:border-blue-800 transition"
          >
            List with peace of mind
          </a>
          <a
            href="#stand-out"
            className="text-black hover:bg-gray-200 focus:text-blue-800 border-b-2 border-transparent focus:border-blue-800 transition"
          >
            Stand out from the start
          </a>
          <a
            href="#global-base"
            className="text-black hover:bg-gray-200 focus:text-blue-800 border-b-2 border-transparent focus:border-blue-800 transition"
          >
            Reach a unique and global customer base
          </a>
          <a
            href="#what-hosts-say"
            className="text-black hover:bg-gray-200 focus:text-blue-800 border-b-2 border-transparent focus:border-blue-800 transition"
          >
            What hosts like you say
          </a>
          <a
            href="#questions-answered"
            className="text-black hover:bg-gray-200 focus:text-blue-800 border-b-2 border-transparent focus:border-blue-800 transition"
          >
            Your questions answered
          </a>
        </div>

        {/* Main Content Section */}
        <div id="peace-of-mind" className="py-16 px-8 bg-white">
          <h2 className="text-3xl font-bold mb-8 text-black">
            List with peace of mind
          </h2>
          <div className="grid grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-6 text-gray-800">
              {" "}
              {/* Change the text color to gray-800 */}
              <div className="flex items-start space-x-4">
                <span className="text-2xl text-green-600">✔️</span>
                <div>
                  <h3 className="font-semibold text-black">Damage payments</h3>{" "}
                  {/* Change header text to black */}
                  <p>
                    Our{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      damage program
                    </a>{" "}
                    covers your property in case of damages.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl text-green-600">✔️</span>
                <div>
                  <h3 className="font-semibold text-black">
                    Your own house rules
                  </h3>
                  <p>
                    Communicate your house rules to potential guests who must
                    agree in order to book.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl text-green-600">✔️</span>
                <div>
                  <h3 className="font-semibold text-black">
                    Choose how you prefer to receive bookings
                  </h3>
                  <p>
                    Either by letting guests book instantly or by{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      reviewing booking requests
                    </a>{" "}
                    before accepting them.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl text-green-600">✔️</span>
                <div>
                  <h3 className="font-semibold text-black">
                    Protection from liability claims
                  </h3>
                  <p>
                    Receive{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      protection against liability claims
                    </a>{" "}
                    from guests and neighbors.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 text-gray-800">
              {" "}
              {/* Change the text color to gray-800 */}
              <div className="flex items-start space-x-4">
                <span className="text-2xl text-green-600">✔️</span>
                <div>
                  <h3 className="font-semibold text-black">
                    Get paid consistently and securely
                  </h3>
                  <p>
                    Get guaranteed payouts and fraud protection through{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Payments by Booking.com
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl text-green-600">✔️</span>
                <div>
                  <h3 className="font-semibold text-black">Verified guests</h3>
                  <p>
                    {
                      " We verify guests' email addresses and credit cards for partners on Payments by Booking.com."
                    }
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl text-green-600">✔️</span>
                <div>
                  <h3 className="font-semibold text-black">Robust support</h3>
                  <p>
                    Access support in 45 languages and manage your property
                    through Pulse, our app for partners like you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-12 bg-gray-100">
        {" "}
        {/* Background color updated to gray */}
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-black">
            Stand out from the start
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
            {/* Import your reviews */}
            <div className="flex flex-col items-center">
              <Image
                src="/Review.png"
                alt="Import your reviews"
                width={80}
                height={80}
              />
              <h3 className="mt-4 text-xl font-semibold text-[#1a1a1a]">
                Import your reviews
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mt-2 text-center max-w-md mx-auto">
                We import your review score from other platforms and display it
                on your Booking.com property page, so you don’t start at zero
                reviews.
              </p>
            </div>

            {/* Import your property details */}
            <div className="flex flex-col items-center">
              <Image
                src="/Puzzle.png"
                alt="Import your property details"
                width={80}
                height={50}
              />
              <h3 className="mt-4 text-xl font-semibold text-[#1a1a1a]">
                Import your property details
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mt-2 text-center max-w-md mx-auto">
                {" "}
                {/* Paragraph restyled */}
                Seamlessly import your property details and sync your
                availability calendar with other platforms to make it easy to
                list and avoid double-bookings.
              </p>
            </div>

            {/* Stand out in the market */}
            <div className="flex flex-col items-center">
              <Image
                src="/Search.png"
                alt="Stand out in the market"
                width={80}
                height={80}
              />
              <h3 className="mt-4 text-xl font-semibold text-[#1a1a1a]">
                Stand out in the market
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mt-2 text-center max-w-md mx-auto">
                {" "}
                {/* Paragraph restyled */}
                The “New to Booking.com” label helps you stand out in our search
                results.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="relative bg-gray-100 py-12 px-4 text-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: "url(/World.png)" }}
        ></div>

        {/* Overlay to slightly darken the background image */}
        <div className="absolute inset-0 bg-white/90"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Reach a unique global customer base
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-24">
            {/* First Stat */}
            <div>
              <p className="text-5xl font-bold text-gray-900">2/3</p>
              <p className="mt-2 text-gray-700">
                of vacation rental guests return to book with us again
              </p>
            </div>

            {/* Second Stat */}
            <div>
              <p className="text-5xl font-bold text-gray-900">48%</p>
              <p className="mt-2 text-gray-700">
                of nights booked by travelers at the end of 2023 were for
                international stays
              </p>
            </div>

            {/* Third Stat */}
            <div>
              <p className="text-5xl font-bold text-gray-900">33%</p>
              <p className="mt-2 text-gray-700">
                of vacation rental customers are at Genius Level 2 or 3. These
                travelers tend to spend more and book directly on our platform.
              </p>
            </div>

            {/* Fourth Stat */}
            <div>
              <p className="text-5xl font-bold text-gray-900">30%</p>
              <p className="mt-2 text-gray-700">
                of all nights booked on our platform were at a vacation rental.
                More travelers flex book both hotels and alternative
                accommodations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What hosts like you say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}

            {/* Card 1 */}
            <div className="p-6 bg-white border-2 border-yellow-500 rounded-lg hover:border-blue-500 shadow-lg transition-colors duration-300">
              <p
                className="text-lg italic mb-4 font-sans text-[#1a1a1a]"
                style={{
                  fontFamily:
                    'BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                }}
              >
                “I was able to list within 15 minutes, and no more than two
                hours later, I had my first booking!”
              </p>
              <div className="flex items-center">
                <div className="w-22 h-70 mr-6">
                  {/* Circular image */}
                  <Image
                    src="/Uk.jpg"
                    alt="Parley Rose"
                    width={70}
                    height={70}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  {/* Clickable name */}
                  <a
                    href="#"
                    className="text-base font-semibold text-gray-900 hover:underline cursor-pointer"
                  >
                    Parley Rose
                  </a>
                  <p className="text-sm text-gray-500">UK-based host</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-white border-2 border-yellow-500 rounded-lg hover:border-blue-500 shadow-lg transition-colors duration-300">
              <p
                className="text-lg italic mb-4 font-sans text-[#1a1a1a]"
                style={{
                  fontFamily:
                    'BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                }}
              >
                {
                  "  “Booking.com is the most straightforward platform to work with. Everything is clear, and it's easy.”"
                }
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 mr-4">
                  <Image
                    src="/Ma.jpg"
                    alt="Martin Fieldman"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-base font-semibold text-gray-900 hover:underline cursor-pointer">
                    Martin Fieldman
                  </p>
                  <p className="text-sm text-gray-500">
                    Managing Director, Abodebed
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-white border-2 border-yellow-500 rounded-lg hover:border-blue-500 shadow-lg transition-colors duration-300">
              <p
                className="text-lg italic mb-4 font-sans text-[#1a1a1a]"
                style={{
                  fontFamily:
                    'BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                }}
              >
                “Booking.com accounts for our largest share of guests and has
                helped get us where we are today.”
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 mr-4">
                  <Image
                    src="/Zo.jpg"
                    alt="Michel and Asja"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-base font-semibold text-gray-900 hover:underline cursor-pointer">
                    Michel and Asja
                  </p>
                  <p className="text-sm text-gray-500">
                    Owners of La Maison de Souhey
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-6 bg-white border-2 border-yellow-500 rounded-lg hover:border-blue-500 shadow-lg transition-colors duration-300">
              <p
                className="text-lg italic mb-4 font-sans text-[#1a1a1a]"
                style={{
                  fontFamily:
                    'BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                }}
              >
                “Travelers come to Charming Lofts from all over the world.
                Booking.com really helps with that.”
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 mr-4">
                  <Image
                    src="/Ch.jpg"
                    alt="Louis Gonzalez"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-base font-semibold text-gray-900 hover:underline cursor-pointer">
                    Louis Gonzalez
                  </p>
                  <p className="text-sm text-gray-500">
                    Charming Lofts, Los Angeles
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="p-6 bg-white border-2 border-yellow-500 rounded-lg hover:border-blue-500 shadow-lg transition-colors duration-300">
              <p
                className="text-lg italic mb-4 font-sans text-[#1a1a1a]"
                style={{
                  fontFamily:
                    'BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                }}
              >
                “After joining Booking.com, my occupancy went up significantly.”
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 mr-4">
                  <Image
                    src="/Ow.jpg"
                    alt="Zoey Berghoff"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-base font-semibold text-gray-900 hover:underline cursor-pointer">
                    Zoey Berghoff
                  </p>
                  <p className="text-sm text-gray-500">US-based host</p>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="p-6 bg-white border-2 border-yellow-500 rounded-lg hover:border-blue-500 shadow-lg transition-colors duration-300">
              <p
                className="text-lg italic mb-4 font-sans text-[#1a1a1a]"
                style={{
                  fontFamily:
                    'BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                }}
              >
                “Getting started with Booking.com was super simple and took no
                time at all.”
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 mr-4">
                  <Image
                    src="/Own.jpg"
                    alt="Shawn Ritzenthaler"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-base font-semibold text-gray-900 hover:underline cursor-pointer">
                    Shawn Ritzenthaler
                  </p>
                  <p className="text-sm text-gray-500">
                    Owner of The Hollywood Hills Mansion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full bg-white text-black py-8">
        <div className="px-4 max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl font-bold mb-6">Your questions answered</h2>

          {/* Accordion Component */}
          <div className="flex space-x-8">
            {/* FAQ Item 1 */}
            <Accordion
              type="single"
              collapsible
              className="border-t border-b divide-y w-1/2"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  What happens if my property is damaged by a guest?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base text-gray-700 mt-2">
                    Property owners can request damage deposits from guests.
                    Deposits help cover any potential damage caused by a guest,
                    offering some reassurance that your property will be treated
                    respectfully. If anything goes wrong, it can be reported to
                    our team through our misconduct reporting feature.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* FAQ Item 2 */}
            <Accordion
              type="single"
              collapsible
              className="border-t border-b divide-y w-1/2"
            >
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  When will my property go online?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base text-gray-700 mt-2">
                    Your property will go online once the listing has been
                    reviewed and approved by our team. You’ll receive a
                    notification when it is live.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Additional Link */}
          <p className="text-base mt-6 text-gray-500">
            Still have questions? Find answers to all your questions in our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              FAQ
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
