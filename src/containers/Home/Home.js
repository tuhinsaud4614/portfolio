import React, { Component } from "react";
import { connect } from "react-redux";

import ServiceLogo from "../../img/background1.svg";
import AboutMy from "../../components/AboutSections/AboutMy";
import AboutWho from "../../components/AboutSections/AboutWho";
import SkillBar from "../../components/AboutSections/SkillBar";
import ServiceCard from "../../components/HomeSections/ServiceCard";
import ProjectCard from "../../components/HomeSections/ProjectCard";
import CustomLinkBtn from "../../components/CustomLinkBtn";
import classes from "./Home.module.css";

import { fetchProjects } from "../../store/actions/index";
import isEmpty from "../../utils/isEmpty";

class Home extends Component {
  bannerSkillsHighlighterRefs = React.createRef();

  fancyStyle = () => {
    let bannerSkillsHighlighter = this.bannerSkillsHighlighterRefs.current;
    let fancyTexts = bannerSkillsHighlighter.textContent;
    
    let newFancyTexts = "";
    for (const everyText of fancyTexts) {
      if(everyText.match(/[a-zA-Z0-9]/)) {
        newFancyTexts += `<span>${everyText}</span>`;

      } else {
        newFancyTexts += everyText;
      }
    }
    bannerSkillsHighlighter.innerHTML = newFancyTexts;
  }

  componentDidMount() {
    this.props.fetchAllProjects();
    this.fancyStyle();
  }

  render() {
    let projects = [];
    if (!isEmpty(this.props.projects)) {
      for (let i = 0; i < 4; i++) {
        projects.push(
          <ProjectCard
            key={this.props.projects[i].id}
            logo={this.props.projects[i].imageUrl}
            title={this.props.projects[i].name}
            link="/services"
            linkTitle="Details &#8594;"
            projectUrl={this.props.projects[i].url}
            projectType={this.props.projects[i].projectType}
          >
            {this.props.projects[i].description}
          </ProjectCard>
        );
      }
    }

    return (
      <React.Fragment>
        <div
          className={
            "d-flex flex-column align-items-center justify-content-center " +
            classes.Banner
          }
        >
          <h2 className="text-center">MD. TUHIN SAUD</h2>
          <h4 className="text-center" ref={this.bannerSkillsHighlighterRefs}>
            Web Developer . Native App Developer . Problem Solver
          </h4>
          <CustomLinkBtn link="/resume" linkTitle="learn more"></CustomLinkBtn>
        </div>
        <div className="row py-5 m-0 px-md-5">
          <AboutWho title="WHO I AM">
            I am a highly talented, experienced, professional and cooperative
            software engineer, I am working in programming and web world for
            more than 4 years .I assure you a wide range of quality IT services.
            Web development, mobile app development and UI design the major
            filed i am expert in. Moreover i have teaching passion. I makes
            video tutorial to share my knowledge. My over all skill makes me a
            complete software developer, so you can hire me for your projects
          </AboutWho>
          <AboutWho title="MY SKILLS">
            <SkillBar title="Web development" rate="80"></SkillBar>
            <SkillBar title="Native App development" rate="70"></SkillBar>
          </AboutWho>
        </div>
        <AboutMy title="MY SERVICES">
          <div className="d-flex flex-row p-0 justify-content-center justify-content-lg-between flex-wrap">
            <ServiceCard
              logo={ServiceLogo}
              title="Mobile Development"
              link="/services"
              linkTitle="Get Services"
            >
              I build native and cross platform mobile app for your business and
              institution as per as your requirements.
            </ServiceCard>
            <ServiceCard
              logo={ServiceLogo}
              title="Mobile Development"
              link="/services"
              linkTitle="Get Services"
            >
              I build native and cross platform mobile app for your business and
              institution as per as your requirements.
            </ServiceCard>
            <ServiceCard
              logo={ServiceLogo}
              title="Mobile Development"
              link="/services"
              linkTitle="Get Services"
            >
              I build native and cross platform mobile app for your business and
              institution as per as your requirements.
            </ServiceCard>
          </div>
        </AboutMy>
        <AboutMy title="LATEST PROJECTS">
          <div className="d-flex flex-row p-0 justify-content-center justify-content-lg-between flex-wrap">
            {projects}

            {/* <ProjectCard
              logo={ServiceLogo}
              title="Food Bazz"
              link="/services"
              linkTitle="Details &#8594;"
            >
              Food Bazz
            </ProjectCard> */}
          </div>
          <div className="d-flex justify-content-center align-items-center p-2">
            <CustomLinkBtn
              link="/services"
              linkTitle="More Projects"
            ></CustomLinkBtn>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
