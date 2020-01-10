import React from "react";

const AboutSections = props => {
  return (
    <div className="col-12 col-md-6 pb-3">
      <div className="row p-0">
        <div className="col-12 text-justify">
          <h4 className="pb-1">{props.title.toUpperCase()}</h4>
          <hr />
        </div>
        <div className="col-12 text-justify">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default AboutSections;
