import React, { useEffect, useState } from "react";
import { Button } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  DownOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { GITHUB, LINKEDIN, NAME, ROLE } from "../constants";
import IconLink from "../components/IconLink/IconLink";
import ContactInfo from "../components/ContactInfo/ContactInfo";

const Profile: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1400);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1400);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <div id="profile">
        {isMobile ? undefined : (
          <div className="picContainer">
            <img
              src="src/assets/profile-pic.jpg"
              alt={`${NAME} profile picture`}
              className="pic"
            />
          </div>
        )}
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">{NAME}</h1>
          <p className="section__text__p2">{ROLE}</p>
          <div className="btnContainer">
            <Button
              type="default"
              shape="round"
              size={"large"}
              icon={<DownloadOutlined />}
              onClick={() => {
                window.open("src/assets/CV_Thomas_Cionek_EN.pdf");
              }}
            >
              Download CV
            </Button>
            <ContactInfo />
          </div>
          <div id="socialsContainer">
            <IconLink url={LINKEDIN} altText="My LinkedIn profile">
              <LinkedinOutlined className="largeIcon" />
            </IconLink>
            <IconLink url={GITHUB} altText="My Github profile">
              <GithubOutlined className="largeIcon" />
            </IconLink>
          </div>
        </div>
      </div>
      <DownOutlined />
    </section>
  );
};

export default Profile;
