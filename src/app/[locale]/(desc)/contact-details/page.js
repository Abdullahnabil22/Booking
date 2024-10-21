"use client";

import { useState } from 'react';
import NavPlain from "@/Components/Navbar/NavPlain";

import axios from "axios";

const ContactDetails = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, phoneNumber });
  };


  return (
    <div>
      <NavPlain />
      <div className="flex items-center justify-center min-h-screen ">
        <div className=" p-6 shadow-md w-96">
          <h2 className="text-l font-bold mb-4">Contact details</h2>
          <h6 className="mb-4">Your full name and phone number are needed to ensure the security of your Booking.com account.</h6>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
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
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
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
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone number</label>
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
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Next
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-500">By signing in or creating an account, you agree with our <a href="#" className="text-blue-500">Terms & Conditions</a> and <a href="#" className="text-blue-500">Privacy Statement</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;