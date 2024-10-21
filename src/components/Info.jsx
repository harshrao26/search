import React, { useState, useEffect } from "react";
import ImageGallery from "./ImageGallery";
import AreaTable from "./AreaTable";
import AreaCalculationTable from "./AreaCalculationTable";
import AmenitiesTable from "./AmenitiesTable";
import AboutProp from "./AboutProp";
import Consultants from "./Consultants";
import { MdLocationPin } from "react-icons/md";
import image from "../../public/image.png";

const Info = () => {
  const [mobile, setMobile] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); // Added email state
  const [superArea, setSuperArea] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // To show loading state during API calls

  const handleMobileChange = (e) => setMobile(e.target.value);
  const handleCodeChange = (e) => setVerificationCode(e.target.value);

  useEffect(() => {
    window.otpless = (otplessUser) => {
      // Handle OTP-less verification success
      const { waName, waNumber } = otplessUser; // Extract name and WhatsApp number
      console.log(`User verified: ${waName} - ${waNumber}`);

      setIsVerified(true); // Set the state to true after successful verification
      setName(waName); // Set name from OTP-less response
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log({ name, email, superArea });
  };

  return (
    <div className="w-full flex md:px-8 gap-8">
      <div className="md:w-[60vw]">
        <ImageGallery />
        <AreaTable />
        <AreaCalculationTable />
        <AboutProp />
        <AmenitiesTable />
        <Consultants />
      </div>
      <div
        className={`md:w-[40vw] md:block hidden mt-10 ${
          !isVisible ? "hidden" : ""
        }`}
      >
        <div className="sticky right-0 top-20 fixed bg-[#F7F7F7] p-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Jaipuria Towers
          </h1>
          <p className="flex items-center text-sm text-gray-600 mb-6 gap-2 capitalize">
            <MdLocationPin className="text-red-500" size={40} /> OUTER RING
            ROAD, DOLLAR SCHEME COLONY, 1ST STAGE, BTM LAYOUT 1, BANGALORE
          </p>

          <hr className="mb-6" />

          <div className="flex gap-4 mb-6">
            <img
              src={image}
              alt="Person"
              className="w-16 h-16 rounded-full shadow-md"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-base font-medium text-gray-700">
                Adarsh Mohan Dixit
              </h2>
              <p className="text-gray-500 text-sm">+91-7392037856</p>
            </div>
          </div>

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
                Book Your Visit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Info;
