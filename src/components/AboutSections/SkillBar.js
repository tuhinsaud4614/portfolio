import React from "react";

const SkillBar = props => {
  return (
    <div className="progress my-2" style={{ height: "25px", backgroundColor: "#e3f2fd" }}>
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: props.rate + "%", backgroundColor: "#575996" }}
        aria-valuenow={props.rate}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {props.title.toUpperCase()}
      </div>
    </div>
  );
};

export default SkillBar;
