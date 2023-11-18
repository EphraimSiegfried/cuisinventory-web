import React, { useState, useEffect } from "react";
import mockData from "../assets/mockData";
import SortDropdown from "./SortDropdown";

export default function TableComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Here we would fetch the data from the API
    setData(mockData);
  }, []);

  const sortByAmount = () => {
    const sortedData = [...data].sort(
      (a, b) => a.productAmount - b.productAmount,
    );
    setData(sortedData);
  };

  const sortByLogDate = () => {
    const sortedData = [...data].sort(
      (a, b) => new Date(a.logDate) - new Date(b.logDate),
    );
    setData(sortedData);
  };
  const sortOptions = [
    { label: "Sort by Amount", method: sortByAmount },
    { label: "Sort by Date", method: sortByLogDate },
  ];

  return (
    <div className="flex justify-center ">
      <div className="flex-col justify-center items-center my-4">
        <h2 className="text-2xl font-bold m-4">Your Kitchen Inventory</h2>
        <div className="flex justify-end items-center">
          <button className="btn">Add item</button>
          <SortDropdown sortOptions={sortOptions} />
        </div>

        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Name</th>
              <th>Detail</th>
              <th>Amount</th>
              <th>Log Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.productName}</td>
                <td>{item.productDetail}</td>
                <td>{item.productAmount}</td>
                <td>{item.logDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
