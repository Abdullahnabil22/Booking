"use client";
import { useState } from "react";
<<<<<<< Updated upstream:src/app/[locale]/(desc)/Register/[...token]/page.js
import axios from 'axios'; 
import { useParams } from 'next/navigation'; 
=======
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
>>>>>>> Stashed changes:src/app/(desc)/Register/[...token]/page.js

const Register = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  
  const { token } = useParams(); 

<<<<<<< Updated upstream:src/app/[locale]/(desc)/Register/[...token]/page.js
  const handleResetPassword = async () => { 
=======
  const { token } = useParams();
  const router = useRouter(); // Move useRouter hook here

  const handleResetPassword = async () => {
>>>>>>> Stashed changes:src/app/(desc)/Register/[...token]/page.js
    const axiosInstance = axios.create({
      baseURL: 'http://localhost:3000',
    });

    try {
      const response = await axiosInstance.patch(`/user/resetPassword/${token}`, {
        password: password,
        confirmPassword: confirmPassword,
    });
  
        console.log("pa",token.password)
        console.log(password)
        if (response.status === 200) {
            setSuccessMessage("Your password has been reset successfully.");
            setError("");
        }
<<<<<<< Updated upstream:src/app/[locale]/(desc)/Register/[...token]/page.js
    } catch (error) {
        console.error("Error resetting password request:", error);
        setError("An error occurred while resetting the password.");
=======
      );

      if (response.status === 200) {
        setSuccessMessage("Your password has been reset successfully.");
        window.alert("Your password has been reset successfully.");
        router.push("/Signin");
      }
    } catch (error) {
      // Improved error handling
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred while resetting the password.");
      }
      console.error("Error resetting password:", error);
>>>>>>> Stashed changes:src/app/(desc)/Register/[...token]/page.js
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{10,}$/;

    if (!passwordRegex.test(password)) {
      setError("Password must be at least 10 characters long and include uppercase letters, lowercase letters, and numbers.");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match."); 
    } else {
      setError(""); 
      handleResetPassword(); 
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">New Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your new password"
            required 
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Confirm your new password"
            required 
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default Register;
