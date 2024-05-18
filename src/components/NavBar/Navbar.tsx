import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import myLogo from "../../assets/sign.svg";
import HamburgerNav from "./HamburgerNav";

const Nav = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1400);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1400);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.navigation}>
      {isMobile ? (
        <HamburgerNav />
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
                <a href="#experience">Skill Set</a>
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
