import React from 'react';
import './Home.css';

const Home = () => {
  const handleClick = () => {
    window.location.href = 'https://pump.fun'; // Redirects to the specified URL
  };

  return (
    <div id="home" className="home">
      <div className="text-container">
        <h1>Welcome to UCIT.Shop</h1>
        <p>Welcome to UCIT.Shop, your ultimate destination for exclusive NFTs and meme coins on the Solana blockchain. Dive into a world where digital art meets functionality, and secure your piece of the digital future with us.</p>
        <p>Additional information or content can go here.</p>
        <button onClick={handleClick}>Buy Chef Pepe Today!!</button>
      </div>
      <img src="/images/PepeLogo.jpg" alt="Chef Pepe" className="logo" />
    </div>
  );
};

export default Home;