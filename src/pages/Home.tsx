import React from "react";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Profile from "./Profile";

const Home: React.FC = () => {
  return (
    <>
      <Profile />
      <About />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;
