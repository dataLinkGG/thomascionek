import AntButton from "../components/AntButton/AntButton";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import HeroPic from "../components/HeroPic/HeroPic";
import { HeroName } from "../components/Titles/Titles";
import { Tooltip } from "antd";
import { DownOutlined } from "@ant-design/icons";
import IconLink from "../components/IconLink/IconLink";
import { GITHUB, LINKEDIN, ROLE } from "../constants";
import ContactInfo from "../components/ContactInfo/ContactInfo";

const Profile = () => {
  const cvThomasPath = "./CV_Thomas_Cionek_EN.pdf";

  return (
    <section id="home" className="centered">
      <div className="hero">
        <HeroPic />
        <div className="section__text">
          <HeroName name="Thomas Cionek" role={ROLE} />
          <div className="btn-container">
            <AntButton
              type="text"
              onClick={() => {
                window.open(cvThomasPath, "_blank");
              }}
            >
              Download CV
            </AntButton>
            <ContactInfo />
          </div>
          <div className="socials-container">
            <IconLink url={LINKEDIN} altText="My LinkedIn profile">
              <LinkedinOutlined className="largeIcon" />
            </IconLink>
            <IconLink url={GITHUB} altText="My Github profile">
              <Tooltip title="Check out my projects!" placement="right">
                <GithubOutlined className="largeIcon" />
              </Tooltip>
            </IconLink>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Tooltip title="🖱️️ Scroll down">
          <div className="animated-icon">
            <DownOutlined />
          </div>
        </Tooltip>
      </div>
    </section>
  );
};

export default Profile;
