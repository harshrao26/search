import React from "react";
import image from '../../public/image.png'
const ConsultantCard = () => {
  const consultants = [
    {
      id: 1,
      name: "Adarsh Mohan Dixit",
      mobile: "+91-7392037856",
      image: image, // Replace with actual image URL
    },
    
  ];

  return (
    <>
        <h2 className="text-2xl font-bold mb-4">Consultants</h2>
      <div className="flex  gap-8">

        {consultants.map((consultant) => (
          <div
            key={consultant.id}
            className=""
          >
            <img
              className="w-24 h-24 rounded-full mx-auto"
              src={consultant.image}
              alt={`${consultant.name}'s profile`}
            />
            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold mb-2">{consultant.name}</h3>
              <p className="text-gray-700 text-center">{consultant.mobile}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ConsultantCard;
