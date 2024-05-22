import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBullseye,
  faGraduationCap,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Button, Modal } from "antd";

const About: React.FC = () => {
  const jobTitle = "Full Stack Development";

  const [experienceModalOpen, setExperienceModalOpen] = useState(false);
  const [educationModalOpen, setEducationModalOpen] = useState(false);

  return (
    <section id="about">
      <p className="section__text__p1">Get to know more</p>
      <h1 className="title">About Me</h1>
      <div>
        <div className="section-container">
          <div
            className="about-card"
            style={{
              flexWrap: "wrap",
              justifyContent: "space-between",
              border: "transparent",
              background: "transparent",
            }}
          >
            <div className="details-container">
              <FontAwesomeIcon className="icon" icon={faBriefcase} />
              <h3>Experience</h3>
              <br />
              <p>
                {jobTitle}
                <br />
                Alude YC W20
              </p>
              <div className="centeredButton">
                <Button
                  style={{
                    background: "var(--primary-color)",
                    color: "black",
                    border: "none",
                  }}
                  onClick={() => setExperienceModalOpen(true)}
                >
                  <div>
                    <FontAwesomeIcon icon={faSearch} /> See More
                  </div>
                </Button>
              </div>
              <div>
                <Modal
                  title="Experience"
                  open={experienceModalOpen}
                  onOk={() => setExperienceModalOpen(false)}
                  onCancel={() => setExperienceModalOpen(false)}
                  okText="Ok"
                  cancelText="Close"
                  footer
                >
                  Worked with Python, JavaScript, TypeScript, and PostgreSQL.
                  Interactively customized React components from Ant Design
                  based on the product models of Figma, working in Scrum
                  methodology, with Code Reviews, product and team
                  retrospectives meetings. Engagingly implemented back-end
                  library functionalities and actively interacted with the
                  database.
                </Modal>
              </div>
            </div>
            <div className="details-container">
              <div>
                <FontAwesomeIcon className="icon" icon={faGraduationCap} />
                <h3>Education</h3>
                <br />
                <p>Strategic Planning and Analysis Systems Development</p>
                <div className="centeredButton">
                  <Button
                    style={{
                      background: "var(--primary-color)",
                      color: "black",
                      border: "none",
                    }}
                    onClick={() => setEducationModalOpen(true)}
                  >
                    <div>
                      <FontAwesomeIcon icon={faSearch} /> See More
                    </div>
                  </Button>
                </div>
              </div>
              <Modal
                title="Education"
                open={educationModalOpen}
                onOk={() => setEducationModalOpen(false)}
                onCancel={() => setEducationModalOpen(false)}
                okText="Ok"
                cancelText="Close"
                footer
              >
                Solid foundation in Linux, having used various distributions for
                nearly 10 years, with a keen interest in experimenting with
                commands, customization, and troubleshooting. Gained
                international exposure during a 4-year stint in Poland, where he
                studied Computer Science and interacted with exchange students
                from around the world.
              </Modal>
            </div>
            <div className="details-container">
              <div className="details-container-goals">
                <FontAwesomeIcon className="icon" icon={faBullseye} />
                <h3>Goals</h3>
                <br />
                <div>
                  <div
                    /* TODO: create a class */
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <ul>
                      {/* <SendOutlined style={{ height: "1px" }} /> */}
                      <p>-&nbsp;Full Stack Development</p>
                    </ul>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    {/* <SendOutlined /> */}
                    <p>-&nbsp;Freelancing Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
