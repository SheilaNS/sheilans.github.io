import footer from "../assets/css/Footer.module.css";
import contacts from "../data/contacts";

export default function Footer() {
  return (
    <footer className={footer.container}>
      <div className={footer.contactList}>
        {contacts.map((elem) => (
          <a
            key={elem.name}
            href={elem.url}
            target="_blank"
            rel="noreferrer"
            className={footer.contact}
          >
            <img className={footer.icon} alt={elem.name} src={elem.logo} />
          </a>
        ))}
      </div>
      <p className={footer.text}>
        Copyright © 2022 Sheila Nakashima dos Santos
      </p>
    </footer>
  );
}
