import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
