import { useEffect, useState } from "react";
import { Menu, Affix, Anchor } from "antd";
import styles from "./Navbar.module.css";

const handleMenuClick = (e: { key: string }) => {
  const targetSection = document.getElementById(e.key);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

const Nav = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1400);
  const [currentSection, setCurrentSection] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1400);
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "contact"];
      const scrollY = window.scrollY;
      let newCurrentSection = "";

      for (const section of sections) {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            newCurrentSection = section;
            break;
          }
        }
      }

      setCurrentSection(newCurrentSection);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isMobile ? (
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
  ) : (
    <Affix>
      <Anchor
        replace
        getCurrentAnchor={(activeLink) => {
          const headerElement = document.getElementById("#home");
          const headerHeight = headerElement ? headerElement.offsetHeight : 0;
          const targetSection = document.getElementById(activeLink);
          if (targetSection) {
            return (targetSection.offsetTop + headerHeight).toString();
          }
          return "0";
        }}
      >
        <Menu
          style={{
            background: "transparent",
            position: "absolute",
            height: "80px",
            fontSize: "18px",
            padding: "10px 20px",
          }}
          mode={"horizontal"}
          onClick={handleMenuClick}
          selectedKeys={[currentSection]}
        >
          <Menu.Item key="home">
            <Anchor.Link title="" href="#home">
              Home
            </Anchor.Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Anchor.Link title="" href="#about">
              About
            </Anchor.Link>
          </Menu.Item>
          <Menu.Item key="skills">
            <Anchor.Link title="" href="#skills">
              Skills
            </Anchor.Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Anchor.Link title="" href="#contact">
              Contact
            </Anchor.Link>
          </Menu.Item>
        </Menu>
      </Anchor>
    </Affix>
  );
};

export default Nav;
