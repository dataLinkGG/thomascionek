import { CopyOutlined } from "@ant-design/icons";
import { Button, Tooltip, notification } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";
import React from "react";
import { useMemo } from "react";
import { PHONE } from "../../constants";

const Information: React.FC = () => {
  const Context = React.createContext({ name: "Default" });

  const contextValue = useMemo(() => ({ name: "Ant Design" }), []);

  const [api, contextHolder] = notification.useNotification();

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

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <div style={{ padding: "2rem" }}>
        <h3>Information</h3>
        <br />
        <div>
          <ul>
            <li>Location: Curitiba, Brazil</li>
            <li>Languages: English, Portuguese</li>
            <li>
              Email: thomascionek97@gmail.com&nbsp;
              <Tooltip title="📋 Copy">
                <Button
                  type="text"
                  onClick={() => copyToClipboard("thomascionek97@gmail.com")}
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
    </Context.Provider>
  );
};

export default Information;
