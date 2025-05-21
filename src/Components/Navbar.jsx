import React from "react";
import {  NavLink } from 'react-router'; 

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 underline font-semibold"
            : "text-gray-600 hover:text-blue-600 font-semibold"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/allplant"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 underline font-semibold"
            : "text-gray-600 hover:text-blue-600 font-semibold"
        }
      >
        All Plant
      </NavLink>

      <NavLink
        to="/addplant"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 underline font-semibold"
            : "text-gray-600 hover:text-blue-600 font-semibold"
        }
      >
        Add Plant 
      </NavLink>

      <NavLink
        to="/myplant"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 underline font-semibold"
            : "text-gray-600 hover:text-blue-600 font-semibold"
        }
      >
        My Plant
      </NavLink>
    </>
  );

  return (
    <div className="w-full shadow bg-gradient-to-r from-green-100 to-lime-200">
      <div className="navbar container mx-auto flex justify-between items-center py-3 px-4">
        
        {/* Logo Section */}
        <div className="text-2xl font-bold text-green-700">🍃 LeafTrack</div>

        {/* Nav Links - Hidden on small screens */}
        <div className="hidden md:flex gap-6">{links}</div>

        {/* Right Side - Auth Buttons */}
        <div className="flex gap-2 items-center">
          <NavLink to="/login" className="text-xl btn btn-sm bg-green-200 hover:bg-green-300">
            Login
          </NavLink>
          <NavLink to="/registration" className="text-xl btn btn-sm bg-green-200 hover:bg-green-300">
            Registration
          </NavLink>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="btn btn-sm m-1">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            {links}
            <div className="mt-2 border-t pt-2">
              <NavLink to="/login" className=" btn btn-sm w-full mb-1 bg-green-200">
                Login
              </NavLink>
              <NavLink to="/registration" className=" btn btn-sm w-full bg-green-300">
                Registration
              </NavLink>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
