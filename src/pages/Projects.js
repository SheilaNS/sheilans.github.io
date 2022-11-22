import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";
import fundamentos from "../data/projectsFund";
import front from "../data/projectsFront";
import rocket from "../data/projectsRocket";
import projects from "../assets/css/Projects.module.css";

export default function Projects() {
  return (
    <main className={projects.main}>
      <Title title="Projects" />
      <div className={projects.body}>
        <h3>Trybe: Fundamentos</h3>
        <div className={projects.projects}>
          {fundamentos.map((elem, index) => (
            <ProjectCard
              key={index}
              name={elem.name}
              desc={elem.description}
              image={elem.image}
              git={elem.gitHub}
              gitIcon={elem.gitIcon}
              web={elem.web}
              webIcon={elem.webIcon}
            />
          ))}
        </div>
        <h3>Trybe: Front-End</h3>
        <div className={projects.projects}>
          {front.map((elem, index) => (
            <ProjectCard
              key={index}
              name={elem.name}
              desc={elem.description}
              image={elem.image}
              git={elem.gitHub}
              gitIcon={elem.gitIcon}
              web={elem.web}
              webIcon={elem.webIcon}
            />
          ))}
        </div>
        <h3>RocketSeat</h3>
        <div className={projects.projects}>
          {rocket.map((elem, index) => (
            <ProjectCard
              key={index}
              name={elem.name}
              desc={elem.description}
              image={elem.image}
              git={elem.gitHub}
              gitIcon={elem.gitIcon}
              web={elem.web}
              webIcon={elem.webIcon}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
