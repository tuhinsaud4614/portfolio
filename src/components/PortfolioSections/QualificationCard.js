import React from "react";
import isEmpty from "../../utils/isEmpty";
import SkillBar from "../AboutSections/SkillBar";
import classes from "./QualificationCard.module.css";

const QualificationCard = props => {
  const skillBars = isEmpty(props.skills)
    ? ""
    : props.skills.map((skill, index) => {
        return (
          <SkillBar
            key={index}
            title={skill.title}
            rate={skill.rate}
          ></SkillBar>
        );
      });
  const techniques = isEmpty(props.techniques)
    ? ""
    : props.techniques.map((technique, index) => {
        return (
          <span className="badge badge-pill m-2 p-2 shadow" key={index}>
            {technique}
          </span>
        );
      });

  return (
    <div className={`p-2 my-2 ${classes.TechnicalSkills}`}>
      <p className="text-muted">
        <i className={`fa ${props.icon} mr-2`}></i>
        <span>
          <b>{props.title}</b>
        </span>
      </p>
      {skillBars}
      {techniques}
    </div>
  );
};

export default QualificationCard;
