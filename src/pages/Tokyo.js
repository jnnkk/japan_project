import React from 'react';
import Hero from '../components/Hero';

function Tokyo() {
  return (
    <>
      <Hero />
      <div className="hero user-select-none" style={{backgroundImage: 'url(img/tokyo_main.jpg)'}}>
        <h1>도쿄</h1>
        <p>Discover the beauty of Japan's top travel destinations.</p>
      </div>
      <div className="container my-5">
        <h2>Tokyo</h2>
        <p>Explore the bustling capital city of Japan, known for its skyscrapers, shopping, and food.</p>
        <div className="row">
          <div className="col-md-6">
            <h3>Tokyo Tower</h3>
            <p>An iconic landmark with observation decks.</p>
          </div>
          <div className="col-md-6">
            <h3>Asakusa</h3>
            <p>Historic area with the famous Senso-ji Temple.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tokyo;
