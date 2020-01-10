import React from "react";

const AboutSections = props => {
  return (
    <div className="d-flex flex-column py-4 px-md-5">
      <div className="col-12 text-justify">
        <h4 className="pb-1 m-0">{props.title.toUpperCase()}</h4>
        <hr />
      </div>
      <div className="col-12 text-justify">{props.children}</div>
    </div>
  );
};

export default AboutSections;

