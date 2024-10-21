import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Info from "./components/Info";
import HeroSection from "./components/HeroSection";
import { MdLocationPin } from "react-icons/md";
import image from "../public/image.png"; // Ensure the image path is correct

const App = () => {
  const [isVerified, setIsVerified] = useState(false); // Form toggle state
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [superArea, setSuperArea] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false); // Visibility control

  useEffect(() => {
    // OTP-less SDK callback function
    window.otpless = (otplessUser) => {
      const { waName, waNumber } = otplessUser; // Extract WhatsApp name and number
      console.log(`Verified user: ${waName}, ${waNumber}`);
      setIsVerified(true); // Set verification state to true
      setName(waName); // Auto-fill the name field from the verification data
    };
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log({ name, email, superArea });
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible); // Toggle form visibility
  };

  return (
    <div>
      <Navbar />
      <div className="fixed bottom-5 right-5 z-[1000] md:hidden">
        {!isVerified ? (
          <div id="otpless-login-page" className="w-96">
            {/* OTP-less SDK will handle the login button and UI */}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Enter Super Area"
              value={superArea}
              onChange={(e) => setSuperArea(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition duration-300"
            >
              Book Your Visity
            </button>
          </form>
        )}
      </div>


      <Info />
      <Footer />
    </div>
  );
};

export default App;
