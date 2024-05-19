import qr_code from "../assets/qr_black_white_rounded.png";

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in touch</p>
      <h1 className="title">Contact me</h1>
      <div className="section-container">
        <div className="card">
          <img className="qr-code" src={qr_code} alt="" />
          <div className="vertical-divider"></div>
          <div className="socials-card">
            <div className="icon-wrapper">
              <img
                className="largeIcon"
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                }
                alt="Social Icon 1"
              />
            </div>
            <div className="icon-wrapper">
              <img
                className="largeIcon"
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                }
                alt="Social Icon 2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
