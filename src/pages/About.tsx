import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBullseye,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Tooltip } from "antd";
import AntModal from "../components/AntModal/AntModal";

const About: React.FC = () => {
  const jobTitle = "Full Stack Development";

  return (
    <section id="about">
      <div>
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="about-containers">
            <Tooltip
              placement="bottom"
              title="Worked with Python, JavaScript, TypeScript, and PostgreSQL. Interactively
                      customized React components from Ant Design based on the product models
                      of Figma, working in Scrum methodology, with Code Reviews, product and
                      team retrospectives meetings. Engagingly implemented back-end library
                      functionalities and actively interacted with the database."
            >
              <div className="details-container">
                <FontAwesomeIcon className="icon" icon={faBriefcase} />
                <h3>Experience</h3>
                <br />
                <p>
                  {jobTitle}
                  <br />
                  Alude YC W20
                  <br />
                </p>
              </div>
            </Tooltip>
              <div className="details-container">
                <div>
                  <FontAwesomeIcon className="icon" icon={faGraduationCap} />
                  <h3>Education</h3>
                  <br />
                  <p>Strategic Planning and Analysis Systems Development</p>
                  <br />
                </div>
                <AntModal />
              </div>
            <Tooltip>
              <div className="details-container">
                <div>
                  <FontAwesomeIcon className="icon" icon={faBullseye} />
                  <h3>Goal</h3>
                  <br />
                  <div>Full Stack Development</div>
                  <br />
                </div>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
      <br />
    </section>
  );
};

export default About;
