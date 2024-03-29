import React from "react";
import home from "../assets/css/Home.module.css";
import About from "./About";

export default function Home() {
  return (
    <main>
      <div className={home.bg}>
        <div className={home.content}>
          <h1> Full Stack Software Developer</h1>
          <p className={home.text}>
            Hi there! This is my portfolio. Here you'll be able to know more
            about me, my skills and the projects I have developed so far.
          </p>
          <p className={home.text}>Hope you enjoy!</p>
        </div>
      </div>
      <About />
      <div className={home.body}>
        <h2>Behind the scenes of this portfolio</h2>
        <p className={home.text}>
          Developed with React.js, responsive Bootstrap and CSS Modules.
        </p>
      </div>
    </main>
  );
}
