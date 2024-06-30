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
          Solid foundation in Linux, having used various distributions for
          nearly 10 years, with a keen interest in experimenting with commands,
          customization, and troubleshooting. Gained international exposure
          during a 4-year stint in Poland, where he studied Computer Science and
          interacted with exchange students from around the world.
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
