import {
  faBriefcase,
  faBullseye,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card/Card";
import { SectionTitle } from "../components/Titles/Titles";

const AboutMe = () => {
  return (
    <section id="about" className="centered">
      <SectionTitle intro="Get to know more" title="About me" />
      <div className="cards">
        <Card
          title="Experience"
          description="Alude (YC W20)"
          icon={faBriefcase}
          modalTitle={"Experience"}
        >
          <ul>
            <li>
              Over 1,000 approved contributions GitHub in Python, JavaScript,
              and PostgreSQL.
            </li>
            <li>
              Personalized React components to seamlessly match Figma UX
              designs, ensuring a pixel-perfect user experience.
            </li>
            <li>
              Implemented functionalities within back-end libraries using
              Python, demonstrating strong problem-solving and coding skills.
            </li>
            <li>
              Provided exceptional customer support for one month, including
              intensive database handling to resolve technical issues
              efficiently.
            </li>
          </ul>
        </Card>
        <Card
          title="Education"
          description="Analysis and Systems Development"
          icon={faGraduationCap}
          modalTitle={"Education"}
        >
          <ul>
            <li>
              <b>Systems Analysis and Development</b>
              <br />
              Universidade Positivo · June 2022 - June 2024 · Curitiba, Brazil
            </li>
            <br />
            <li>
              <b>Computer Science</b>
              <br />
              Politechnika Wrocławska · June 2017 - June 2022 · Wrocław, Poland
            </li>
            <br />
            <li>
              <b>Electrical Engineering with Emphasis on Embedded Systems </b>
              <br />
              Universidade Federal do Paraná · January 2016 - June 2017 ·
              Curitiba, Brazil
            </li>
          </ul>
        </Card>
        <Card
          title="Goals"
          description={
            <>
              - Full Stack Development
              <br />- Freelancing
            </>
          }
          icon={faBullseye}
          modalTitle={"Education"}
        />
      </div>
    </section>
  );
};

export default AboutMe;
