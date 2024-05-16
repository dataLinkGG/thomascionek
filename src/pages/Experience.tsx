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
      expertise: 2,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Bash",
      expertise: 1,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
    },
  ];

  const skills: Skill[] = [
    {
      name: "Linux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "Github",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    },
    {
      name: "Vim",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Yarn",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yarn/yarn-original.svg",
    },
    {
      name: "Jest",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
    },
    {
      name: "Pytest",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytest/pytest-original.svg",
    },
    {
      name: "Flask",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
    },
    {
      name: "Poetry",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/poetry/poetry-original.svg",
    },
    {
      name: "Less",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/less/less-plain-wordmark.svg",
    },
    {
      name: "Liquibase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/liquibase/liquibase-original-wordmark.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    },
    {
      name: "Postman",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    },
    {
      name: "Notion",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg",
    },
  ];

  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Skill Set</h1>

      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h3 className="experience-sub-title">
              Technologies I have worked with
            </h3>
            <div className="article-container">
              <div className="article-container">
                {languages.map((language) => (
                  <Skill key={language.name} {...language} />
                ))}
              </div>
              {skills.map((skill) => (
                <Skill key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
