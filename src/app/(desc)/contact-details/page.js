"use client";
import { useState } from "react";
import "./page.css";
// import PhoneInput from 'react-phone-input-2'
// import "react-phone-input-2/lib/style.css";
import Link from "next/link";
import NavPlain from "@/Components/Navbar/NavPlain";

const ContactForm = () => {
  const [firstName, setFirstName] = useState(""); // تأكد من عدم وجود مشكلة في تعريف useState
  const [lastName, setLastName] = useState(""); // نفس الأمر هنا
  const [phoneNumber, setPhoneNumber] = useState("+20"); // يجب أن يتم تعريف كل الحقول بشكل صحيح

  const handleSubmit = (e) => {
    // إزالة النوعية (Type Annotations) لأنها تستخدم في TypeScript فقط
    e.preventDefault();
    console.log({ firstName, lastName, phoneNumber });
  };

  return (
    <>
      <NavPlain />
      <div className="max-w-md mx-auto bg-white  rounded-lg p-6">
        <h2 className=" font-bold ">Contact details</h2>
        <p className="text-sm text-gray-600 mb-4 Save_10">
          Your full name and phone number are needed to ensure the security of
          your account.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label style={{ fontSize: "small" }}>First name</label>
            <input
              type="text"
              className="mt-1 block w-100 p-2 border border-gray-300 input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-700 ">Last name</label>
            <input
              type="text"
              className=" block w-150 p-2 border border-gray-300 input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-700 ">Phone number</label>
            <div className="flex items-center space-x-2 input">
              {/*            
            <PhoneInput 
              inputProps={{
                className:'Phone',
                name: 'phone',
                required: true,
                  autoFocus: true
             }}
             /> */}
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4 Save_10">
            Your full name and phone number are needed to ensure the security of
            your account.
          </p>
          <button
            type="submit"
            className="block w-60 p-2 bg-blue-600 text-white font-bold  hover:bg-blue-700"
          >
            <Link href="/">Next</Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;

//ًصفحة contact