import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

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
        <nav id="hamburgerNav">
          <div className={styles.logo}>Thomas Cionek</div>
          <div className={styles.hamburgerMenu}>
            <div className={styles.hamburgerIcon} onClick={toggleMenu}>
              <span />
              <span />
              <span />
            </div>
            <ul className={`${styles.menuLinks} ${isOpen ? styles.open : ""}`}>
              <li>
                <a href="thomascionek/" onClick={toggleMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="thomascionek/about" onClick={toggleMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="thomascionek/experience" onClick={toggleMenu}>
                  Experience
                </a>
              </li>
              <li>
                <a href="thomascionek/contact" onClick={toggleMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <nav>
          <div className={styles.logo}>Thomas Cionek</div>
          <div>
            <ul className={styles.navLinks}>
              <li>
                <a href="/thomascionek/">Home</a>
              </li>
              <li>
                <a href="/thomascionek/about/">About</a>
              </li>
              <li>
                <a href="/thomascionek/experience/">Experience</a>
              </li>
              <li>
                <a href="/thomascionek/contact/">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Nav;
