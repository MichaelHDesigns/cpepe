import React from 'react';
import './Home.css';

const Home = () => {
  const handleClick = () => {
    window.open('https://pump.fun/2wqsY9osgN1t7xdAbnKHydA4fP2HAWfHgS29sBFGpump', '_blank'); // Opens the trading widget in a new tab
  };

  return (
    <div id="home" className="home">
      <div className="text-container">
        <h1>Welcome to UCIT.Shop</h1>
        <p>Welcome to UCIT.Shop, your ultimate destination for exclusive NFTs and meme coins on the Solana blockchain. Dive into a world where digital art meets functionality, and secure your piece of the digital future with us.</p>
        <p>Chef Pepe is now available on Pump.fun!!</p>
        <button onClick={handleClick}>Buy Chef Pepe Today!!</button>
      </div>
      <img src="/images/Home.png" alt="Chef Pepe" className="logo" />
    </div>
  );
};

export default Home;