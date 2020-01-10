import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer
      className={"navbar navbar-expand-lg navbar-light " + classes.Footer}
    >
<p className="mx-auto my-0">All Rights Reserved By Tuhin Saud &copy; {new Date().getFullYear()} - {new Date().getFullYear()+1}</p>
    </footer>
  );
};

export default Footer;
