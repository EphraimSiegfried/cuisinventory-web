import React from "react";

export default function SortDropdown({ sortOptions }) {
  return (
    <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
      <label tabIndex={0} className="btn m-1">
        Sort
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {sortOptions.map((option, index) => (
          <li key={index}>
            <button onClick={option.method}>{option.label}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
