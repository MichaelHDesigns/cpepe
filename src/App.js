import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './components/Home';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import CpepeSection from './components/CpepeSection';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <div className="App">
    <Home />
    <About />
    <WhatWeDo />
    <CpepeSection />
    <Footer />
  </div>
);

export default App;