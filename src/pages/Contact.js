import Title from "../components/Title";
import contacts from "../data/contacts";
import style from "../assets/css/Contact.module.css";
import Card from "../components/Card";

export default function Contact() {
  return (
    <div className={style.main}>
      <Title title="Contact" />
      <div className={style.body}>
        <div className={style.skills}>
          {contacts.map((elem) => (
            <a
              key={elem.name}
              href={elem.url}
              target="_blank"
              rel="noreferrer"
              className={style.link}
            >
              <Card name={elem.name} logo={elem.logo} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
