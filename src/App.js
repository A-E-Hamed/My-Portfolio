import React from 'react';
import './App.css';
import Nav from './components/NavBar';
import Header from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Dummy from './components/dummy';

function App() {
  const color = "teal";
  //test

  return (
    <>
      <Nav color={color} />
      <Header color={color} />
      <About color={color} />
      <Dummy />
      <Projects color={color} />
      <Skills color={color} />
      <Contact color={color} />
      <Footer />
    </>
  );
}

export default App;
