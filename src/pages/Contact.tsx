import { Button, Tooltip } from "antd";
import { WHATSAPP } from "../constants";

const Contact = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <Tooltip placement="right" title={"Click or scan to chat with me!"}>
        <Button
          type="text"
          target="_blank"
          onClick={() => {
            window.open(WHATSAPP, "_blank");
          }}
        >
          <div>
            <img
              className="qr-code"
              src="thomascionek/assets/qr_black_white_rounded.png"
              alt=""
            />
          </div>
        </Button>
        <br /> {/* just put some element so the tooltip apears in the middle */}
      </Tooltip>
    </section>
  );
};

export default Contact;
