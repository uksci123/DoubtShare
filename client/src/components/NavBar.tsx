import React from "react";
import { Toolbar } from "primereact/toolbar";
import Login from "../pages/Login";
import { Link, useNavigate } from "react-router-dom";
import { Register } from "../pages/Register";

const NavBar = () => {
  const startContent = () => {
    <div>
      <img src="Logo.png" alt="" />
    </div>;
  };
  return (
    <div className="w-full ">
      <Toolbar
        start={() => (
          <div className="w-[80px]">
            <img src="Logo.png" alt="" />
          </div>
        )}
        end={() => (
          <div className="flex gap-2">
            <Link to="/login">
              <span className="text-sm font-sans cursor-pointer">Login</span>
            </Link>
            <Link to="/register">
              <span className="text-sm font-sans cursor-pointer">Register</span>
            </Link>
          </div>
        )}
      />
    </div>
  );
};

export default NavBar;
