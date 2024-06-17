import React from 'react';
import Hero from '../components/Hero';
import ScrollToTop from '../scripts/ScrollToTop';
import CityHero from '../components/CityHero';
import PlaceCard from '../components/PlaceCard';
import FoodCard from '../components/FoodCard';
import Carousel from '../components/Carousel';

function Yufuin() {
  ScrollToTop();
  return (
    <>
      <Hero />
      <CityHero cityName={"유 후 인"} cityOverview={"Discover the beauty of Japan's top travel destinations."} cityImg={"yufuin_main.jpg"}/>
      <div className="container my-5">
        <h2 style={{
          fontFamily: 'TheJamsil5Bold'
        }}>유 후 인</h2>
        <p className="mb-5" style={{
          fontFamily: 'Pretendard-Regular'
        }}>온천으로 유명한 일본의 지역, 웅장한 유후산과 아름다운 료칸이 있어 힐링하기에 최적인 장소이다.</p>
        <Carousel carouselImg1={"yufuin/yufuin1.jpg"} carouselImg2={"yufuin/yufuin2.jpg"} carouselImg3={"yufuin/yufuin3.jpg"} carouselPos2={"50% 70%"} carouselPos3={"50% 50%"}/>
        <h3>Place</h3>
        <div className="row justify-content-center text-center">
          <PlaceCard placeImg={"/yufuin/place/yufuin_place1.jpg"} placeName={"킨린호수"} placeAlt={"사계절 내내 아름다운 풍경을 자랑하는 호수다. 특히 아침에는 호수에서 안개가 피어올라 신비로운 분위기를 자아낸다. 주변에는 산책로와 카페가 있어 여유롭게 시간을 보낼 수 있는 장소다."} placeUrl={"https://triple.guide/attractions/6b3df718-cde4-448e-b851-d994be4b71e7"}/>
          <PlaceCard placeImg={"/yufuin/place/yufuin_place2.jpg"} placeName={"유노츠보 거리"} placeAlt={"후인의 주요 쇼핑 거리로, 아기자기한 상점과 카페, 레스토랑이 즐비해 있다. 전통적인 일본 분위기 속에서 현지 특산품과 수공예품을 구경하고, 맛있는 먹거리를 즐길 수 있는 곳이다. "} placeUrl={"https://triple.guide/regions/92ba56af-a93e-4877-a46a-3b84cf1af0cf/attractions/4ebea9df-e4c1-4635-875a-e6dd3a9a4a93"}/>
          <PlaceCard placeImg={"/yufuin/place/yufuin_place3.jpg"} placeName={"유후산"} placeAlt={"유후인을 감싸고 있는 산, 정상에 오르면 유후인 마을과 주변의 아름다운 풍경을 한눈에 내려다볼 수 있다. 다양한 등산 코스가 있어 초보자부터 숙련된 등산가까지 모두 즐길 수 있다."} placeUrl={"https://triple.guide/attractions/e89b1d39-7948-40b1-bad4-b50de9670e38"}/>
        </div>
        <h3>Food</h3>
        <div className='row justify-content-center text-center'>
          <FoodCard foodImg={"/yufuin/food/yufuin_food1.jpg"} foodName={"당고지루"} foodAlt={"유후인의 전통 음식 중 하나로, 당고(떡)와 다양한 채소, 고기가 들어간 된장 베이스의 국물 요리다. 구수한 된장 국물과 쫄깃한 당고가 어우러져 깊은 맛을 자랑한다."} />
          <FoodCard foodImg={"/yufuin/food/yufuin_food2.jpg"} foodName={"토리텐"} foodAlt={"오이타현에서 유명한 닭 튀김으로 가라아게와는 사뭇 다르다. 겉은 바삭하고 속은 부드러운 식감이 일품이며, 간장 소스나 폰즈 소스에 찍어 먹으면 더욱 맛있다. "} />
        </div>
      </div>
    </>
  );
}

export default Yufuin;
