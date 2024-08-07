import React, { useState } from "react";
import { Button, Form, Input, notification } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";

const layout = {
  labelCol: { span: 8 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};
/* eslint-enable no-template-curly-in-string */
const onFinish = (values: unknown) => {
  console.log(values);
};

type sendFormProps = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const openWarningNotification = (placement: NotificationPlacement) => {
    api.warning({
      message: "Oops! Looks like you missed a field.",
      description: "Fill them all out and try sending again.",
      placement,
    });
  };

  const openNotification = (placement: NotificationPlacement) => {
    api.success({
      message: "Your message is on its way!",
      description: "Thanks for reaching out.",
      placement,
    });
  };

  const sendForm = ({ name, email, message }: sendFormProps) => {
    if (!name || !email || !message) {
      openWarningNotification("topLeft");
    } else openNotification("topLeft");
  };

  return (
    <>
      {contextHolder}
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        layout="vertical"
      >
        <Form.Item
          name={["name"]}
          label={<label style={{ color: "var(--text-color)" }}>Name</label>}
          rules={[{ required: true }]}
        >
          <Input onChange={(e) => setName(e.target.value)} placeholder="Name" />
        </Form.Item>
        <Form.Item
          name={["email"]}
          label={<label style={{ color: "var(--text-color)" }}>Email</label>}
          rules={[{ required: true }]}
        >
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name={["message"]}
          label={<label style={{ color: "var(--text-color)" }}>Message</label>}
        >
          <Input.TextArea onChange={(e) => setMessage(e.target.value)} />
        </Form.Item>
        <Form.Item>
          <Button
            onClick={() => sendForm({ name, email, message })}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ContactForm;
