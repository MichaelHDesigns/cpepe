import React from 'react';
import './WhatWeDo.css';

const WhatWeDo = () => (
  <div className="what-we-do">
    <h2>What We Do</h2>
    <div className="services">
      <div className="service">
        <h3>Humanely Raised</h3>
        <p>We guarantee that our chicken...</p>
      </div>
      <div className="service">
        <h3>Fed Organic Diets</h3>
        <p>Our poultry is fed with organic...</p>
      </div>
      <div className="service">
        <h3>Processed with Care</h3>
        <p>We employ state of the art processing techniques...</p>
      </div>
      <div className="service">
        <h3>Delivered Fresh</h3>
        <p>Using our temperature-controlled delivery services...</p>
      </div>
    </div>
    <div className="chef-pepe">
      <h3>Introducing Chef Pepe</h3>
      <p>We're thrilled to introduce Chef Pepe...</p>
    </div>
  </div>
);

export default WhatWeDo;