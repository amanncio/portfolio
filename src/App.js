import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Qualification from './components/Qualification/Qualification';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Qualification />
        <Contact />
      </main>
    </>
  );
}

export default App;
