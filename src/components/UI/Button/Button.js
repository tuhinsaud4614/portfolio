import React from "react";
import classes from './Button.module.css';

const Button = props => {
  return (
    <button className={`btn shadow ${classes.Button}`} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default Button;
