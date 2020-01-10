import React from "react";
import CustomLinkBtn from "../CustomLinkBtn";
import classes from "./HomeSections.module.css";

const ProjectCard = props => {
  return (
    <div className={"card shadow border-0 m-2 " + classes.ProjectCard}>
      <img className="card-img-top" src={props.logo} alt={props.title} />
      <span className={"badge " + classes.ProjectTypeBadge}>
        {props.projectType}
      </span>
      <div className="card-body border-0">
        <h4 className="card-title">
          {props.title.length > 20
            ? `${props.title.slice(0, 20)}...`
            : props.title}
        </h4>
        <p className="card-text text-justify">
          {props.children.length > 150
            ? `${props.children.slice(0, 151)}...`
            : props.children}
        </p>
      </div>
      <div
        className="card-footer text-center border-0"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <CustomLinkBtn
          link={props.link}
          linkTitle={props.linkTitle}
        ></CustomLinkBtn>
      </div>
    </div>
  );
};

export default ProjectCard;
