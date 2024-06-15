import React from 'react';
import Hero from '../components/Hero';
import ScrollToTop from '../scripts/ScrollToTop';
import CityHero from '../components/CityHero';
import PlaceCard from '../components/PlaceCard';
import FoodCard from '../components/FoodCard';
import PlaceCardNoLink from '../components/PlaceCardNoLink';
import Carousel from '../components/Carousel';

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
        <p className="mb-5" style={{
          fontFamily: 'Pretendard-Regular'
        }}>고층 건물, 쇼핑, 음식으로 유명한 분주한 일본의 수도를 탐험해보세요!</p>
        <Carousel carouselImg1={"tokyo/tokyo1.jpg"} carouselImg2={"tokyo/tokyo2.jpg"} carouselImg3={"tokyo/tokyo3.jpg"} carouselPos2={"50% 100%"} carouselPos3={"50% 100%"}/>
        <h3>Place</h3>
        <div className="row justify-content-center text-center">
          <PlaceCard placeImg={"/tokyo/place/tokyo_place1.jpg"} placeName={"도쿄 타워"} placeAlt={"아름다운 전망을 즐길 수 있는 도쿄의 상징"} placePos={""} placeUrl={"https://triple.guide/attractions/c3d2ef37-f0ef-42b4-a210-039dc08143bf?_triple_no_navbar"} />
          <PlaceCard placeImg={"/tokyo/place/tokyo_place2.jpg"} placeName={"디즈니 랜드"} placeAlt={"도쿄에 있는 월트 디즈니가 창조한 동화 속 세상, 디즈니 랜드와 디즈니 씨로 나뉘어 있다"} placeUrl={"https://triple.guide/attractions/e889ae22-0336-4cf9-8fbb-742b95fd09d0?_triple_no_navbar"}/>
          <PlaceCard placeImg={"/tokyo/place/tokyo_place3.webp"} placeName={"아사쿠사"} placeAlt={"전통과 현대가 공존하는 도쿄의 인사동"} placeUrl={"https://triple.guide/attractions/cb3b6fa6-57af-42d2-9133-b32b60de720e?_triple_no_navbar"}/>
          <PlaceCard placeImg={"/tokyo/place/tokyo_place4.jpg"} placeName={"시부야"} placeAlt={"수많은 옷 가게와 특유의 젊은이들이 넘쳐나는 곳으로 도시의 활기와 트렌드의 중심 "} placeUrl={"https://triple.guide/attractions/ecebe199-56c7-4b9f-932a-c59d71b66b01?_triple_no_navbar"}/>
          <PlaceCardNoLink placeImg={"/tokyo/place/tokyo_place5.webp"} placeName={"메이지 신궁"} placeAlt={"풍성한 푸른 수목과 넓은 부지가 인상적인 일본의 대표 신사"} />
          <PlaceCardNoLink placeImg={"/tokyo/place/tokyo_place6.webp"} placeName={"도쿄 스카이트리"} placeAlt={"전망대와 스카이 워크가 있는 634m 높이의 세계에서 가장 높은 전파탑!"} />
        </div>
        <h3>Food</h3>
        <div className='row justify-content-center text-center'>
          <FoodCard foodImg={"/tokyo/food/tokyo_food1.jpg"} foodName={"몬자야끼"} foodAlt={"밀가루 반족에 여러 토핑을 올린 도쿄식 파전"}foodPos={"40% 30%"}/>
          <FoodCard foodImg={"/tokyo/food/tokyo_food2.jpg"} foodName={"후카가와 메시"} foodAlt={"일본 도쿄식 바지락 밥"} />
        </div>
      </div>
    </>
  );
}

export default Tokyo;
