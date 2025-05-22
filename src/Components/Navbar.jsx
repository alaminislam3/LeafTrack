import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { Authcontext } from "../Layout/Context/Authcontext";

const Navbar = () => {
  const { user, logout } = use(Authcontext);
  console.log(user);
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
  const handleLogout = () => {
    //  console.log("user logout done");
    return logout();
  };

  return (
    <div className="w-full shadow bg-gradient-to-r from-green-100 to-lime-200">
      <div className="navbar container mx-auto flex justify-between items-center py-3 px-4">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-green-700">🍃 LeafTrack</div>

        {/* Nav Links - Hidden on small screens */}
        <div className="hidden md:flex gap-6">{links}</div>

        {/* Right Side - Auth Buttons */}
        <div className="dropdown dropdown-end flex">
          {user ? (
            <div className="group flex items-center gap-3">
              {/* Profile Image & Hover Name */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={user?.photoURL}
                    alt="User"
                  />
                </div>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="btn  btn-sm btn-outline"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <NavLink to="/login" className="btn bg-blue-200">
                Login
              </NavLink>
              <NavLink to="/registration" className="btn bg-blue-200">
                Registration
              </NavLink>
            </>
          )}

          {/* photo cart type */}
        </div>

        {/* Mobile Dropdown Menu */}
        {/* <div className="dropdown hidden md:hidden">
          <label tabIndex={0} className="btn btn-sm m-1">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            {links}
            <div className="mt-2 border-t pt-2">
              <NavLink
                to="/login"
                className=" btn btn-sm w-full mb-1 bg-green-200"
              >
                Login
              </NavLink>
              <NavLink
                to="/registration"
                className=" btn btn-sm w-full bg-green-300"
              >
                Registration
              </NavLink>
            </div>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
