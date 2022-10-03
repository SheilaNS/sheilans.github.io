import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/home.css';

function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="main-container">
          <div className="container-content">
            <h1> Sheila Nakahsima dos Santos</h1>
            <p>Hi there! This is my portfolio. Here you'll be able to know more about me, my skills and the projects that I have developed until now.</p>
            <p>Hope you enjoy!</p>
          </div>
        </div>
        <div className="main-body">
          <h2>Behind the scene of this portfolio</h2>
          <p>Developed with React.js and responsive Bootstrap.</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;