import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "lavender",
        padding: "10px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
