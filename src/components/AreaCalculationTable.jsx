import React from "react";

const AreaCalculation = () => {
  const data = {
    "FAR Calculation": [
      { title: "Total Site Area", areaM: "1152.79", areaSft: "12,408.58" },
      {
        title: "Number of Floors",
        areaM: "G+3 (1 BASEMENT + GROUND FLOOR + 3 OFFICE FLOORS)",
      },
      { title: "Number of Entries", areaM: "2" },
      { title: "Fire Exits", areaM: "1" },
    ],
    "Ground Coverage": [
      { title: "Allowed Ground Coverage", areaM: "55%", areaSft: "6,824.60" },
      {
        title: "Achieved Ground Coverage",
        areaM: "630.9",
        areaSft: "6,791.77",
      },
    ],
    "Car Parkings": [
      { title: "Number of Car Parkings", areaM: "24" },
      { title: "Number of Bike Parkings", areaM: "22" },
    ],
  };

  return (
    <div className="container mx-  py-6">
      <h2 className="text-2xl font-bold mb-4">Area Calculation</h2>
      <table className=" bg-white border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Area in M²</th>
            <th className="border px-4 py-2">Area in SFT</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((section, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className="border px-4 py-2 font-bold" colSpan="3">
                  {section}
                </td>
              </tr>
              {data[section].map((item, subIndex) => (
                <tr key={subIndex}>
                  <td className="border px-4 py-2">{item.title}</td>
                  <td className="border px-4 py-2">{item.areaM}</td>
                  <td className="border px-4 py-2">{item.areaSft || "-"}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AreaCalculation;
