"use client";
import { useAuth } from "@/context/user";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import ENFlag from "@/Public/ENFlag.png";
import SaudiFlag from "@/Public/saudiArabia.png";

import { MdMenu } from "react-icons/md";
import { BsHouseAdd } from "react-icons/bs";
import { FaRegUserCircle, FaUserCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { jwtDecode } from "jwt-decode";
import { GetUser } from "@/API/GET";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

function Navbar() {
  const locale = useLocale();
  const { token, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [user, setUser] = useState(null);
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const checkAuth = async () => {
      const storedToken = localStorage.getItem("token");

      if (token || storedToken || session) {
        try {
          if (session) {
            setUser({
              lastName: session.user.name,
            });
          } else {
            const currentToken = token || storedToken;
            const decoded = jwtDecode(currentToken);
            const userId = decoded.id;
            const userData = await GetUser(userId);
            setUser(userData);
          }
        } catch (error) {
          console.error("Error in authentication:", error);
          localStorage.removeItem("token");
          logout();
        }
      } else {
        setUser(null);
      }
    };

    checkAuth();
  }, [token, session]);

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
  async function handleLogout() {
    if (token) {
      logout();
    } else if (session) {
      await signOut({ redirect: true, callbackUrl: "/" });
    }
  }

  const isAuthenticated = token || session;

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
            <button className="mainColor navHover px-3 py-2 rounded">
              EGP
            </button>
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
            {isAuthenticated ? (
              <div className="relative text-left flex items-center">
                <div
                  onClick={toggleDropdown}
                  className="flex items-center cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-full bg-yellow-500 border-2 border-yellow-600 flex items-center justify-center text-white font-bold mr-2">
                    {user?.lastName?.charAt(0).toUpperCase() || "U"}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base mr-2 self-start font-medium">
                      {user?.lastName}
                    </span>
                    <span className="text-xs self-start">See profile</span>
                  </div>
                </div>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a
                        href="profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
                        Profile
                      </a>
                      <a
                        href="/bookings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Bookings
                      </a>
                      <a
                        href="/save"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {/* <FontAwesomeIcon icon="fa-solid fa-gear" /> */}
                        Saved
                      </a>
                      <a
                        href="#"
                        onClick={handleLogout}
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
            {isAuthenticated ? (
              <div className="w-7 h-7 text-xs rounded-full bg-yellow-500 border-2 border-yellow-600 flex items-center justify-center text-white  mr-2">
                {user?.lastName?.charAt(0).toUpperCase() || "U"}
              </div>
            ) : (
              <FaUserCircle className="me-2" />
            )}

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
                {isAuthenticated ? (
                  <button
                    className="px-3 py-2 rounded"
                    onClick={() => router.push("/profile")}
                  >
                    Profile
                  </button>
                ) : null}
                {isAuthenticated ? (
                  <button
                    className="px-3 py-2 rounded"
                    onClick={() => router.push("/bookings")}
                  >
                    Bookings
                  </button>
                ) : null}
                {isAuthenticated ? (
                  <button
                    className="px-3 py-2 rounded"
                    onClick={() => router.push("/save")}
                  >
                    Saved
                  </button>
                ) : null}
                <button className="px-3 py-2 rounded">
                  EGP {t("currency")}
                </button>
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
