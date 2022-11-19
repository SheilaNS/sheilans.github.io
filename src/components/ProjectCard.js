import project from "../assets/css/ProjectCard.module.css";

export default function ProjectCard({
  name,
  image,
  desc,
  git,
  gitIcon,
  web,
  webIcon,
}) {
  return (
    <div className={project.container}>
      <div
        className={project.card}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={project.details}>
          <p className={project.title}>{name}</p>
          <p className={project.desc}>{desc}</p>
          <div className={project.links}>
            <a
              href={git}
              target="_blank"
              rel="noreferrer"
              className={project.link}
            >
              <img src={gitIcon} alt={name} className={project.icon} />
            </a>
            {web && <a
              href={web}
              target="_blank"
              rel="noreferrer"
              className={project.link}
            >
              <img src={webIcon} alt={name} className={project.web} />
            </a>}
          </div>
        </div>
      </div>
    </div>
  );
}
