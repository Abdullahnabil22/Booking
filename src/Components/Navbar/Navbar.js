"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ENFlag from "@/Public/ENFlag.png";
import SaudiFlag from "@/Public/saudiArabia.png";
import { MdMenu } from "react-icons/md";
import { BsHouseAdd } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const languages = [
    { code: "en", name: "English", flag: ENFlag },
    { code: "ar", name: "العربية", flag: SaudiFlag },
  ];

  const handleLanguageChange = (langCode) => {
    setCurrentLanguage(langCode);
    setIsLanguageModalOpen(false);
  };

  return (
    <>
      <header className="mainColor text-white py-4">
        <div className="max-w-7xl lg:mx-44 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="font-bold text-2xl BodyFont">
            Booking.com
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <button className="mainColor navHover  px-3 py-2 rounded">
              EGP
            </button>
            <button
              className="mainColor navHover px-3 py-2 rounded"
              onClick={() => setIsLanguageModalOpen(true)}
            >
              <Image
                src={
                  languages.find((lang) => lang.code === currentLanguage).flag
                }
                className="rounded-full"
                alt="Language"
                width={24}
                height={24}
              />
            </button>
            <button className="mainColor navHover px-3 py-2 rounded">
              {" "}
              <span className="infolink  "></span>
            </button>
            <Link href="/list">
              <button className="mainColor navHover px-3 py-2 rounded">
                List your property
              </button>
            </Link>
            <Link href="/Signin">
              <button className="bg-white text-blue-700 text-sm hover:bg-blue-100 px-3 py-2 rounded border-blue-900 font-medium">
                Register
              </button>
            </Link>
            <Link href="/Signin">
              <button className="bg-white text-blue-700 text-sm hover:bg-blue-100 px-3 py-2 rounded  border-blue-900 font-medium">
                Sign in
              </button>
            </Link>
          </div>

          {/* Mobile menu */}
          <div className="flex md:hidden space-x-4">
            <Link href="/signin" className="text-white text-2xl">
              <FaRegUserCircle />
            </Link>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-white text-2xl"
            >
              <MdMenu />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu  */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 md:hidden"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col  h-full">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 text-black text-2xl"
              >
                &times;
              </button>
              <div className="flex flex-col items-start justify-start space-y-4 h-full p-6 mt-10">
                <h1 className="text-2xl font-bold">More</h1>
                <button className="   px-3 py-2 rounded">
                  EGP Egyptian Pound
                </button>
                <button
                  className="px-3 py-2 rounded flex items-center space-x-2"
                  onClick={() => setIsLanguageModalOpen(true)}
                >
                  <Image
                    src={
                      languages.find((lang) => lang.code === currentLanguage)
                        .flag
                    }
                    className="rounded-full me-2"
                    alt="Language"
                    width={24}
                    height={24}
                  />{" "}
                  {languages.find((lang) => lang.code === currentLanguage).name}
                </button>
                <button className="  px-3 py-2 rounded flex items-center space-x-2">
                  <BsHouseAdd className="text-2xl me-2" /> List your property
                </button>
                <button className="  px-3 py-2 rounded">
                  {" "}
                  <span className="infolink  "></span> Contact Customer Service
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Language Modal */}
      <AnimatePresence>
        {isLanguageModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 w-96"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h2 className="text-2xl font-bold mb-4">Select Language</h2>
              <div className="space-y-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="flex items-center space-x-2 w-full p-2 hover:bg-gray-100 rounded"
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    <Image
                      src={lang.flag}
                      alt={lang.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
              <button
                className="mt-4 bg-[#003B95] px-4 py-2 rounded text-white hover:bg-[#003B95]/80 w-full"
                onClick={() => setIsLanguageModalOpen(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
