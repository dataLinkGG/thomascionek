import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import myLogo from "../../assets/sign.svg";

const Nav = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1400);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1400);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.navigation}>
      {isMobile ? (
        <div id="hamburgerNav">
          <div className={styles.hamburgerMenu}>
            <div className={styles.hamburgerIcon} onClick={toggleMenu}>
              <span />
              <span />
              <span />
            </div>
            <ul className={`${styles.menuLinks} ${isOpen ? styles.open : ""}`}>
              <li>
                <a href="#profile" onClick={toggleMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={toggleMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="#experience" onClick={toggleMenu}>
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" onClick={toggleMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <nav className="desktopNav" id="desktopNav">
          <div className={styles.logo}>
            <img className="sign" src={myLogo} alt="" />
          </div>
          <div>
            <ul className={styles.navLinks}>
              <li>
                <a href="#profile">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Nav;
