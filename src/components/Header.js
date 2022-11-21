import { useLocation } from "react-router-dom";
import style from "../assets/css/Header.module.css";

export default function Header() {
  const local = useLocation();
  return (
    <header className={style.header}>
      <div className={style.navbar}>
        <nav className="navbar navbar-expand-lg" id="header-nav">
          <div className="container-fluid">
            <a className="navbar-brand" id={style.name} href="/">
              Sheila Nakashima dos Santos
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className={`${style.menu} collapse navbar-collapse`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={
                    local.pathname === "/" ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  href="/"
                  id="home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    local.pathname === "/skills"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="/skills"
                  id="skills"
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    local.pathname === "/projects"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="/projects"
                  id="projects"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    local.pathname === "/contact"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="https://www.linkedin.com/in/sheila-nakashima-dos-santos/"
                  id="contact"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
