import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { HeaderContainer } from "./HeaderContainer";

const Header = () => {
  return (
    <HeaderContainer id="header" className="header">
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
          <label>
            <Link className="navbar-brand headings2-white" to="/">
              React Blog
            </Link>
          </label>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse ml-auto"
            id="navbarResponsive"
          >
            <ul className=" navbar-nav ml-auto">
              <li className=" nav-item">
                <Link className="nav-link headings-white link-color" to="/">
                  Home
                </Link>
              </li>
              <li className=" nav-item">
                <Link className="nav-link headings-white link-color" to="/blog">
                  Blog
                </Link>
              </li>
              <li className=" nav-item">
                <Link
                  className="nav-link headings-white link-color"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className=" nav-item">
                <Link
                  className="nav-link headings-white link-color"
                  to="/contacts"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
