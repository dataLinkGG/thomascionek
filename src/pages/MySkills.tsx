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
          tooltipTitle={
            <>
              &ldquo;Simple is better than complex. Complex is better than
              complicated.&rdquo; Python is a general-pourpese language known
              for its simplicity and vast standard library.
            </>
          }
        >
          <img src={pythonIcon} />
        </Skill>
        <Skill
          name="PostegreSQL"
          expertise={1}
          tooltipTitle={
            <>
              A relational database management system known for its high levels
              of resilience, integrity, and correctness.
            </>
          }
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
          tooltipTitle="A JavaScript library that helps fabricate responsive GUIs just like chemistry. Small reusable UI components (like atoms) would bound together to form bigger UI elements."
        >
          <img src={reactIcon} />
        </Skill>
        <Skill
          name="Flask"
          tooltipTitle={
            <>
              Flask is a microframework for web development written in Python.
              Unlike larger frameworks, Flask has a minimalist design, offering
              a core set of features and relying on extensions for additional
              functionalities.
            </>
          }
        >
          <img src={flaskIcon} />
        </Skill>
        <Skill name="Linux">
          <img src={linuxIcon} />
        </Skill>
        <Skill
          name="Git"
          tooltipTitle="Imagine traveling back to any snapshot of file, inspect each changed line, authors, restore older versions when needed and even creating different time-lines (branches) or detached universes (repositories). That is not the time machine, that is just Git."
        >
          <img src={gitIcon} />
        </Skill>
        <Skill name="Figma">
          <img src={figmaIcon} />
        </Skill>
        <Skill
          name="AntDesign"
          tooltipTitle={
            <>
              A design language and UI component library that helps developers
              build scalable and maintainable applications. This website itself
              is built using some components from Ant Design.
            </>
          }
        >
          <img src={antdesignIcon} />
        </Skill>

        <Skill
          name="Vim"
          tooltipTitle="Vim is a keyboard-focused editor with unique modes (command, insert, visual) that can enhance productivity and reduce ergonomic strain. However, the knowledge of vim motions extends beyond programming, possibly being embedded in editors, browsers, tools."
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
