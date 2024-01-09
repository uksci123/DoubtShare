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
        className="bg-stone-300"
        start={() => (
          <div className="w-[80px]">
            <Link to={'/'}>
             <img src="Logo.png" alt="" />
            </Link>
          </div>
        )}
        end={() => (
          <div className="flex gap-2">
            <Link to="/login">
              <span className="cursor-pointer">Login</span>
            </Link>
            <Link to="/register">
              <span className="cursor-pointer">Register</span>
            </Link>
          </div>
        )}
      />
    </div>
  );
};

export default NavBar;
