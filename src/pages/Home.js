import React from 'react';
import Hero from '../components/Hero';

function Home() {
  return (
    <div>
      <Hero />
      <div className="container my-5">
        <h2>Popular Destinations</h2>
        <p>Explore the most popular travel destinations in Japan.</p>
        <div className="row">
          <div className="col-md-4 pb-5">
            <h3>Tokyo</h3>
            <p>The bustling capital city of Japan.</p>
            <a href="/tokyo" className="btn btn-primary">Learn More</a>
          </div>
          <div className="col-md-4 pb-5"> 
            <h3>Osaka</h3>
            <p>Known for its modern architecture and nightlife.</p>
            <a href="/osaka" className="btn btn-primary">Learn More</a>
          </div>
          <div className="col-md-4 pb-5">
            <h3>Fukuoka</h3>
            <p>A city known for its ancient temples and beaches.</p>
            <a href="/fukuoka" className="btn btn-primary">Learn More</a>
          </div>
          <div className="col-md-4 pb-5">
            <h3>Beppu</h3>
            <p>A city known for its ancient temples and beaches.</p>
            <a href="/beppu" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
