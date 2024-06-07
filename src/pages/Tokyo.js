import React from 'react';
import Hero from '../components/Hero';
import ScrollToTop from '../scripts/ScrollToTop';
import CityHero from '../components/CityHero';
import PlaceCard from '../components/PlaceCard';
import FoodCard from '../components/FoodCard';

function Tokyo() {
  ScrollToTop();
  return (
    <>
      <Hero />
      <CityHero cityName={"도 쿄"} cityOverview={"Discover the beauty of Japan's top travel destinations."} cityImg={"tokyo_main.jpg"}/>
      <div className="container my-3">
        <h2 style={{
          fontFamily: 'TheJamsil5Bold'
        }}>도 쿄</h2>
        <p className="mb-5">Explore the bustling capital city of Japan, known for its skyscrapers, shopping, and food.</p>
        <h3>Place</h3>
        <div className="row justify-content-center text-center">
          <PlaceCard placeImg={"tokyo_main.jpg"} placeName={"도쿄 타워"} placeAlt={"아름다운 전망을 즐길 수 있는 도쿄의 상징"} placeUrl={"https://triple.guide/attractions/c3d2ef37-f0ef-42b4-a210-039dc08143bf?_triple_no_navbar"} />
          <PlaceCard placeImg={"tokyo_main.jpg"} placeName={"asd"} placeAlt={"asdasdadsadad ad adasd ad"} />
          <PlaceCard placeImg={"tokyo_main.jpg"} placeName={"asd"} placeAlt={"asdasdadsadad ad adasd ad"} />
          <PlaceCard placeImg={"tokyo_main.jpg"} placeName={"asd"} placeAlt={"asdasdadsadad ad adasd ad"} />
          <PlaceCard placeImg={"tokyo_main.jpg"} placeName={"asd"} placeAlt={"asdasdadsadad ad adasd ad"} />
          <PlaceCard placeImg={"tokyo_main.jpg"} placeName={"asd"} placeAlt={"asdasdadsadad ad adasd ad"} />
        </div>
        <h3>Food</h3>
        <div className='row justify-content-center text-center'>
          <FoodCard foodImg={"tokyo_main.jpg"} foodName={"asd"} foodAlt={"asdasdadsadad ad adasd ad"} />
          <FoodCard foodImg={"tokyo_main.jpg"} foodName={"asd"} foodAlt={"asdasdadsadad ad adasd ad"} />
          <FoodCard foodImg={"tokyo_main.jpg"} foodName={"asd"} foodAlt={"asdasdadsadad ad adasd ad"} />
        </div>
      </div>
    </>
  );
}

export default Tokyo;
