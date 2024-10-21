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
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [superArea, setSuperArea] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleVerify = () => {
    if (mobile === "  ") {
      setIsVerified(true);
      alert("Mobile number verified successfully!");
    } else {
      alert("Failed to verify. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}, Super Area: ${superArea}`);
  };

  // Scroll event listener to hide right-side div when reaching the bottom
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Check if the user has scrolled near the bottom of the page
      if (scrollTop + windowHeight >= fullHeight - 500) {
        setIsVisible(false); // Hide the right-side div when near the bottom
      } else {
        setIsVisible(true); // Show it if not near the bottom
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full flex md:px-8 gap-8">
      <div className="md:w-[60vw]">
        <ImageGallery />
        <AreaTable />
        <AreaCalculationTable />
        <AmenitiesTable />
        <AboutProp />
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
            <MdLocationPin className="text-red-500 " size={40} /> OUTER RING
            ROAD, DOLLAR SCHEME COLONY, 1ST STAGE, BTM LAYOUT 1, BANGALORE
          </p>

          <hr className="mb-6" />

          <div className="flex flex-col items-center gap-4 mb-6">
            <img
              src={image}
              alt="Person"
              className="w-16 h-16 rounded-full shadow-md"
            />
            <div>
              <h2 className="text-base font-medium text-gray-700">
                Adarsh Mohan Dixit
              </h2>
              <p className="text-gray-500 text-sm text-center">+91-7392037856</p>
            </div>
            <h1>
              <p className="text-sm text-justify">
                Adarsh is a seasoned commercial leasing expert with
                extensive experience in helping businesses optimize their real
                estate investments. With a deep understanding of market
                dynamics, leasing strategies, and asset management, Adarsh
                excels at guiding clients through complex lease negotiations,
                ensuring optimal space utilization, and unlocking the full
                potential of commercial properties. From identifying ideal
                locations to maximizing return on investment, Adarsh
                delivers tailored solutions that drive business growth and
                operational efficiency.
              </p>
            </h1>
          </div>

          {!isVerified ? (
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Enter Your Mobile Number"
                value={mobile}
                onChange={handleMobileChange}
                className="px-4 py-1 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleVerify}
                className="bg-blue-500 text-sm text-white px-4 py-2  shadow hover:bg-blue-600 transition duration-300"
              >
                Make an appointment
              </button>
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
                Make an appointment
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Info;
