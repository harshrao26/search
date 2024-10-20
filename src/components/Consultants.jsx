import React from "react";
import image from "../../public/image.png"; // Ensure the correct path to the image

const ConsultantCard = () => {
  const consultants = [
    {
      id: 1,
      name: "Adarsh Mohan Dixit",
      mobile: "+91-7392037856",
      image: image,
    },
  ];

  return (
    <div className="container px-4 md:px-0 ">
      <h2 className="text-2xl font-semibold ">Consultants</h2>
      <div className="flex flex-wrap  gap-8">
        {consultants.map((consultant) => (
          <div key={consultant.id} className=" overflow-hidden text-center">
            <img
              className="w-24 h-24 rounded-full mx-auto mt-6"
              src={consultant.image}
              alt={`${consultant.name}'s profile`}
            />
            <div className="px-4 py-4">
              <h3 className="text-base font-semibold mb-2 text-gray-800">
                {consultant.name}
              </h3>
              <p className="text-gray-700 text-sm">{consultant.mobile}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultantCard;
