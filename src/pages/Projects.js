import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";
import projectsInfo from "../data/projects";
import projects from "../assets/css/Projects.module.css";

export default function Projects() {
  return (
    <>
      <Title title="Projects" />
      <main className={projects.main}>
        {projectsInfo.map((elem, index) => (
          <ProjectCard
            key={index}
            name={elem.name}
            desc={elem.description}
            image={elem.image}
            git={elem.gitHub}
            gitIcon={elem.gitIcon}
          />
        ))}
      </main>
    </>
  );
}
