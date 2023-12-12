import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-end space-x-4 text-white">
        <li>
          <NavLink to="/movies" activeClassName="font-bold">
            All Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/top" activeClassName="font-bold">
            Top Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="font-bold">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" activeClassName="font-bold">
            Signup
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
