import React, { useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Profile from "./Profile";
import Navbar from "../components/NavBar/Navbar";

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1400);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1400);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Profile isMobile={isMobile} />
      <About />
      <Experience />
      {isMobile ? undefined : <Contact />}
    </>
  );
};

export default Home;
