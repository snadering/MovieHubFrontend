import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ loggedIn }) => {

  return (
    <nav className="bg-gray-800 p-4 flex justify-between">
      <NavLink to="/">
        <img src="./src/assets/MovieHubLogoNav.png" alt="MoveHubLogo-NavBar" width="100" />
      </NavLink>
      <ul className="flex justify-end space-x-4 text-white">
        {loggedIn ? (
          <>
            <li>
              <NavLink to="/movies" >
                All Movies
              </NavLink>
            </li>
            <li>
              <NavLink to="/rated">
                Rated Movies
              </NavLink>
            </li>
            <li>
              <NavLink to="/logout">
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
