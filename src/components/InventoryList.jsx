import React, { useState, useEffect } from "react";
import mockData from "../assets/mockData";
import SortDropdown from "./SortDropdown";
import axios from "axios";

var API_ENDPOINT = "https://kev1n27.pythonanywhere.com/cuisinventory?";

export default function TableComponent({ device_Id }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(API_ENDPOINT + "key=" + device_Id)
      .then((response) => {
        setData(response.data.data.products);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const sortByAmount = () => {
    const sortedData = [...data].sort((a, b) => a.quantity - b.quantity);
    setData(sortedData);
  };

  const sortByDate = () => {
    const sortedData = [...data].sort(
      (a, b) => new Date(a.date) - new Date(b.date),
    );
    setData(sortedData);
  };
  const sortOptions = [
    { label: "Sort by Amount", method: sortByAmount },
    { label: "Sort by Date", method: sortByDate },
  ];

  return (
    <div className="flex justify-center ">
      <div className="flex-col justify-center items-center my-4">
        <h2 className="text-2xl font-bold m-4">Your Kitchen Inventory</h2>
        <div className="flex justify-end items-center">
          <SortDropdown sortOptions={sortOptions} />
        </div>

        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Name</th>
              <th>Remaining</th>
              <th>Quantity</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity.remaining - item.quantity.packaging} g</td>
                <td>
                  {Math.round(
                    (100 *
                      (item.quantity.remaining - item.quantity.packaging)) /
                      (item.quantity.initial - item.quantity.packaging),
                  )}{" "}
                  %
                </td>
                <td>{new Date(1000 * item.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
