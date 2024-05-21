import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import qr_code from "../assets/qr_black_white_rounded.png";
import IconLink from "../components/IconLink/IconLink";
import { GITHUB, LINKEDIN, WHATSAPP } from "../constants";
import { Tooltip } from "antd";
import React from "react";
import Information from "../components/Information/Information";

type ContactProps = {
  isMobile: boolean;
};

const Contact: React.FC<ContactProps> = ({ isMobile }) => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in touch</p>
      <h1 className="title">Contact me</h1>
      <div className="section-container">
        {isMobile ? (
          <div className="socials-card">
            <IconLink url={LINKEDIN} altText="My LinkedIn profile">
              <LinkedinOutlined className="largeIcon" />
            </IconLink>
            <IconLink url={GITHUB} altText="My Github profile">
              <GithubOutlined className="largeIcon" />
            </IconLink>
            <a href="href=mailto:“thomascionek97@gmail.com">
              <MailOutlined className="largeIcon" />
            </a>
            <IconLink url={WHATSAPP} altText="My Github profile">
              <WhatsAppOutlined className="largeIcon" />
            </IconLink>
          </div>
        ) : (
          <div className="card">
            <div className="socials-card">
              <IconLink url={LINKEDIN} altText="My LinkedIn profile">
                <LinkedinOutlined className="largeIcon" />
              </IconLink>
              <IconLink url={GITHUB} altText="My Github profile">
                <GithubOutlined className="largeIcon" />
              </IconLink>
              <a href="href=mailto:“thomascionek97@gmail.com">
                <MailOutlined className="largeIcon" />
              </a>
              <IconLink url={WHATSAPP} altText="My Github profile">
                <WhatsAppOutlined className="largeIcon" />
              </IconLink>
            </div>
            <Tooltip title="📱 Scan me!">
              <img className="qr-code" src={qr_code} alt="" />
            </Tooltip>
            <div className="vertical-divider"></div>
            <Information />
            <div style={{ padding: "2rem" }}>
              <h3>Powered by</h3>
              <br />
              <div>
                <ul>
                  <li>React</li>
                  <li>Vite</li>
                  <li>Font Awesome</li>
                  <li>Devicon</li>
                  <li>Ant Design</li>
                  <li>Git Hub Pages</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Contact;
