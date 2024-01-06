import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import Logout from "./Logout";

export default function Header() {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Cuisinventory</a>
      </div>
      <div className="navbar-end">
        <Logout />
      </div>
    </div>
  );
}
