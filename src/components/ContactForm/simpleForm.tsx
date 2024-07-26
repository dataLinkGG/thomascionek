import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const SimpleForm = (): JSX.Element => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const publicKey = process.env.EMAILJS_PUBLIC_KEY;
      const serviceKey = process.env.EMAILJS_SERVICE_ID;
      const templateKey = process.env.EMAILJS_TEMPLATE_ID;

      if (publicKey && serviceKey && templateKey) {
        try {
          await emailjs.sendForm(serviceKey, templateKey, form.current, {
            publicKey: publicKey,
          });
          console.log("SUCCESS!");
        } catch (error) {
          console.error("FAILED...", error);
          alert("Failed to send email. Please try again later.");
        }
      } else {
        console.error("Form element not yet available");
        alert("Failed to send email. Please try again later.");
      }
    }
  };

  return (
    <form onSubmit={sendEmail} ref={form}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default SimpleForm;
