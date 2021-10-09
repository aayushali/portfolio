import React from "react";
import "./Navbar.scss";
function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <span>Aayush</span>
        </div>
        <div className="menu-list">
          <ul>
            <a href="/">
              <li>Home</li>
            </a>

            <a href="#about">
              {" "}
              <li>About</li>
            </a>
            <a href="#projects">
              {" "}
              <li>Projects</li>
            </a>
            <a href="#contact">
              {" "}
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
