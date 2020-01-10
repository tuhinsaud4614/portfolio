import React from "react";
import { Link } from "react-router-dom";
import classes from "./CustomLinkBtn.module.css";

const CustomLinkBtn = props => {
  return (
    <Link
      to={props.link}
      className={"btn shadow " + classes.ServiceLink}
      target={props.target}
    >
      {props.linkTitle}
    </Link>
  );
};

export default CustomLinkBtn;
