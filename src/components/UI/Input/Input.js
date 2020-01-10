import React from "react";
import classes from "./Input.module.css";

const Input = props => {
  let inputElement;
  let temp = props.touched ? props.validClassName : "";
  let classList = `form-control ${classes.Input} ${temp}`;
  switch (props.inputtype) {
    case "input":
      inputElement = (
        <input
          className={classList}
          name={props.name}
          id={props.id}
          value={props.value}
          {...props.config}
          onChange={props.changed}
          required
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={classList}
          name={props.name}
          id={props.id}
          value={props.value}
          {...props.config}
          rows="5"
          onChange={props.changed}
          required
        />
      );
      break;

    default:
      inputElement = (
        <input
          className={classList}
          name={props.name}
          id={props.id}
          value={props.value}
          {...props.config}
          onChange={props.changed}
          required
        />
      );
      break;
  }
  return (
    <div className={`mb-3 col-12 ${classes.FormGroup}`} >
      <label htmlFor={props.id}>{props.title}</label>
      {inputElement}
      {temp === "is-valid" ? (
        <div className="valid-feedback">It's ok</div>
      ) : (
        <div className="invalid-feedback">
          Please enter correct {props.name}
        </div>
      )}
    </div>
  );
};

export default Input;
