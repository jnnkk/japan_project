import React from 'react';

function Hero() {
  return (
    <div className="hero user-select-none" style={{
      backgroundImage: 'url(../public/img/cherryheader.jpg) no-repeat',
      backgroundSize: 'cover',
      color: 'black',
      textalign: 'center',
      padding: '100px 0',
      textShadow: '2px 2px 4px white'
    }}>
      <h1 style={{
        fontsize: '3em',
        fontFamily: 'Arial, sans-serif'
      }}>Welcome to Japan Travel Guide</h1>
      <p>Discover the beauty of Japan's top travel destinations.</p>
    </div>
  );
}

export default Hero;
