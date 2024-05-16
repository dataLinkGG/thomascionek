import React from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import IconLink from "../components/IconLink/IconLink";
import { GITHUB, LINKEDIN, NAME, ROLE } from "../constants";
import profilePic from "../assets/profile-pic.jpg";

type ProfileProps = {
  isMobile: boolean;
};

const Profile: React.FC<ProfileProps> = ({ isMobile }) => {
  const cvThomasPath = "./CV_Thomas_Cionek_EN.pdf";

  return (
    <section>
      <div id="profile">
        {isMobile ? undefined : (
          <div className="section__pic-container">
            <img
              src={profilePic}
              alt={`${NAME} profile picture`}
              className="pic"
            />
          </div>
        )}
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">{NAME}</h1>
          <p className="section__text__p1">{ROLE}</p>
          <br />
          <div className="btn-container">
            <Button
              type="default"
              shape="round"
              size={"large"}
              icon={<DownloadOutlined />}
              className="AntButton2"
              onClick={() => {
                window.open(cvThomasPath, "_blank");
              }}
            >
              Download CV
            </Button>
            <ContactInfo />
          </div>
          <div id="socials-container">
            <IconLink url={LINKEDIN} altText="My Github profile">
              <LinkedinOutlined className="largeIcon" />
            </IconLink>
            <IconLink url={GITHUB} altText="My Github profile">
              <GithubOutlined className="largeIcon" />
            </IconLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;