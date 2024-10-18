import React from "react";

const AboutProperty = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">About this Property</h2>
      <p className="text-lg mb-4">
        <strong>WeWork, Vajram Esteva Complex</strong> is surrounded by global
        businesses and near to Adarsh Palm Retreat. Walls adorning Art, Vibrant
        Lounges, Modern Conference Rooms and Private Cabins provide a relaxed
        ambience.
      </p>
      <p className="text-lg mb-4">
        Commuting to this location is a breeze with on-site parking and easy
        connectivity with various modes of public transportation.
      </p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside">
          <li>Surrounded by global businesses</li>
          <li>Near Adarsh Palm Retreat</li>
          <li>Art-decorated walls and vibrant lounges</li>
          <li>Modern conference rooms and private cabins</li>
          <li>On-site parking available</li>
          <li>Well connected to public transportation</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutProperty;
