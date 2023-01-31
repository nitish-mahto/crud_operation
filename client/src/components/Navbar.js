import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink class="navbar-brand" to="/#">
          Navbar
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <NavLink class="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/about">
                About
              </NavLink>
            </li>

            <li class="nav-item">
              <NavLink class="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>

            <li class="nav-item">
              <NavLink class="nav-link" to="/login">
                Login
              </NavLink>
            </li>

            <li class="nav-item">
              <NavLink class="nav-link" to="/signup">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
