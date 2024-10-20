import React, { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"; // for arrows
import img from "../../public/img.png";
import img2 from "../../public/img2.png";
import img3 from "../../public/img3.png";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Handle thumbnail click
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-[100vw] md:w-full ">
      {/* Main Image Display */}
      <div className="relative">
        <img
          src={images[currentIndex].url}
          alt={`Slide ${currentIndex}`}
          className="w-full h-64 md:h-[75vh] object-cover "
        />
        {/* Left Arrow */}
        <button
          className="absolute top-1/2 left-2 md:left-4 text-2xl md:text-3xl text-white  rounded-full p-1 md:p-2 transform -translate-y-1/2"
          onClick={prevSlide}
        >
          
          <MdArrowBackIos className="pl-2"/>
        </button>
        {/* Right Arrow */}
        <button
          className="absolute top-1/2 right-2 md:right-4 text-2xl md:text-3xl text-white  rounded-full p-1 md:p-2 transform -translate-y-1/2"
          onClick={nextSlide}
        >
          <MdArrowForwardIos size={24} className=""/>
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center mt-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Thumbnail ${index}`}
            className={`w-12 h-12 md:w-16 md:h-16 mx-1 cursor-pointer border-2 ${
              currentIndex === index ? "border-green-500" : "border-gray-300"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Parent Component with Filtering Functionality
const  ImageGallery = () => {
  const allImages = [
    {
      url: img3,
      category: "architecture",
    },
    {
      url: img2,
      category: "nature",
    },
    {
      url: img,
      category: "architecture",
    },
  ];

  const [filteredImages, setFilteredImages] = useState(allImages);

  return (
    <div className="md:mt-10">
      <ImageCarousel images={filteredImages} />
    </div>
  );
};

export default ImageGallery;
