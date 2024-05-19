import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  CopyOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import qr_code from "../assets/qr_black_white_rounded.png";
import IconLink from "../components/IconLink/IconLink";
import { GITHUB, LINKEDIN, PHONE, WHATSAPP } from "../constants";
import { Button, Tooltip, notification } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";
import { useMemo } from "react";
import React from "react";

const Contact: React.FC = () => {
  const Context = React.createContext({ name: "Default" });

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        openNotification("topLeft");
      })
      .catch((error) => {
        console.error("Error in copying text: ", error);
      });
  };

  const openNotification = (placement: NotificationPlacement) => {
    api.success({
      message: "Copied!",
      description: "The email address has been copied to the clipboard.",
      placement,
    });
  };

  const contextValue = useMemo(() => ({ name: "Ant Design" }), []);

  const [api, contextHolder] = notification.useNotification();

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <section id="contact">
        <p className="section__text__p1">Get in touch</p>
        <h1 className="title">Contact me</h1>
        <div className="section-container">
          <div className="card" style={{ justifyContent: "flex-start" }}>
            <div className="socials-card">
              <IconLink url={LINKEDIN} altText="My LinkedIn profile">
                <LinkedinOutlined className="largeIcon" />
              </IconLink>
              <IconLink url={GITHUB} altText="My Github profile">
                <GithubOutlined className="largeIcon" />
              </IconLink>
              <a href="href=mailto:“thomascionek@gmail.com">
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
            <div style={{ padding: "2rem" }}>
              <h3>Information</h3>
              <br />
              <div>
                <ul>
                  <li>Location: Curitiba, Brazil / Remote</li>
                  <li>Languages: English, Portuguese</li>
                  <li>
                    Email: thomascionek97@gmail.com&nbsp;
                    <Tooltip title="📋 Copy">
                      <Button
                        type="text"
                        onClick={() =>
                          copyToClipboard("thomascionek97@gmail.com")
                        }
                        style={{ padding: 0, margin: 0, width: 0, height: 0 }}
                      >
                        <CopyOutlined style={{ color: "white" }} />
                      </Button>
                    </Tooltip>
                  </li>

                  <li>Phone: {PHONE}</li>
                </ul>
              </div>
            </div>
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
        </div>
      </section>
    </Context.Provider>
  );
};
export default Contact;
