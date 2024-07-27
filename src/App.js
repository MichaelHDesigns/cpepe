import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './components/Home';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import CpepeSection from './components/CpepeSection';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './App.css';

const App = () => (
  <div className="App">
    <NavBar />
    <Home />
    <About />
    <section id="whitepaper">
      <WhatWeDo />
    </section>
    <section id="roadmap">
      <CpepeSection />
    </section>
    <Footer />
  </div>
);

export default App;