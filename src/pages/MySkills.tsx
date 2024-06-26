import { SectionTitle } from "../components/Titles/Titles";
import Skill from "../components/Skill/Skill";
import Slot from "../components/Slot/Slot";
import javascriptIcon from "../assets/icons/javascript/javascript-original.svg";
import pythonIcon from "../assets/icons/python/python-original.svg";
import postgresqlIcon from "../assets/icons/postgresql/postgresql-original.svg";
import typescriptIcon from "../assets/icons/typescript/typescript-original.svg";
import reactIcon from "../assets/icons/react/react-original.svg";
import flaskIcon from "../assets/icons/flask/flask-original.svg";
import linuxIcon from "../assets/icons/linux/linux-original.svg";
import gitIcon from "../assets/icons/git/git-original.svg";
import figmaIcon from "../assets/icons/figma/figma-original.svg";
import antdesignIcon from "../assets/icons/antdesign/antdesign-original.svg";
import vimIcon from "../assets/icons/vim/vim-original.svg";
import dockerIcon from "../assets/icons/docker/docker-original.svg";

const MySkills = () => {
  return (
    <section id="skills" className="centered">
      <SectionTitle intro="Explore my" title="Skills" />
      <Slot>
        <Skill
          name="JavaScript"
          expertise={3}
          tooltipTitle="JavaScript, which started as a scripting language, is now widely used to enhance web page functionality, including animations, dynamic content updates, and user interactions."
        >
          <img src={javascriptIcon} />
        </Skill>
        <Skill
          name="Python"
          expertise={2}
          tooltipTitle="Python is a high-level, general-purpose programming language known for its simplicity and vast standard library."
        >
          <img src={pythonIcon} />
        </Skill>
        <Skill
          name="PostegreSQL"
          expertise={1}
          tooltipTitle="PostgreSQL is relational database management system that emphasizes extensibility and SQL compliance. It is known for its high levels of resilience, integrity, and correctness."
        >
          <img src={postgresqlIcon} />
        </Skill>
        <Skill
          name="TypeScript"
          tooltipTitle="TypeScript is a superset of JavaScript that adds optional static type annotations, which can make the development of large-scale applications safer and more scalable."
        >
          <img src={typescriptIcon} />
        </Skill>
        <Skill
          name="React"
          tooltipTitle="React is a JavaScript library that builds interfaces like chemistry: tiny, reusable components (atoms & buttons) combine to form bigger UI elements (molecules & forms)."
        >
          <img src={reactIcon} />
        </Skill>
        <Skill name="Flask">
          <img src={flaskIcon} />
        </Skill>
        <Skill name="Linux">
          <img src={linuxIcon} />
        </Skill>
        <Skill
          name="Git"
          tooltipTitle="Just like a time traveler, Git allows going back to any previous version of your code, see what changes were made, restore an older version if needed and even creating different time-lines - the so called branches, or detached universes, thought a fork."
        >
          <img src={gitIcon} />
        </Skill>
        <Skill name="Figma">
          <img src={figmaIcon} />
        </Skill>
        <Skill
          name="AntDesign"
          tooltipTitle="A design language and a set of UI components for building scalable and maintainable applications."
        >
          <img src={antdesignIcon} />
        </Skill>

        <Skill
          name="Vim"
          tooltipTitle="Vim is a keyboard-focused editor with unique modes (command, insert, visual) for efficient editing without a mouse. Its shortcuts are transferable across many editors and tools."
        >
          <img src={vimIcon} />
        </Skill>
        <Skill
          name="Docker"
          tooltipTitle="Docker packages apps in self-contained containers built from images. Imagine Lego bricks for software - each container runs isolated, sharing the host's OS. Volumes store data outside containers, so it persists even when they stop or restart."
        >
          <img src={dockerIcon} />
        </Skill>
      </Slot>
    </section>
  );
};

export default MySkills;
