import { Button, ConfigProvider } from "antd";
import React from "react";
import { WHATSAPP } from "../../constants";

type AntButtonProps = {
  children: React.ReactNode;
  color?: string;
};

const AntButton: React.FC<AntButtonProps> = ({ children, color = "black" }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: `var(--accent-color)`,
            colorPrimaryHover: `var(--accent-color-hover)`,
            colorPrimaryActive: `white`,
            lineWidth: 0,
          },
        },
      }}
    >
      <Button
        type="primary"
        size="large"
        shape="round"
        style={{ color }}
        onClick={() => {
          window.open(WHATSAPP, "_blank");
        }}
      >
        {children}
      </Button>
    </ConfigProvider>
  );
};

export default AntButton;
