import React from "react";
import { DownOutlined, DownloadOutlined } from "@ant-design/icons";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import IconLink from "../components/IconLink/IconLink";
import { GITHUB, LINKEDIN, NAME, ROLE, WHATSAPP } from "../constants";
import profilePic from "../assets/profile-pic.jpg";
import AntButton from "../components/AntButton/AntButton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Tooltip } from "antd";

type ProfileProps = {
  isMobile: boolean;
};

const Profile: React.FC<ProfileProps> = ({ isMobile }) => {
  const cvThomasPath = "./CV_Thomas_Cionek_EN.pdf";

  return (
    <section style={{ flexDirection: "column" }}>
      <div id="profile">
        {isMobile ? undefined : (
          <div className="section__pic-container">
            <LazyLoadImage
              src={profilePic}
              alt={`${NAME} profile picture`}
              className="pic"
              width={450}
              effect="blur"
            />
            <img />
          </div>
        )}
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">{NAME}</h1>
          <p className="section__text__p1">{ROLE}</p>
          <br />
          <div className="btn-container">
            <AntButton
              type="text"
              onClick={() => {
                window.open(cvThomasPath, "_blank");
              }}
            >
              <DownloadOutlined />
              Download CV
            </AntButton>
            <AntButton
              onClick={() => {
                window.open(WHATSAPP, "_blank");
              }}
            >
              Let's Talk
            </AntButton>
          </div>
          <div id="socials-container">
            <IconLink url={LINKEDIN} altText="My LinkedIn profile">
              <LinkedinOutlined className="largeIcon" />
            </IconLink>
            <IconLink url={GITHUB} altText="My Github profile">
              <GithubOutlined className="largeIcon" />
            </IconLink>
          </div>
        </div>
      </div>
      <Tooltip title="🖱️️ Scroll down">
        <div className="animated-icon">
          <DownOutlined />
        </div>
      </Tooltip>
    </section>
  );
};

export default Profile;
