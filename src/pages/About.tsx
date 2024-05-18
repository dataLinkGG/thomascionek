import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBullseye,
  faGraduationCap,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { SendOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";

const About: React.FC = () => {
  const jobTitle = "Full Stack Development";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="about">
      <p className="section__text__p1">Get to know more</p>
      <h1 className="title">About Me</h1>
      <div>
        <div className="section-container">
          <div className="about-containers">
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
                  onClick={showModal}
                >
                  <div>
                    <FontAwesomeIcon icon={faSearch} /> See More
                  </div>
                </Button>
              </div>
              <div className="AntModal">
                <Modal
                  title="Eduction"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  okText="Ok"
                  cancelText="Close"
                  footer
                >
                  <div>
                    Solid foundation in Linux, having used various distributions
                    for nearly 10 years, with a keen interest in experimenting
                    with commands, customization, and troubleshooting. Gained
                    international exposure during a 4-year stint in Poland,
                    where he studied Computer Science and interacted with
                    exchange students from around the world.
                  </div>
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
                    onClick={showModal}
                  >
                    <div>
                      <FontAwesomeIcon icon={faSearch} /> See More
                    </div>
                  </Button>
                </div>
              </div>
              <Modal>
                Worked with Python, JavaScript, TypeScript, and PostgreSQL.
                Interactively customized React components from Ant Design based
                on the product models of Figma, working in Scrum methodology,
                with Code Reviews, product and team retrospectives meetings.
                Engagingly implemented back-end library functionalities and
                actively interacted with the database.
              </Modal>
            </div>
            <div className="details-container">
              <div className="details-container-goals">
                <FontAwesomeIcon className="icon" icon={faBullseye} />
                <h3>Goals</h3>
                <br />
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <SendOutlined />
                    <p>&nbsp;Full Stack Development</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <SendOutlined />
                    <p>&nbsp;Freelancing Projects</p>
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
