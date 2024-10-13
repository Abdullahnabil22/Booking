import Navbar from "@/Components/Navbar/Navbar";
import Image from "next/image";
import facebook from "@/Public/facebook.png";
import google from "@/Public/google.png";
import apple from "@/Public/apple.png";
import NavPlain from "@/Components/Navbar/NavPlain";
export default function Signin() {
  return (
    <>
      <NavPlain />
      <div className="min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full bg-blue-800 text-white flex items-center justify-between py-4 px-8">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold">Booking.com</h1>
        </div>
        <div className="flex items-center space-x-6">
          <img src="/gb.png" alt="Language" className="w-6 h-6" />
          <FiHelpCircle className="w-6 h-6" />
        </div>
      </nav>

      {/* Sign In Form */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-6">
          <h2 className="text-2xl font-bold mb-4">Sign in or create an account</h2>
          <p className="text-gray-600 mb-6">You can sign in using your Booking.com account to access our services.</p>

          {/* Email Login */}
          <form>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email address"
            />
            <button className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700">
              Continue with email
            </button>
          </form>

          {/* Social Login Buttons */}
          <div className="flex items-center justify-center my-4">
            <span className="text-gray-500">or use one of these options</span>
          </div>
          <div className="flex justify-between space-x-4">
            {/* Facebook Login (Placeholder for future use) */}
            <button
              className="flex-1 bg-gray-100 p-3 rounded-lg flex justify-center items-center hover:bg-gray-200"
              onClick={() => signIn('facebook')} // Trigger Facebook authentication
            >
              <FaFacebook className="text-blue-600" size={24} />
            </button>
            {/* Google Login */}
            <button
              className="flex-1 bg-gray-100 p-3 rounded-lg flex justify-center items-center hover:bg-gray-200"
              onClick={() => signIn('google')} // Trigger Google authentication
            >
              <FaGoogle className="text-red-600" size={24} />
            </button>
            {/* Apple Login (Placeholder for future use) */}
            <button
              className="flex-1 bg-gray-100 p-3 rounded-lg flex justify-center items-center hover:bg-gray-200"
              onClick={() => signIn('apple')} // Trigger Apple authentication
            >
              <FaApple className="text-black" size={24} />
            </button>
          </div>

          {/* Terms and Conditions */}
          <div className="text-center text-sm text-gray-600 mt-6">
            By signing in or creating an account, you agree with our <a href="#" className="text-blue-600">Terms & conditions</a> and <a href="#" className="text-blue-600">Privacy statement</a>.
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center text-sm py-4 border-t text-gray-500">
        <p>All rights reserved.</p>
        <p>Copyright &copy; 2006-2024 Booking.com™</p>
      </footer>
    </div>
    </>
  );
}
