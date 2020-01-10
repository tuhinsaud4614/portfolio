import React, { Component } from "react";
import { connect } from "react-redux";

import ServiceLogo from "../../img/background1.svg";
import AboutMy from "../../components/AboutSections/AboutMy";
import ProjectCard from "../../components/HomeSections/ProjectCard";
import classes from "../About/About.module.css";

import { fetchProjects } from "../../store/actions/index";
import isEmpty from "../../utils/isEmpty";

class About extends Component {
  componentDidMount() {
    this.props.fetchAllProjects();
  }
  render() {
    let projects = [];
    if (!isEmpty(this.props.projects)) {
      this.props.projects.forEach(project => {
        projects.push(
          <ProjectCard
            key={project.id}
            logo={project.imageUrl}
            title={project.name}
            link="/services"
            linkTitle="Details &#8594;"
            projectUrl={project.url}
            projectType={project.projectType}
          >
            {project.description}
          </ProjectCard>
        );
      });
    }
    return (
      <React.Fragment>
        <div
          className={
            "d-flex align-items-center justify-content-center " + classes.Title
          }
        >
          <div>PORTFOLIO</div>
        </div>
        <AboutMy title="LATEST PROJECTS">
          <div className="d-flex flex-row p-0 justify-content-center justify-content-lg-between flex-wrap">
            {projects}
          </div>
        </AboutMy>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { projects: state.projects };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllProjects: () => dispatch(fetchProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
