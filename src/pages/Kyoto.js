import React from 'react';
import Hero from '../components/Hero';
import ScrollToTop from '../scripts/ScrollToTop';
import CityHero from '../components/CityHero';
import PlaceCard from '../components/PlaceCard';
import FoodCard from '../components/FoodCard';
import Carousel from '../components/Carousel';

function Kyoto() {
  ScrollToTop();
  return (
    <>
      <Hero />
      <CityHero cityName={"교 토"} cityOverview={"Discover the beauty of Japan's top travel destinations."} cityImg={"kyoto_main.jpg"}/>
      <div className="container my-5">
        <h2 style={{
          fontFamily: 'TheJamsil5Bold'
        }}>교 토</h2>
        <p className="mb-5" style={{
          fontFamily: 'Pretendard-Regular'
        }}>Explore the bustling capital city of Japan, known for its skyscrapers, shopping, and food.</p>
        <Carousel carouselImg1={"osaka/osaka1.jpg"} carouselImg2={"osaka/osaka2.jpg"} carouselImg3={"osaka/osaka5.jpg"} carouselPos2={"50% 50%"} carouselPos3={"50% 100%"}/>
        <h3>Place</h3>
        <div className="row justify-content-center text-center">
          <PlaceCard placeImg={"/kyoto/place/kyoto_place1.webp"} placeName={"도톤보리"} placeAlt={"오사카에서 가장 유명한 거리, 먹거리가 많고 구리코상이 제일 유명!"} placeUrl={"https://triple.guide/attractions/a86a3f55-9f89-4540-a124-f8c4db07ab34?_triple_no_navbar"}/>
        </div>
        <h3>Food</h3>
        <div className='row justify-content-center text-center'>
          <FoodCard foodImg={"kyoto_main.jpg"} foodName={"asd"} foodAlt={"asdasdadsadad ad adasd ad"} />
          <FoodCard foodImg={"kyoto_main.jpg"} foodName={"asd"} foodAlt={"asdasdadsadad ad adasd ad"} />
          <FoodCard foodImg={"kyoto_main.jpg"} foodName={"asd"} foodAlt={"asdasdadsadad ad adasd ad"} />
        </div>
      </div>
    </>
  );
}

export default Kyoto;
