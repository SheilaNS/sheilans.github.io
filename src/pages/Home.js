import React from "react";
import home from "../assets/css/Home.module.css";

export default function Home() {
  return (
    <main>
      <div className={home.bg}>
        <div className={home.content}>
          <h1> Sheila Nakashima dos Santos</h1>
          <p className={home.text}>
            Hi there! This is my portfolio. Here you'll be able to know more
            about me, my skills and the projects that I have developed until
            now.
          </p>
          <p className={home.text}>Hope you enjoy!</p>
        </div>
      </div>
      <div className={home.body}>
        <h2>Behind the scene of this portfolio</h2>
        <p className={home.text}>
          Developed with React.js, responsive Bootstrap and CSS Modules.
        </p>
      </div>
    </main>
  );
}
