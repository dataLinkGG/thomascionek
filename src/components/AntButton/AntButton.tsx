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
          background: "transparent",
          color: "var(--text-color)",
          border: "var(--text-color) 1px solid",
        }
      : undefined;

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
        type={type}
        size="large"
        shape="round"
        style={style}
        onClick={onClick}
      >
        {children}
      </Button>
    </ConfigProvider>
  );
};

export default AntButton;
