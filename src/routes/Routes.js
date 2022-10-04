import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';

const Rotas = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/skills' element={<Skills />} />
    <Route path='/projects' element={<Projects />} />
    <Route path='/contact' element={<Contact />} />
  </Routes>
);

export default Rotas;