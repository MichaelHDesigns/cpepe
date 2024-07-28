import React from 'react';
import './CpepeSection.css';

const CpepeSection = () => (
  <div id="cpepeSection" className="cpepe-section">
    <img src="/images/PepeLogo.jpg" alt="Chef Pepe" className="cpepe-image" />
    <div className="cpepe-text">
      <h3>CPEPE Contract Address</h3>
      <p>We're thrilled to introduce Chef Pepe <strong className="highlight">(CPEPE)</strong>, the first meme coin launched on <strong className="highlight">UCIT.Shop</strong></p>
      <h4>Address:</h4>
      <p className="contract-address">
        <a href="https://pump.fun/widget?contract=2wqsY9osgN1t7xdAbnKHydA4fP2HAWfHgS29sBFGpump" target="_blank" rel="noopener noreferrer">
          2wqsY9osgN1t7xdAbnKHydA4fP2HAWfHgS29sBFGpump
        </a>
      </p>
    </div>
  </div>
);

export default CpepeSection;