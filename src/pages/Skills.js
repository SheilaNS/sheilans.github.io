import Card from "../components/Card";
import Title from "../components/Title";
import skills from "../assets/css/Skills.module.css";
import front from "../data/skillFront";
import back from "../data/skillBack";
import test from "../data/skillTest";
import tech from "../data/skillTech";

export default function Skills() {
  return (
    <main className={skills.main}>
      <Title title="Skills" />
      <div className={skills.body}>
        <h3 className={skills.title}>Front-End</h3>
        <div className={skills.skills}>
          {front.map((elem) => (
            <div className={skills.card}>
              <Card key={elem.name} name={elem.name} logo={elem.logo} />
            </div>
          ))}
        </div>
        <h3 className={skills.title}>Back-End</h3>
        <div className={skills.skills}>
          {back.map((elem) => (
            <div className={skills.card}>
            <Card key={elem.name} name={elem.name} logo={elem.logo} />
          </div>
        ))}
        </div>
        <h3 className={skills.title}>Tests</h3>
        <div className={skills.skills}>
          {test.map((elem) => (
            <div className={skills.card}>
            <Card key={elem.name} name={elem.name} logo={elem.logo} />
          </div>
        ))}
        </div>
        <h3 className={skills.title}>Tools and Technologies</h3>
        <div className={skills.skills}>
          {tech.map((elem) => (
            <div className={skills.card}>
            <Card key={elem.name} name={elem.name} logo={elem.logo} />
          </div>
        ))}
        </div>
      </div>
    </main>
  );
}
