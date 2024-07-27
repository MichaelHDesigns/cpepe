import React from 'react';
import './WhatWeDo.css';

const WhatWeDo = () => (
  <div id="what" className="what-we-do">
    <h2>What We Do</h2>
    <div className="services">
      <div className="service">
        <img src="/images/PepeLogo.jpg" alt="Chef Pepe Logo" className="logo" />
        <h3>Humanely Raised</h3>
        <p>We believe Fairness for all</p>
      </div>
      <div className="service">
        <img src="/images/PepeLogo.jpg" alt="Chef Pepe Logo" className="logo" />
        <h3>Fed Organic Diets</h3>
        <p>We Appretiate our Chefs of all levels</p>
      </div>
      <div className="service">
        <img src="/images/PepeLogo.jpg" alt="Chef Pepe Logo" className="logo" />
        <h3>Processed with Care</h3>
        <p>We Bring back to our families the Wealth of a Recipe</p>
      </div>
      <div className="service">
        <img src="/images/PepeLogo.jpg" alt="Chef Pepe Logo" className="logo" />
        <h3>Delivered Fresh</h3>
        <p>Using our formula, will bring many to come together to enjoy seasons of life</p>
      </div>
    </div>
  </div>
);

export default WhatWeDo;