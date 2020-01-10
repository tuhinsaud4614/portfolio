import React from "react";
import CustomLinkBtn from "../CustomLinkBtn";
import classes from "./HomeSections.module.css";

const ServiceCard = props => {
  return (
    <div className={"card m-2 " + classes.ServiceCard}>
      <img className="card-img-top" src={props.logo} alt="service"/>
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-justify">{props.children}</p>
      </div>
      <div className="card-footer text-center">
        <CustomLinkBtn
          link={props.link}
          linkTitle={props.linkTitle}
        ></CustomLinkBtn>
      </div>
    </div>
  );
};

export default ServiceCard;
