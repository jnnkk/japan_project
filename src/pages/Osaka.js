import React from 'react';
import Hero from '../components/Hero';
import ScrollToTop from '../scripts/ScrollToTop';
import CityHero from '../components/CityHero';
import PlaceCard from '../components/PlaceCard';

function Osaka() {
  ScrollToTop();
  return (
    <>
      <Hero />
      <CityHero cityName={"오 사 카"} cityOverview={"Discover the beauty of Japan's top travel destinations."} cityImg={"osaka_main.jpg"}/>
      <div className="container my-5">
        <h2 style={{
          fontFamily: 'TheJamsil5Bold'
        }}>도 쿄</h2>
        <p className="mb-5">Explore the bustling capital city of Japan, known for its skyscrapers, shopping, and food.</p>
        <h3>Place</h3>
        <div className="row">
          <PlaceCard placeImg={"osaka_main.jpg"} placeName={"asd"} placeAlt={"asdasdadsadad ad adasd ad"} />
          <PlaceCard placeImg={"osaka_main.jpg"} placeName={"asd"} placeAlt={"asdasdadsadad ad adasd ad"} />
          <PlaceCard placeImg={"osaka_main.jpg"} placeName={"asd"} placeAlt={"asdasdadsadad ad adasd ad"} />
        </div>
        <h3>Food</h3>
        <div className='row'>

        </div>
      </div>
    </>
  );
}

export default Osaka;
