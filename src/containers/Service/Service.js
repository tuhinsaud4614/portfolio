import React from "react";
import ServiceLogo from "../../img/background1.svg";
import AboutMy from "../../components/AboutSections/AboutMy";
import AboutWho from "../../components/AboutSections/AboutWho";
import ServiceCard from "../../components/HomeSections/ServiceCard";
import ContactMe from "../ContactMe/ContactMe";
import classes from "./Service.module.css";

const Service = () => {
  return (
    <React.Fragment>
      <div
        className={
          "d-flex align-items-center justify-content-center " + classes.Title
        }
      >
        <div>SERVICES</div>
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
      <div className="row py-4 m-0 px-md-5">
        <AboutWho title="Contact Me">
          <ContactMe />
        </AboutWho>
        <AboutWho title="Contact Others Details">
          <p className="text-muted">
            <i
              className={"fa fa-envelope bg-light mr-3 " + classes.ContactIcon}
            ></i>
            <span>tuhinsaud4614@gmail.com</span>
          </p>
          <a
            className="text-decoration-none"
            href="https://www.facebook.com/tuhinsaud.rt"
            target="__blank"
          >
            <p className="text-muted">
              <i className={"fa fa-facebook mr-3 " + classes.ContactIcon}></i>
              <span>MY FACEBOOK</span>
            </p>
          </a>
          <a
            className="text-decoration-none"
            href="https://github.com/tuhinsaud4614/"
            target="__blank"
          >
            <p className="text-muted">
              <i className={"fa fa-github mr-3 " + classes.ContactIcon}></i>
              <span>MY GITHUB</span>
            </p>
          </a>
          <a
            className="text-decoration-none"
            href="https://www.linkedin.com/in/md-tuhin-saud-149908194/"
            target="__blank"
          >
            <p className="text-muted">
              <i className={"fa fa-linkedin mr-3 " + classes.ContactIcon}></i>
              <span>MY LINKEDIN</span>
            </p>
          </a>
        </AboutWho>
      </div>
    </React.Fragment>
  );
};

export default Service;
