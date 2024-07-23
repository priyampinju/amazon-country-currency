import React, { useState } from "react";
import logo from "../assets/amazonlogo.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import Country from "./Country";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Navbar = () => {
  return (
    <>
      <div className="navbar flex justify-around bg-navbg h-16 items-center">
        <div className="nav-left w-1/4 text-white flex items-center">
          <img src={logo} alt="amazon" className="w-1/4 invert" />
          <div className="location pb-2 ml-7 flex items-center">
            <LocationOnOutlinedIcon />
            <div className="location-right ml-2">
              <p className="text-gray-300 text-sm">
                Delivering to Guwahati 785010
              </p>
              <p className="text-white text-sm cursor-pointer">
                Update location
              </p>
            </div>
          </div>
        </div>
        <div className="nav-middle  w-2/5 text-white flex items-center bg-white h-10 rounded">
          <div className="search-left bg-graybg flex h-full items-center rounded">
            <p className="text-black pl-2">All Categories</p>
            <ArrowDropDownIcon className="invert" />
          </div>
          <div className="search-mid pl-2 border-l border-gray-400 h-full flex flex-1 items-center">
            <input
              type="text"
              placeholder="Search amazon.in"
              className="w-full outline-none text-black pl-2"
            />
          </div>
          <div className="search-right pl-2 bg-cyan-400 h-full flex items-center rounded-r px-2">
            <SearchIcon />
          </div>
        </div>
        <div className="nav-right  w-1/3  text-white flex justify-between px-4">
          <Country />
          <AccountCircleOutlinedIcon />
          <ShoppingCartOutlinedIcon />
        </div>
      </div>
    </>
  );
};

export default Navbar;
