import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ loggedIn }) => {

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-end space-x-4 text-white">
        {loggedIn ? (
          <>
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
            <li>
              <NavLink to="/rated" activeclassname="font-bold">
                Rated Movies
              </NavLink>
            </li>
            <li>
              <NavLink to="/logout" activeclassname="font-bold">
                Logout
              </NavLink>
            </li>
          </>
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
