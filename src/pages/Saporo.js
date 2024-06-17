import React from 'react';
import Hero from '../components/Hero';
import ScrollToTop from '../scripts/ScrollToTop';
import CityHero from '../components/CityHero';
import PlaceCard from '../components/PlaceCard';
import FoodCard from '../components/FoodCard';
import Carousel from '../components/Carousel';

function Saporo() {
  ScrollToTop();
  return (
    <>
      <Hero />
      <CityHero cityName={"삿 포 로"} cityOverview={"Discover the beauty of Japan's top travel destinations."} cityImg={"saporo_main.jpg"}/>
      <div className="container my-5">
        <h2 style={{
          fontFamily: 'TheJamsil5Bold'
        }}>삿 포 로</h2>
        <p className="mb-5" style={{
          fontFamily: 'Pretendard-Regular'
        }}>풍부한 자연 경관과 신선한 해산물과 재료들, 다채로운 축제가 어우러진 매력적인 도시 삿포로는 어떤가요?</p>
        <Carousel carouselImg1={"saporo/saporo1.jpg"} carouselImg2={"saporo/saporo2.jpg"} carouselImg3={"saporo/saporo3.jpg"} carouselPos2={"50% 70%"} carouselPos3={"50% 50%"}/>
        <h3>Place</h3>
        <div className="row justify-content-center text-center">
          <PlaceCard placeImg={"/saporo/place/saporo_place1.webp"} placeName={"오타루 운하"} placeAlt={"삿포로 근교의 오타루에 위치한 아름다운 운하로, 석조 건물과 가스등이 어우러진 낭만적인 풍경이 인상적이다. 특히 저녁에는 조명이 켜져 로맨틱한 분위기를 자아내며, 운하를 따라 산책하거나 유람선을 타고 즐길 수 있다."} placeUrl={"https://triple.guide/attractions/02c8c195-8874-4baa-beaa-cf2a8462b586?_triple_no_navbar"}/>
          <PlaceCard placeImg={"/saporo/place/saporo_place2.jpg"} placeName={"삿포로 맥주 박물관"} placeAlt={"일본 최초의 맥주 브랜드인 삿포로 맥주의 역사와 제조 과정을 소개하는 박물관이다. 다양한 전시와 함께 실제 맥주를 시음할 수 있는 기회도 제공되며, 맥주 애호가들에게는 꼭 방문해야 할 명소다."} placeUrl={"https://triple.guide/attractions/6065e3f8-4687-466a-83a2-0cc843017b8c?_triple_no_navbar"}/>
          <PlaceCard placeImg={"/saporo/place/saporo_place3.webp"} placeName={"아오이이케"} placeAlt={"홋카이도 비에이에 위치한 '푸른 연못'으로, 신비로운 푸른빛을 띄는 물이 특징이다. 계절과 날씨에 따라 색이 변하며, 사진 촬영지로도 인기가 많다."} placeUrl={"https://triple.guide/attractions/1b24fe32-5d77-484a-8acf-86e16eeedb96?_triple_no_navbar"}/>
          <PlaceCard placeImg={"/saporo/place/saporo_place4.jpg"} placeName={"오도리 공원"} placeAlt={"삿포로의 중심부에 위치한 대규모 공원으로, 사계절 내내 다양한 행사와 축제가 열리는 곳이다. 삿포로 눈 축제, 라일락 축제 등 다양한 이벤트가 개최되며, 휴식과 산책을 즐기기에 좋은 도시의 오아시스다."} placeUrl={"https://triple.guide/attractions/e86a4174-d53b-4f05-99f9-590d8908d8c7?_triple_no_navbar"}/>
        </div>
        <h3>Food</h3>
        <div className='row justify-content-center text-center'>
          <FoodCard foodImg={"/saporo/food/saporo_food1.jpg"} foodName={"대게"} foodAlt={"삿포로를 포함한 홋카이도의 대표적인 해산물 요리로, 신선하고 살이 꽉 찬 대게가 일품이다. "} />
          <FoodCard foodImg={"/saporo/food/saporo_food2.webp"} foodName={"양고기"} foodAlt={"홋카이도의 전통 요리인 '징기스칸'으로 유명한 양고기 요리는 부드럽고 풍부한 맛이 특징이다. 얇게 썬 양고기를 채소와 함께 철판에서 구워 먹는 방식으로, 특유의 소스와 어우러져 독특하고 맛있는 풍미를 자아낸다."} />
          <FoodCard foodImg={"/saporo/food/saporo_food3.webp"} foodName={"삿포로 라멘"} foodAlt={"된장 베이스의 진한 국물과 쫄깃한 면발이 특징이다. 돼지고기, 버터, 옥수수 등 다양한 토핑이 추가되어 깊고 풍부한 맛을 자랑하며, 추운 겨울철에 특히 인기가 많다."} />
        </div>
      </div>
    </>
  );
}

export default Saporo;
