import React from "react";
import AboutMy from "../../components/AboutSections/AboutMy";
import AboutWho from "../../components/AboutSections/AboutWho";
import SkillBar from "../../components/AboutSections/SkillBar";
import classes from "./About.module.css";

const About = () => {
  return (
    <React.Fragment>
      <div
        className={
          "d-flex align-items-center justify-content-center " + classes.Title
        }
      >
        <div>ABOUT ME</div>
      </div>
      <AboutMy title="MY MISSION">
        My mission is to develop unique idea and quality software that will
        secure top ranking in marketplace, people's system and people's heart.
        Develop robust, secure, dynamic, responsive software for all platform
        (computer, tab, mobile phone). Provide top notch customer service,
        customization of our product according to customer demand and current
        technology. Planning advanced techniques for optimization, user
        experience and satisfaction of customer for our software. Planning
        flexible software that will not be bounded by any linguistic or regional
        restriction. I want to flourish software that can blow people's heart
        and soul.
      </AboutMy>
      <AboutMy title="My VISION">
        My vision is to brand our firm as the best firm in the world. Secure the
        top place among software providers for both local and international
        market. Brand our country as the best software provider country. Create
        employment for youth on the field of both software and corporate level.
        Provide our country and world with superior software. Nurture youths to
        be highly skilled software engineers.
      </AboutMy>
      <div className="row py-4 m-0 px-md-5">
        <AboutWho title="WHO I AM">
          I am a highly talented, experienced, professional and cooperative
          software engineer, I am working in programming and web world for more
          than 4 years .I assure you a wide range of quality IT services. Web
          development, mobile app development and UI design the major filed i am
          expert in. Moreover i have teaching passion. I makes video tutorial to
          share my knowledge. My over all skill makes me a complete software
          developer, so you can hire me for your projects
        </AboutWho>
        <AboutWho title="MY SKILLS">
          <SkillBar title="Web development" rate="80"></SkillBar>
          <SkillBar title="Native App development" rate="70"></SkillBar>
        </AboutWho>
      </div>
    </React.Fragment>
  );
};

export default About;
