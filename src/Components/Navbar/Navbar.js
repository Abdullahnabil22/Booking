"use client";
import { useAuth } from "@/context/user";
import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import ENFlag from "@/Public/ENFlag.png";
import SaudiFlag from "@/Public/saudiArabia.png";

import { MdMenu } from "react-icons/md";
import { BsHouseAdd } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";


function Navbar() {
  const locale = useLocale();
  const { email, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const t = useTranslations("Navbar");
  const pathname = usePathname();

  const languages = [
    { code: "en", name: "English", flag: ENFlag },
    { code: "ar", name: "العربية", flag: SaudiFlag },
  ];

  const handleLanguageChange = (langCode) => {
    Cookies.set("NEXT_LOCALE", langCode);
    setIsLanguageModalOpen(false);
    window.location.reload();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header
        className="mainColor text-white py-4"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <div className="max-w-7xl lg:mx-44 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="font-bold text-2xl BodyFont">
            Booking.com
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <button className="mainColor navHover px-3 py-2 rounded">EGP</button>
            <button
              className="mainColor navHover px-3 py-2 rounded"
              onClick={() => setIsLanguageModalOpen(true)}
            >
              <Image
                src={locale == "en" ? ENFlag : SaudiFlag}
                className="rounded-full"
                alt="Language"
                width={24}
                height={24}
              />
            </button>
            <Link href="/list">
              <button className="mainColor navHover px-3 py-2 rounded">
                {t("list_your_property")}
              </button>
            </Link>

            {/* Check if the user is logged in */}
            {email ? (
              <div className="relative inline-block text-left">
                <Avatar
                  sx={{ }}
                  alt="User"
                  src="https://q-xx.bstatic.com/backend_static/common/img/header/avatar.png"
                  onClick={toggleDropdown}
                  className="cursor-pointer"
                />

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
                        Profile
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {/* <FontAwesomeIcon icon="fa-solid fa-gear" /> */}
                        Settings
                      </a>
                      <a
                        href="#"
                        onClick={logout}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >

                        {t("logout")}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/SignRegist">
                  <button className="bg-white text-blue-700 text-sm hover:bg-blue-100 px-3 py-2 rounded border-blue-900 font-medium">
                    {t("register")}
                  </button>
                </Link>
                <Link href="/Signin">
                  <button className="bg-white text-blue-700 text-sm hover:bg-blue-100 px-3 py-2 rounded border-blue-900 font-medium">
                    {t("sign_in")}
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden space-x-4 items-center">
            <Link href="/signin" className="text-white text-2xl">
              <FaRegUserCircle className="me-2" />
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

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 md:hidden"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col h-full">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 text-black text-2xl"
              >
                &times;
              </button>
              <div className="flex flex-col items-start justify-start space-y-4 h-full p-6 mt-10">
                <h1 className="text-2xl font-bold">{t("more")}</h1>
                <button className="px-3 py-2 rounded">EGP {t("currency")}</button>
                <button
                  className="px-3 py-2 rounded flex items-center space-x-2"
                  onClick={() => setIsLanguageModalOpen(true)}
                >
                  <Image
                    src={locale == "en" ? ENFlag : SaudiFlag}
                    className="rounded-full me-2"
                    alt="Language"
                    width={24}
                    height={24}
                  />
                  {locale == "en" ? "English" : "العربية"}
                </button>
                <button className="px-3 py-2 rounded flex items-center space-x-2">
                  <BsHouseAdd className="text-2xl me-2" />
                  {t("list_your_property")}
                </button>
                <button className="px-3 py-2 rounded flex items-center space-x-2">
                  <span className="infolink me-2"></span>
                  {t("contact_customer_service")}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
              <h2 className="text-2xl font-bold mb-4">
                {t("select_language")}
              </h2>

              <div className="space-y-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="flex items-center space-x-2 w-full p-2 hover:bg-gray-100 rounded"
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    <Link
                      href={pathname}
                      locale={lang.code}
                      className="flex items-center space-x-2"
                    >
                      <Image
                        src={lang.flag}
                        alt={lang.name}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <span>{lang.name}</span>
                    </Link>
                  </button>
                ))}
              </div>
              <button
                className="mt-4 bg-[#003B95] px-4 py-2 rounded text-white hover:bg-[#003B95]/80 w-full"
                onClick={() => setIsLanguageModalOpen(false)}
              >
                {t("close")}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
