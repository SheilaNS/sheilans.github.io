import project from "../assets/css/ProjectCard.module.css";

export default function ProjectCard({ name, image, desc, git, gitIcon }) {
  return (
    <div className={project.container}>
      <div
        className={project.card}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={project.details}>
          <p className={project.title}>{name}</p>
          <p className={project.desc}>{desc}</p>
          <a
            href={git}
            target="_blank"
            rel="noreferrer"
            className={project.link}
          >
            <img src={gitIcon} alt={name} className={project.icon} />
          </a>
        </div>
      </div>
    </div>
  );
}
