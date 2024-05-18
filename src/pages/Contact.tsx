import QRCode from "../components/QRCode/QRCode";

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <QRCode />
    </section>
  );
};

export default Contact;
