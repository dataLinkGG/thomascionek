import { Button, ConfigProvider } from "antd";
import React from "react";

type AntButtonProps = {
  children: React.ReactNode;
  onClick?: VoidFunction;
  type?: "primary" | "text"; // Add type prop to specify button type
};

const AntButton: React.FC<AntButtonProps> = ({
  children,
  type = "primary",
  onClick,
}) => {
  const style =
    type === "text"
      ? {
          border: "var(--text-color) 1px solid",
        }
      : undefined;

  return type !== "text" ? (
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
        type={type}
        size="large"
        shape="round"
        style={style}
        onClick={onClick}
      >
        {children}
      </Button>
    </ConfigProvider>
  ) : (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: `transparent`,
            colorPrimaryHover: `black`,
            lineWidth: 0,
          },
        },
      }}
    >
      <Button
        type="primary"
        size="large"
        shape="round"
        style={{ color}}
        onClick={onClick}
      >
        {children}
      </Button>
    </ConfigProvider>
  );
};

export default AntButton;
