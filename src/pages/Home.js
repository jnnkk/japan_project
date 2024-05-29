import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';

function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <div className="container my-5 user-select-none">
        <h2>Popular Destinations</h2>
        <p>Explore the most popular travel destinations in Japan.</p>
        <div className="row">
          <div className="col-md-4 mb-5" id='tokyo'>
            <div className="card text-bg-dark">
              <img src="img/tokyo_main.jpg" className="card-img" alt="..."></img>
              <div className="card-img-overlay">
                <h3 className="card-title">Tokyo</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5" id='osaka'> 
            <div className="card text-bg-dark">
              <img src="img/osaka_main.jpg" className="card-img" alt="..."></img>
              <div className="card-img-overlay">
                <h3 className="card-title">Osaka</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5" id='fukuoka'>
            <div className="card text-bg-dark">
              <img src="img/fukuoka_main.jpg" className="card-img" alt="..."></img>
              <div className="card-img-overlay">
                <h3 className="card-title">Fukuoka</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card text-bg-dark">
              <img src="img/kyoto_main.jpg" className="card-img" alt="..."></img>
              <div className="card-img-overlay">
                <h3 className="card-title">Kyoto</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card text-bg-dark">
              <img src="img/yufuin_main.jpg" className="card-img" alt="..."></img>
              <div className="card-img-overlay">
                <h3 className="card-title">Yufuin</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card text-bg-dark">
              <img src="img/kumamoto_main.jpg" className="card-img" alt="..."></img>
              <div className="card-img-overlay">
                <h3 className="card-title">Kumamoto</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card text-bg-dark">
              <img src="img/nagasaki_main.jpg" className="card-img" alt="..."></img>
              <div className="card-img-overlay">
                <h3 className="card-title">Nagasaki</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card text-bg-dark">
              <img src="img/saporo_main.jpg" className="card-img" alt="..."></img>
              <div className="card-img-overlay">
                <h3 className="card-title">Saporo</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card text-bg-dark">
              <img src="img/okinawa_main.jpg" className="card-img" alt="..."></img>
              <div className="card-img-overlay">
                <h3 className="card-title">Okinawa</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
