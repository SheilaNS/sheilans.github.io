import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import eu from '../assets/images/Eu.png';
import '../assets/about.css';

function About() {
  return (
    <>
      <Header />
        <main>
          <h1>About</h1>
            <img src={ eu } alt="Eu" className="me-image" />
        </main>
      <Footer />
    </>
  );
};

export default About;