import React from 'react';
import Hero from '../components/Hero';
import ScrollToTop from '../scripts/ScrollToTop';
import City from '../components/City';

function Tokyo() {
  ScrollToTop();
  return (
    <>
      <Hero />
      <City />
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
          <div className="col-md-6">
            <h3>Asakusa</h3>
            <p>Historic area with the famous Senso-ji Temple.</p>
          </div>
          <div className="col-md-6">
            <h3>Asakusa</h3>
            <p>Historic area with the famous Senso-ji Temple.</p>
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
