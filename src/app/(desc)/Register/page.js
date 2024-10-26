"use client";

import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import NavPlain from "@/Components/Navbar/NavPlain";
import axios from "axios";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

import { useAuth } from "@/context/user";

import { useTranslations, useLocale } from "next-intl";

const Register = () => {
  const { login } = useAuth();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();
  const t = useTranslations("Register");

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      checkEmailInDatabase(storedEmail);
    }
  }, []);

  const checkEmailInDatabase = async (email) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/user/checkemail",
        { email }
      );

      if (response.data === "please enter valid email") {
        setEmailExists(false);
        if (password) {
          await registerUser(email, password, username);
        } else {
          setError(t("Password is required for registration."));
        }
      } else {
        setEmailExists(true);
        await loginUser(email, password);
      }
    } catch (error) {
      setError(
        t("An error occurred while checking the email. Please try again.")
      );
    }
  };

  const registerUser = async (email, password, username) => {
    try {
      const response = await axios.post("http://localhost:3000/user/", {
        email,
        password,
        username,
        role: "user",
      });
      router.push("/Signin");
      console.log("User registered:", response.data);
    } catch (error) {
      setError(t("An error occurred while registering. Please try again."));
    }
  };

  const loginUser = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:3000/user/login", {
        email,
        password,
      });

      console.log("respo", response);
      console.log("User logged in:", response.data);
      const token = response.data;
      // console.log("token user",token)

      try {
        const decodedToken = jwtDecode(token);
        console.log("Decoded Token:", decodedToken);

        // localStorage.setItem("Decoded Token:",decodedToken)

        // localStorage.setItem("token:",token)
        login(token);

        const userRole = decodedToken.role;
        console.log("userRole", userRole);

        if (userRole === "owner") {
          router.push(` http://localhost:4200/login/?token=${token}`);
        } else if (userRole === "user") {
          console.log("hamadarole");

          router.push("/");
        } else {
          console.error("Unknown role:", userRole);
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const storedEmail = localStorage.getItem("email");
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{10,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        t(
          "Password must be at least 10 characters long and include uppercase, lowercase letters, and numbers."
        )
      );
    } else if (!emailExists && password !== confirmPassword) {
      setError(t("Passwords do not match."));
    } else {
      setError("");
      if (emailExists) {
        await loginUser(storedEmail, password);
      } else {
        await registerUser(storedEmail, password, username);
      }
    }
  };

  const handleForgotPassword = async () => {
    const storedEmail = localStorage.getItem("email");
    if (!storedEmail) {
      setError(t("Email is required for password reset."));
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/user/forgotPassword",
        { email: storedEmail }
      );
      if (response.data.message === "Email sent successfully") {
        setSuccessMessage(t("Check your email for the password reset link."));
      }
    } catch (error) {
      setError(
        t("An error occurred while sending the password reset request.")
      );
    }
  };

  return (
    <>
      <NavPlain />
      <div className="max-w-md mx-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          {!emailExists && (
            <>
              <h4 className="font-bold py-2 text-2xl">
                {t("Create password")}
              </h4>
              <h4 className="py-2">
                {t(
                  "Use a minimum of 10 characters, including uppercase letters, lowercase letters, and numbers."
                )}
              </h4>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("Username")}
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder={t("Enter your username")}
                />
              </div>
            </>
          )}

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              {emailExists ? (
                <>
                  <p className="font-bold">{t("Enter your password")}</p>
                  <p className="pb-3">
                    {t("Please enter your Booking.com password for")}
                  </p>
                </>
              ) : (
                t("Create Password")
              )}
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder={t("Enter your password")}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {!emailExists && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                {t("Confirm Password")}
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder={t("Confirm your password")}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
          )}

          {emailExists && (
            <div className="text-center">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-blue-500 hover:text-blue-700 underline font-semibold"
              >
                {t("Forgot Password?")}
              </button>
              {successMessage && (
                <p className="text-green-500 text-sm">{successMessage}</p>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            {emailExists ? t("Log In") : t("Register")}
          </button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      </div>
    </>
  );
};

export default Register;
