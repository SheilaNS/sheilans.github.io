import eu from "../assets/images/about/eu.png";
import divisor from "../assets/images/about/divisor.svg";
import cats from "../assets/images/about/cats.png";
import eu2 from "../assets/images/about/eu2.png";
import trybe from "../assets/images/about/trybe.png";
import Title from "../components/Title";
import about from "../assets/css/About.module.css";

export default function About() {
  return (
    <main className={about.main}>
      <Title title="About" />
      <div className={about.body}>
        <div className={about.info}>
          <img src={eu} alt="Eu" className={about.image} />
          <div className="me-text">
            <h2 className={about.title}>Hi! My name is Sheila</h2>
            <p className={about.text}>
              I was born in oct/1984 in the city of São Paulo, Brazil. I left my
              mom's house to study when I was 22. Even though I have never left
              the state of São Paulo, I've lived in Araraquara for my first
              degree in Pharmacy and after graduation I went to Itapira, São
              Carlos and now I live in Campinas.
            </p>
          </div>
        </div>
        <img src={divisor} alt="divisor" className={about.div} />
        <div className={about.info}>
          <img src={cats} alt="Gatos no sofá" className={about.image} />
          <div className="me-text">
            <h2 className={about.title}>These are my babies</h2>
            <p className={about.text}>
              I'm a mom of two furballs, one 15-year-old girl and one
              13-year-old boy, their names are Nety and David. And you can see
              on this pic that they have very different personalities. Can you
              guess who is the girl and who is the boy?
            </p>
          </div>
        </div>
        <img src={divisor} alt="divisor" className={about.div} />
        <div className={about.info}>
          <img src={eu2} alt="Eu no computador" className={about.image} />
          <div className="me-text">
            <h2 className={about.title}>Career change</h2>
            <p className={about.text}>
              As I've said before, I first graduated in Pharmacy. During my
              professional experience, I noticed I needed a system to help me on
              my routine, so I decided to study Software Analysis and
              Development in order to develop something for me. While I was
              studying, I could see myself developing for the rest of my life so
              I left Pharmacy and started my career change.
            </p>
          </div>
        </div>
        <img src={divisor} alt="divisor" className={about.div} />
        <div className={about.info}>
          <img src={trybe} alt="Trybe logo" className={about.image} />
          <div className="me-text">
            <h2 className={about.title}>Today</h2>
            <p className={about.text}>
              I'm working as a Summer Instructor for the same school I'm
              finishing the software development course at. This way I can help
              other students and learn at the same time. Now I'm open to work
              and I developed this portfolio to show what I've learned after
              almost one year of studying at Trybe.
            </p>
          </div>
        </div>
        <img src={divisor} alt="divisor" className={about.div} />
      </div>
    </main>
  );
}
