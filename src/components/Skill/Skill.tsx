import React from "react";
import styles from "./Skill.module.css";
import { Tooltip } from "antd";

type proficiencyLevel = 1 | 2 | 3;

type proficiencyMap = {
  [key in proficiencyLevel]: string;
};

const proficiencyMap: proficiencyMap = {
  1: "Beginner",
  2: "Intermediate",
  3: "Proficient",
};

type SkillProps = {
  name: string;
  expertise?: number;
  children: React.ReactNode;
  tooltipTitle?: React.ReactNode;
};

const Skill: React.FC<SkillProps> = ({
  name,
  expertise,
  children,
  tooltipTitle,
}) => {
  const expertiseText = proficiencyMap[expertise as proficiencyLevel] ?? "";

  return (
    <Tooltip className={styles.skill} title={tooltipTitle}>
      {children}
      <div className={styles.skillDetails}>
        <div style={{ width: "fit-content" }}>{name}</div>
        <div className={styles[`proficiency${expertise}`]}>{expertiseText}</div>
      </div>
    </Tooltip>
  );
};

export default Skill;
