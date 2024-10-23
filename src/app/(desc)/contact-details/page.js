"use client";

import { useState } from "react";
import NavPlain from "@/Components/Navbar/NavPlain";
import axios from "axios";
import { useRouter } from "next/navigation";

const ContactDetails = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();


  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{10,}$/;


  const email = localStorage.getItem("email");

  console.log(email);

  const creatUser = async (firstName, lastName, phoneNumber, password) => {
    try {
      const response = await axios.post("http://localhost:3000/user/", {
        firstName,
        lastName,
        phoneNumber,
        password,
        email,
        role: "owner",

      });
      router.push(" http://localhost:4200/");

      console.log("User registered:", response.data);
    } catch (error) {
      setError("An error occurred while registering. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("كلمات المرور لا تتطابق.");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "يجب أن تتكون كلمة المرور من 10 أحرف على الأقل وتحتوي على أحرف كبيرة وصغيرة وأرقام."
      );
      return;
    }

    creatUser(firstName, lastName, phoneNumber, password);
  };

  return (
    <div>
      <NavPlain />
      <div className="flex items-center justify-center min-h-screen">
        <div className="p-6 shadow-md w-96">
          <h2 className="text-l font-bold mb-4">Contact details</h2>
          <h6 className="mb-4">
            Your full name and phone number are needed to ensure the security of
            your Booking.com account.
          </h6>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your last name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone number
              </label>
              <div className="flex items-center">
                <select className="border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                  <option value="+20">+20</option>
                  {/* Add more country codes as needed */}
                </select>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Next
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-500">
            By signing in or creating an account, you agree with our{" "}
            <a href="#" className="text-blue-500">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500">
              Privacy Statement
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
