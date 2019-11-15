import React from "react";

function NavEnd() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container d-flex align-items-center">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a href="index.html" className="nav-link pl-0">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" id="one">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#booknow" className="nav-link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavEnd;
