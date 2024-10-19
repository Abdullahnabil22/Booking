"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ENFlag from "@/Public/ENFlag.png";
import SaudiFlag from "@/Public/saudiArabia.png";

function NavPlain() {
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const toggleLanguage = (lang) => {
    setCurrentLanguage(lang);
    setIsLanguageModalOpen(false);
  };

  return (
    <>
      <header className="mainColor text-white py-4">
        <div className="max-w-7xl lg:mx-44 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="font-bold text-lg BodyFont">
            Booking.com
          </Link>

          <div className="hidden md:flex space-x-4">
            <button
              className="mainColor navHover px-3 py-2 rounded"
              onClick={() => setIsLanguageModalOpen(true)}
            >
              <Image
                src={currentLanguage === "en" ? ENFlag : SaudiFlag}
                className="rounded-full"
                alt="Language"
                width={24}
                height={24}
              />
            </button>
            <button className="mainColor navHover px-3 py-2 rounded">
              {" "}
              <span className="infolink "></span>
            </button>
          </div>
        </div>
      </header>

      {/* Add the language modal */}
      {isLanguageModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Select Language</h2>
            <div className="flex space-x-4">
              <button
                onClick={() => toggleLanguage("en")}
                className="flex items-center space-x-2 p-2 border rounded"
              >
                <Image src={ENFlag} alt="English" width={24} height={24} />
                <span>English</span>
              </button>
              <button
                onClick={() => toggleLanguage("ar")}
                className="flex items-center space-x-2 p-2 border rounded"
              >
                <Image src={SaudiFlag} alt="Arabic" width={24} height={24} />
                <span>العربية</span>
              </button>
            </div>
            <button
              onClick={() => setIsLanguageModalOpen(false)}
              className="mt-4 px-4 py-2 bg-gray-200 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default NavPlain;
