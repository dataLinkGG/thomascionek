import { useState } from "react";
import styles from "./Navbar.module.css";

const HamburgerNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="hamburgerNav">
      <div className={styles.hamburgerMenu}>
        <div
          className={`${styles.hamburgerIcon} ${isOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </div>
        <ul className={`${styles.menuLinks} ${isOpen ? styles.open : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerNav;
