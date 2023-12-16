import React from "react";
import { NavLink } from "react-router-dom";
import dbFacade from "../facade/dbFacade";

const Navbar = () => {
  const isLoggedIn = () => {
    const token = dbFacade().getToken();
    return token !== undefined;
  };

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-end space-x-4 text-white">
        <li>
          <NavLink to="/movies" activeclassname="font-bold">
            All Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/top" activeclassname="font-bold">
            Top Movies
          </NavLink>
        </li>
          {isLoggedIn() ? (
            <li>
            <NavLink to="/logout" activeclassname="font-bold">
              Logout
            </NavLink>
            </li>
          ) : (
            <>
            <li>
            <NavLink to="/login" activeclassname="font-bold">
              Login
            </NavLink>
            </li>
            <li>
            <NavLink to="/signup" activeclassname="font-bold">
              Signup
            </NavLink>
          </li>
          </>
          )}

      </ul>
    </nav>
  );
};

export default Navbar;
