import React from "react";

const AreaCalculationTable = () => {
  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th
              colSpan="3"
              className="text-center p-4 border-b border-gray-300 text-xl font-semibold"
            >
              AREA CALCULATION
            </th>
          </tr>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2"></th>
            <th className="border border-gray-300 p-2">AREA IN M²</th>
            <th className="border border-gray-300 p-2">AREA IN SFT</th>
          </tr>
        </thead>

        {/* FAR Calculation Section */}
        <tbody>
          <tr>
            <td
              colSpan="3"
              className="text-center font-bold p-2 border-b border-gray-300 bg-gray-100"
            >
              F A R CALCULATION
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">1. TOTAL SITE AREA</td>
            <td className="border border-gray-300 p-2">1152.79</td>
            <td className="border border-gray-300 p-2">12,408.58</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">2. NUMBER OF FLOORS</td>
            <td className="border border-gray-300 p-2" colSpan="2">
              G+3 (1 BASEMENT + GROUND FLOOR + 3 OFFICE FLOORS)
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">3. NUMBER OF ENTRIES</td>
            <td className="border border-gray-300 p-2" colSpan="2">
              2
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">4. FIRE EXITS</td>
            <td className="border border-gray-300 p-2" colSpan="2">
              1
            </td>
          </tr>
        </tbody>

        {/* Ground Coverage Section */}
        <tbody>
          <tr>
            <td
              colSpan="3"
              className="text-center font-bold p-2 border-b border-gray-300 bg-gray-100"
            >
              GROUND COVERAGE
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              1. ALLOWED GROUND COVERAGE
            </td>
            <td className="border border-gray-300 p-2">55%</td>
            <td className="border border-gray-300 p-2">6,824.6</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              2. ACHIEVED GROUND COVERAGE
              <br />
              <span className="text-xs">
                6,791.77 ÷ 12,408.58 × 100 = 54.7%
              </span>
            </td>
            <td className="border border-gray-300 p-2">630.9</td>
            <td className="border border-gray-300 p-2">6,791.77</td>
          </tr>
        </tbody>

        {/* Car Parkings Section */}
        <tbody>
          <tr>
            <td
              colSpan="3"
              className="text-center font-bold p-2 border-b border-gray-300 bg-gray-100"
            >
              CAR PARKINGS
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              1. NUMBER OF CAR PARKINGS
            </td>
            <td className="border border-gray-300 p-2" colSpan="2">
              24
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              2. NUMBER OF BIKE PARKINGS
            </td>
            <td className="border border-gray-300 p-2" colSpan="2">
              22
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AreaCalculationTable;
