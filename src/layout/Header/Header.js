import React from "react";
import { NavLink } from "react-router-dom";
import NavigationItem from "../../components/NavigationItem/NavigationItem";
import logo from "../../img/TUHIN.svg";
import classes from "./Header.module.css";

const Header = () => {
    return (
      <nav
        className={
          "sticky-top navbar navbar-expand-sm navbar-light shadow " + classes.Header
        }
      >
        <NavLink className="navbar-brand" exact to="/">
          <img src={logo} alt="Logo" height="60" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarColor03"
        >
          <ul className="navbar-nav ml-auto">
            <NavigationItem link="/home">HOME</NavigationItem>
            <NavigationItem link="/about">ABOUT</NavigationItem>
            <NavigationItem link="/services">SERVICES</NavigationItem>
            <NavigationItem link="/portfolio">PORTFOLIO</NavigationItem>
            <NavigationItem link="/resume">RESUME</NavigationItem>
          </ul>
        </div>
      </nav>
    );
}

export default Header;
