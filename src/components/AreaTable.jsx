import React from "react";

const AreaTable = () => {
  return (
    <div className="container mx-auto mt-8">
      <table className="table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th
              colSpan="4"
              className="text-center p-4 border-b border-gray-300 text-xl font-semibold"
            >
              AREA CALCULATION OF ALL FLOORS
            </th>
          </tr>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">FLOORS</th>
            <th className="border border-gray-300 p-2">
              BUILTUP/ PLINTH AREA SFT
            </th>
            <th className="border border-gray-300 p-2">CARPET AREA SFT</th>
            <th className="border border-gray-300 p-2">RENTABLE AREA SFT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">BASEMENT FLOOR</td>
            <td className="border border-gray-300 p-2">5413.33</td>
            <td className="border border-gray-300 p-2">5139.69</td>
            <td className="border border-gray-300 p-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">GROUND FLOOR</td>
            <td className="border border-gray-300 p-2">7827.40</td>
            <td className="border border-gray-300 p-2">5247.73</td>
            <td className="border border-gray-300 p-2">7827.40</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">1ST FLOOR</td>
            <td className="border border-gray-300 p-2">7199.33</td>
            <td className="border border-gray-300 p-2">7031.69</td>
            <td className="border border-gray-300 p-2">7199.33</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">2ND FLOOR</td>
            <td className="border border-gray-300 p-2">5872.18</td>
            <td className="border border-gray-300 p-2">5635.40</td>
            <td className="border border-gray-300 p-2">5872.18</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">3RD FLOOR</td>
            <td className="border border-gray-300 p-2">7152.14</td>
            <td className="border border-gray-300 p-2">6908.39</td>
            <td className="border border-gray-300 p-2">7152.14</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">TERRACE FLOOR</td>
            <td className="border border-gray-300 p-2">6369.42</td>
            <td className="border border-gray-300 p-2">6369.42</td>
            <td className="border border-gray-300 p-2">-</td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="bg-gray-200 font-semibold">
            <td className="border border-gray-300 p-2">TOTAL</td>
            <td className="border border-gray-300 p-2">39,833.58</td>
            <td className="border border-gray-300 p-2">36,233.32</td>
            <td className="border border-gray-300 p-2">28,051.1</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default AreaTable;
