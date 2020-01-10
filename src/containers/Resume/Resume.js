import React, { Component } from "react";
import ProfileImage from "../../img/profile.jpg";
import CustomLinkBtn from "../../components/CustomLinkBtn";
import QualificationCard from "../../components/PortfolioSections/QualificationCard";
// import SkillBar from "../../components/AboutSections/SkillBar";
import classes from "./Resume.module.css";

class Resume extends Component {
  state = {
    technicalQualifications: [
      {
        title: "PROGRAMMING LANGUAGES",
        icon: "fa-code",
        quality: {
          techniques: [
            "PYTHON 3",
            "JAVASCRIPT",
            "DART",
            "CSS",
            "HTML",
            "ARDUINO"
          ]
        }
      },
      {
        title: "WEB DEVELOPMENT",
        icon: "fa-globe",
        quality: {
          techniques: [
            "REDUX",
            "REST API",
            "WEB SCRAPING",
            "JSON",
            "SASS",
            "DOM"
          ],
          skills: [
            {
              title: "REACT JS",
              rate: "85"
            },
            {
              title: "Node js & express",
              rate: "70"
            },
            {
              title: "Bootstrap",
              rate: "90"
            },
            {
              title: "Material Design",
              rate: "60"
            },
            {
              title: "Django",
              rate: "60"
            }
          ]
        }
      },
      {
        title: "MOBILE APP DEVELOPMENT",
        icon: "fa-mobile",
        quality: {
          techniques: ["REDUX", "PROVIDER", "Navigation"],
          skills: [
            {
              title: "Flutter",
              rate: "65"
            },
            {
              title: "React Native",
              rate: "50"
            }
          ]
        }
      },
      {
        title: "DATABASE",
        icon: "fa-database",
        quality: {
          techniques: ["Mongoose", "ORM"],
          skills: [
            {
              title: "SQLITE",
              rate: "75"
            },
            {
              title: "MONGODB",
              rate: "75"
            },
            {
              title: "FIREBASE",
              rate: "75"
            },
            {
              title: "postgresql",
              rate: "75"
            }
          ]
        }
      },
      {
        title: "OTHERS",
        icon: "fa-cogs",
        quality: {
          techniques: ["MS OFFICE", "LINUX", "GIMP"]
        }
      }
    ],
    objectives: [
      {
        title: "Field of Interest",
        icon: "fa-code",
        quality: {
          techniques: [
            "Internet of Thing",
            "Data Science",
            "Data Mining",
            "Machine Learning"
          ]
        }
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <div
          className={
            "d-flex flex-column align-items-center justify-content-center " +
            classes.Title
          }
        >
          <img src={ProfileImage} className="rounded" alt="Responsive" />
          <h4>MD TUHIN SAUD</h4>
          <h6>WEB DEVELOPER || NATIVE APP DEVELOPER</h6>
          {/* <Button
        clicked={() => {
          console.log("clicked");
        }}
      >
        DOWNLOAD CV
      </Button> */}
          <CustomLinkBtn
            link="/download/cv"
            target="_blank"
            linkTitle="DOWNLOAD CV"
          />
        </div>
        <div className="row m-0 ">
          <div className="col-md-6 col-sm-12 my-4">
            <div className="card shadow border-0">
              <div className="card-header text-center border-0">
                <h4>Technical Qualification</h4>
              </div>
              <div className="card-body">
                {this.state.technicalQualifications.map((tq, index) => {
                  return (
                    <QualificationCard
                      key={index}
                      icon={tq.icon}
                      title={tq.title}
                      skills={tq.quality.skills}
                      techniques={tq.quality.techniques}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 my-4">
            <div className="card shadow border-0">
              <div className="card-header text-center border-0">
                <h4>Objectives</h4>
              </div>
              <div className="card-body">
                {this.state.objectives.map((tq, index) => {
                  return (
                    <QualificationCard
                      key={index}
                      icon={tq.icon}
                      title={tq.title}
                      skills={tq.quality.skills}
                      techniques={tq.quality.techniques}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>

      // <React.Fragment>
      //   <div
      //     className={
      //       "d-flex flex-column align-items-center justify-content-center " +
      //       classes.Title
      //     }
      //   >
      //     <img src={ProfileImage} className="rounded" alt="Responsive" />
      //     <h4>MD TUHIN SAUD</h4>
      //     <h6>WEB DEVELOPER || NATIVE APP DEVELOPER</h6>
      //     {/* <Button
      //     clicked={() => {
      //       console.log("clicked");
      //     }}
      //   >
      //     DOWNLOAD CV
      //   </Button> */}
      //     <CustomLinkBtn
      //       link="/download/cv"
      //       target="_blank"
      //       linkTitle="DOWNLOAD CV"
      //     />
      //   </div>
      //   <div className="row m-0 ">
      //     <div className="col-md-6 col-sm-12 my-4">
      //       <div className="card shadow border-0">
      //         <div className="card-header text-center border-0">
      //           <h4>Technical Qualification</h4>
      //         </div>
      //         <div className="card-body">
      //           {/* Coding Languages start  */}
      //           <div className={`p-2 my-2 ${classes.TechnicalSkills}`}>
      //             <p className="text-muted m-0">
      //               <i className={"fa fa-code mr-2"}></i>
      //               <span>
      //                 <b>PROGRAMMING LANGUAGES</b>
      //               </span>
      //             </p>
      //             <span className="badge badge-pill m-2 p-2 shadow">
      //               PYTHON 3
      //             </span>
      //             <span className="badge badge-pill m-2 p-2 shadow">
      //               JAVASCRIPT
      //             </span>
      //             <span className="badge badge-pill m-2 p-2 shadow">DART</span>
      //             <span className="badge badge-pill m-2 p-2 shadow">CSS</span>
      //             <span className="badge badge-pill m-2 p-2 shadow">HTML</span>
      //             <span className="badge badge-pill m-2 p-2 shadow">
      //               Arduino
      //             </span>
      //           </div>
      //           {/* Coding Languages End  */}
      //           {/* Web DEvelopment start  */}
      //           <div className={`p-2 my-2 ${classes.TechnicalSkills}`}>
      //             <p className="text-muted">
      //               <i className={"fa fa-globe mr-2"}></i>
      //               <span>
      //                 <b>WEB DEVELOPMENT</b>
      //               </span>
      //             </p>
      //             <SkillBar title="React JS" rate="85"></SkillBar>
      //             <SkillBar title="Node js & express" rate="70"></SkillBar>
      //             <SkillBar title="Django" rate="60"></SkillBar>
      //             <SkillBar title="Bootstrap" rate="90"></SkillBar>
      //             <SkillBar title="Material Design" rate="60"></SkillBar>
      //             <span className="badge badge-pill m-2 p-2 shadow">REDUX</span>
      //             <span className="badge badge-pill m-2 p-2 shadow">
      //               Rest API
      //             </span>
      //             <span className="badge badge-pill m-2 p-2 shadow">
      //               Web Scraping
      //             </span>
      //             <span className="badge badge-pill m-2 p-2 shadow">JSON</span>
      //             <span className="badge badge-pill m-2 p-2 shadow">SASS</span>
      //             <span className="badge badge-pill m-2 p-2 shadow">DOM</span>
      //           </div>
      //           {/* Web DEvelopment end */}
      //           {/* Mobile App start  */}
      //           <div className={`p-2 my-2 ${classes.TechnicalSkills}`}>
      //             <p className="text-muted">
      //               <i className={"fa fa-mobile mr-2"}></i>
      //               <span>
      //                 <b>MOBILE APP DEVELOPMENT</b>
      //               </span>
      //             </p>
      //             <SkillBar title="Flutter" rate="65"></SkillBar>
      //             <SkillBar title="React Native" rate="50"></SkillBar>
      //             <span className="badge badge-pill m-2 p-2 shadow">REDUX</span>
      //             <span className="badge badge-pill m-2 p-2 shadow">
      //               PROVIDER
      //             </span>
      //             <span className="badge badge-pill m-2 p-2 shadow">
      //               Navigation
      //             </span>
      //           </div>
      //           {/* Mobile App end */}
      //           {/* Mobile App start  */}
      //           <div className={`p-2 my-2 ${classes.TechnicalSkills}`}>
      //             <p className="text-muted">
      //               <i className={"fa fa-database mr-2"}></i>
      //               <span>
      //                 <b>DATABASE</b>
      //               </span>
      //             </p>
      //             <SkillBar title="SQLITE" rate="75"></SkillBar>
      //             <SkillBar title="MONGODB" rate="75"></SkillBar>
      //             <SkillBar title="FIREBASE" rate="75"></SkillBar>
      //             <SkillBar title="postgresql" rate="75"></SkillBar>
      //             <span className="badge badge-pill m-2 p-2 shadow">
      //               Mongoose
      //             </span>
      //             <span className="badge badge-pill m-2 p-2 shadow">ORM</span>
      //           </div>
      //           {/* Mobile App end */}
      //           {/* Others start  */}
      //           <div className={`p-2 my-2 ${classes.TechnicalSkills}`}>
      //             <p className="text-muted">
      //               <i className={"fa fa-cogs mr-2"}></i>
      //               <span>
      //                 <b>OTHERS</b>
      //               </span>
      //             </p>
      //             <span className="badge badge-pill m-2 p-2 shadow">
      //               MS OFFICE
      //             </span>
      //             <span className="badge badge-pill m-2 p-2 shadow">LINUX</span>
      //             <span className="badge badge-pill m-2 p-2 shadow">GIMP</span>
      //           </div>
      //           {/* Others end */}
      //         </div>
      //       </div>
      //     </div>
      //     <div className="col-md-6 col-sm-12 my-4">
      //       <div className="card">
      //         <div className="card-body">
      //           This is some text within a card body.
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </React.Fragment>
    );
  }
}

export default Resume;
