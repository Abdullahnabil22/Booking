"use client";
import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import NavPlain from "@/Components/Navbar/NavPlain";
import axios from 'axios'; 
import { useRouter } from 'next/navigation'; 

const Register = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const router = useRouter();
 const [successMessage, setSuccessMessage] = useState("")

  useEffect(() => {
    const storedEmail = localStorage.getItem('email'); 
    if (storedEmail) {
      checkEmailInDatabase(storedEmail);
    }
  }, []);

  const checkEmailInDatabase = async (email) => {
    const axiosInstance = axios.create({
      baseURL: 'http://localhost:3000/user', 
    });

    try {
      const response = await axiosInstance.post('/checkemail', { email });
      console.log("Email:", email);
      console.log("Response:", response);

      if (response.data === "please enter valid email") { 
        console.log("Email not found");
        setEmailExists(false);
        if (password) {
          await registerUser(email, password);
        } else {
          setError("Password is required for registration.");
        }
      } else {
        console.log("Email found");
        setEmailExists(true);
        await loginUser(email, password);
      }
    } catch (error) {
      console.error("Error checking email:", error); 
      setError("An error occurred while checking the email. Please try again.");
    }
  };

  const registerUser = async (email, password) => {
    if (!password) {
        setError("Password is required.");
        return;
    }
    
    console.log("hamadapass", password);
    
    try {
        console.log("Registering user with email:", email, "and password:", password);
        const axiosInstance = axios.create({
            baseURL: 'http://localhost:3000/user', 
        });
        const response = await axiosInstance.post('/', { email, password });
        console.log("User registered:", response.data);
    } catch (error) {
        console.error("Error registering user:", error);
        setError("An error occurred while registering. Please try again.");
    }
  };

  const loginUser = async (email, password) => {
    const axiosInstance = axios.create({
      baseURL: 'http://localhost:3000/user', 
    });

    try {
      const response = await axiosInstance.post('/login', { email, password });
      console.log("User logged in:", response.data);
    } catch (error) {
      console.error("Error logging in:", error);
      setError("An error occurred while logging in. Please try again.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{10,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 10 characters long and include uppercase letters, lowercase letters, and numbers."
      );
    } else if (!emailExists && password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError("");
      console.log("Password is valid");

      if (emailExists) {
        await loginUser(localStorage.getItem('email'), password);
      } else {
        await registerUser(localStorage.getItem('email'), password);
      }
    }
    await handleResetPassword(token);
  };

  const handleForgotPassword = async () => {
    const storedEmail = localStorage.getItem('email');
    if (!storedEmail) {
        setError("Email is required for password reset.");
        return;
    }

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:3000/user',
    });

    try {
        const response = await axiosInstance.post('/forgotPassword', { email: storedEmail });
        
        console.log(response.data.message);
        if(response.data.message=="Email sent successfully"){
          setSuccessMessage("Check your email for the password reset link.");


        }
    } catch (error) {
        console.error("Error sending forgot password request:", error);
        setError("An error occurred while sending the password reset request.");
    }
  };
  const handleResetPassword = async (token) => { // تأكد من تمرير التوكن كوسيلة
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:3000/user',
    });

    try {
        const response = await axiosInstance.patch(`/resetPassword/${token}`, { // تمرير التوكن في الرابط
            password: newPassword, // تأكد من أن لديك newPassword في الحالة
            confirmPassword: confirmPassword // تأكد من أن لديك confirmPassword في الحالة
        });
        
        console.log(response.data.message);
        if (response.data.message === "Password updated successfully") {
            setSuccessMessage("Your password has been reset successfully.");
            setError(""); // مسح أي أخطاء سابقة
        }
    } catch (error) {
        console.error("Error resetting password request:", error);
        setError("An error occurred while resetting the password.");
    }
};


  return (
    <>
      <NavPlain />
      <div className="max-w-md mx-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <h4 className="font-bold py-2 text-2xl">Create password</h4>
            <h4 className="py-2">
              Use a minimum of 10 characters, including uppercase letters,
              lowercase letters and numbers.
            </h4>

            {emailExists ? (
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
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={handleForgotPassword} 
                      className="text-blue-500 hover:text-blue-700 underline font-semibold"
                    >
                      Forgot Password?
                    </button>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
{successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
                  </div>
                </div>
              </div>
            ) : (
              <>
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
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

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
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </>
            )}
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500  hover:custom-blue"
          >
            Create account
          </button>
          <div className="text-center text-xs">
            <span>
              By signing in or creating an account, you agree with our{" "}
            </span>
            <a href="/terms" className="text-custom-color hover:underline">
              Terms & Conditions
            </a>
            <span> and </span>
            <a href="/privacy" className="text-custom-color hover:underline">
              Privacy Statement
            </a>

            <div className="mt-2">
              <p>All rights reserved.</p>
              <p>Copyright (2006-2024) – Booking.com™</p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;