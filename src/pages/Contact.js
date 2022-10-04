import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/home.css';

function Contact() {
  return (
    <>
      <Header />
      <main>
        <div className="main-container">
          <div className="container-content">
            <h1>Contact</h1>
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

export default Contact;