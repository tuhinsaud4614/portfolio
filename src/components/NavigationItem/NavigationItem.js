import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.css";

const NavigationItem = props => {
  return (
    <li className="nav-item">
      <NavLink
        className="nav-link"
        to={props.link}
        activeClassName={classes.CustomActive}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
