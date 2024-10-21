"use client"; // Indicate that this is a client component

import { useState } from "react";
import { useRouter } from "next/navigation";
import NavPlain from "@/Components/Navbar/NavPlain";
import axios from "axios"; // Ensure axios is imported
import Link from "next/link";

export default function Signlist() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const checkemail = async (e) => {
    e.preventDefault();

    const axiosInstance = axios.create({
      baseURL: "http://localhost:3000/user",
    });

    try {
      const response = await axiosInstance.post("/checkemail", { email });
      console.log(email);
      console.log("res", response);

      if (response.data === "please enter valid email") {
        console.log("Email not found");
        router.push("/contact-details");
      } else {
        console.log("Email found");
        localStorage.setItem("email", email);
        router.push("/Register"); // Redirect to register if email found
      }
    } catch (error) {
      console.error("Error checking email:", error);
    }
  };

  return (
    <>
      <NavPlain />
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4">
            Create your partner account
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Create an account to list and manage your property.
          </p>
          <form className="space-y-4" onSubmit={checkemail}>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit" // Ensure this is set to "submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Continue
            </button>
          </form>

          <div className="my-6 text-center text-gray-500">
            Do you have questions about your property or the extranet? Visit{" "}
            <a href="#" className="text-blue-600">
              Partner Help
            </a>{" "}
            or ask another question on the{" "}
            <a href="#" className="text-blue-600">
              Partner Community
            </a>
            .
          </div>

          <div className="text-center">
          <Link href="/en/  Signin">
            <button className="w-full border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-200">
              Sign in
            </button>
            </Link>
          </div>

          <p className="mt-6 text-xs text-center text-gray-500">
            By signing in or creating an account, you agree with our{" "}
            <a href="#" className="text-blue-600">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600">
              Privacy Statement
            </a>
            .
          </p>

          <p className="mt-4 text-xs text-center text-gray-500">
            All rights reserved. Copyright (2006 - 2024) - Booking.com™
          </p>
        </div>
      </div>
    </>
  );
}
