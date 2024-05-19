import React from "react";
import Skill from "../components/Skill/Skill";

interface Skill {
  name: string;
  expertise?: number;
  icon: string;
}

const Experience: React.FC = () => {
  const languages: Skill[] = [
    {
      name: "Python",
      expertise: 3,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      name: "JavaScript",
      expertise: 3,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "PostegreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Linux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
  ];

  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Skills</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="card" style={{ flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column" }}></div>
            {languages.map((language) => (
              <Skill key={language.name} {...language} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
