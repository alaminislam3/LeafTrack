import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { Authcontext } from "../Layout/Context/Authcontext";

const Navbar = () => {
  const { user, logout } = use(Authcontext);

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
    return logout();
  };

  return (
    <div className="w-full shadow bg-gradient-to-r from-green-100 to-lime-200">
      <div className="navbar container mx-auto flex justify-between items-center py-3 px-4">
        <div className="flex items-center gap-3 md:gap-6">
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-sm m-1">
              ☰
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-white rounded-box w-20"
            >
              {links}
              {!user && (
                <div className="mt-2 border-t ">
                  <NavLink
                    to="/login"
                    className="btn btn-sm w-full mb-1 bg-green-200"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/registration"
                    className="btn btn-sm w-full bg-green-300"
                  >
                    Registration
                  </NavLink>
                </div>
              )}
            </ul>
          </div>

          <div className="text-2xl font-bold text-green-700">🍃 LeafTrack</div>
        </div>

        <div className="hidden md:flex gap-6">{links}</div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="group flex items-center gap-3">
              <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                <img src={user?.photoURL} className="w-10 h-10 rounded-full" />
              </div>
              <button onClick={handleLogout} className="btn btn-sm btn-outline">
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden md:flex gap-2">
              <NavLink
                to="/login"
                className="btn bg-gradient-to-l from-lime-200 to-transparent text-emerald-900 font-bold"
              >
                Login
              </NavLink>
              <NavLink
                to="/registration"
                className="btn bg-gradient-to-l from-lime-200 to-transparent text-emerald-900 font-bold"
              >
                Registration
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
