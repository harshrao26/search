import React from "react";

const RentalProperties = () => {
  const data = [
    {
      category: "Office",
      building: "Jaipuria Towers",
      floor: "BASEMENT FLOOR",
      builtup: "5413.33",
      carpet: "5139.69",
      rentable: "-",
    },
    {
      category: "Office",
      building: "Jaipuria Towers",
      floor: "GROUND FLOOR",
      builtup: "7827.4",
      carpet: "5247.73",
      rentable: "7827.4",
    },
    {
      category: "Office",
      building: "Jaipuria Towers",
      floor: "1ST FLOOR",
      builtup: "7199.33",
      carpet: "7031.69",
      rentable: "7199.33",
    },
    {
      category: "Office",
      building: "Jaipuria Towers",
      floor: "2ND FLOOR",
      builtup: "5872.18",
      carpet: "5635.4",
      rentable: "5872.18",
    },
    {
      category: "Office",
      building: "Jaipuria Towers",
      floor: "3RD FLOOR",
      builtup: "7152.14",
      carpet: "6908.39",
      rentable: "7152.14",
    },
    {
      category: "Office",
      building: "Jaipuria Towers",
      floor: "TERRACE FLOOR",
      builtup: "6369.42",
      carpet: "6369.42",
      rentable: "-",
    },
  ];

  return (
    <div className="container mx-auto  py-6">
      <h2 className="text-2xl font-bold mb-4">Rental Properties</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Building</th>
            <th className="border px-4 py-2">Floor</th>
            <th className="border px-4 py-2">Builtup/Plinth Area (SFT)</th>
            <th className="border px-4 py-2">Carpet Area (SFT)</th>
            <th className="border px-4 py-2">Rentable Area (SFT)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border">
              <td className="border px-4 py-2">{item.category}</td>
              <td className="border px-4 py-2">{item.building}</td>
              <td className="border px-4 py-2">{item.floor}</td>
              <td className="border px-4 py-2">{item.builtup}</td>
              <td className="border px-4 py-2">{item.carpet}</td>
              <td className="border px-4 py-2">{item.rentable}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RentalProperties;
