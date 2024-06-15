import React from 'react';
import Hero from '../components/Hero';
import ScrollToTop from '../scripts/ScrollToTop';
import CityHero from '../components/CityHero';
import PlaceCard from '../components/PlaceCard';
import Carousel from '../components/Carousel';
import FoodCard from '../components/FoodCard';
import PlaceCardNoLink from '../components/PlaceCardNoLink';

function Osaka() {
  ScrollToTop();
  return (
    <>
      <Hero />
      <CityHero cityName={"오 사 카"} cityOverview={"Discover the beauty of Japan's top travel destinations."} cityImg={"osaka_main.jpg"}/>
      <div className="container my-5">
        <h2 style={{
          fontFamily: 'TheJamsil5Bold'
        }}>오 사 카</h2>
        <p className="mb-5" style={{
          fontFamily: 'Pretendard-Regular'
        }}>일본의 부산이라고 할 수 있는 곳. 맛있는 먹거리와 열정넘치는 사람들로 가득한 오사카를 즐겨보세요.</p>
        <Carousel carouselImg1={"osaka/osaka1.jpg"} carouselImg2={"osaka/osaka2.jpg"} carouselImg3={"osaka/osaka5.jpg"} carouselPos2={"50% 50%"} carouselPos3={"50% 100%"}/>
        <h3>Place</h3>
        <div className="row justify-content-center text-center">
          <PlaceCard placeImg={"/osaka/place/osaka_place1.webp"} placeName={"도톤보리"} placeAlt={"오사카에서 가장 유명한 거리, 먹거리가 많고 구리코상이 제일 유명!"} placeUrl={"https://triple.guide/attractions/a86a3f55-9f89-4540-a124-f8c4db07ab34?_triple_no_navbar"}/>
          <PlaceCard placeImg={"/osaka/place/osaka_place2.jpg"} placeName={"유니버설 스튜디오 재팬"} placeAlt={"온 가족이 함께 할 수 있는 일본 최대의 할리우드 영화 테마파크 다양한 테마의 어트랙션은 실제 영화속으로 들어가는 듯한 느낌을 준다."} placeUrl={"https://triple.guide/attractions/37cd28e1-ef29-4ac5-8821-3bbdc8d52908?_triple_no_navbar"} />
          <PlaceCard placeImg={"/osaka/place/osaka_place3.jpg"} placeName={"오사카성"} placeAlt={"오사카를 상징하는 대표적인 랜드마크. 히메지 성, 구마모토 성과 함께 일본의 3대 명성 중 하나이며 벚꽃과 잘 어울리는 아름다운 성"} placePos={"50% 35%"} placeUrl={"https://triple.guide/attractions/ab5624ac-4806-4a2e-83cf-4521543b47b4?_triple_no_navbar"}/>
          <PlaceCardNoLink placeImg={"/osaka/place/osaka_place4.jpg"} placeName={"츠텐카쿠"} placeAlt={"오사카 신세카이 거리의 '하늘과 통하는 높은 건물'. 다음날 날씨에 따라 달라지는 네온사인의 야경이 매력적이다."} />
          <PlaceCard placeImg={"/osaka/place/osaka_place5.jpg"} placeName={"가이유칸"} placeAlt={"해양 생물과 함께할 수 있는 세계적인 수족관. 지상에서 해저로 내려가는 콘셉트며 다양한 테마별 체험 이벤트 또한 경험할 수 있다."} placeUrl={"https://www.kaiyukan.com/language/korean/"}/>
          <PlaceCard placeImg={"/osaka/place/osaka_place6.webp"} placeName={"우메다 스카이 빌딩"} placeAlt={"파노라마 야경을 볼 수 있는 독특한 디자인의 마천루. 공중정원 전망대에서 볼 수 있는 오사카의 시내가 인상깊다."} placeUrl={"https://triple.guide/attractions/dca30d07-da9a-441c-a368-a0c717837bc0?_triple_no_navbar"}/>
          <PlaceCardNoLink placeImg={"/osaka/place/osaka_place7.jpg"} placeName={"덴포산 대관람차"} placeAlt={"오사카와 간사이의 풍경을 한눈에 담을 수 있는, 화려한 빛을 발하는 낭만적인 야경 명소이다. 8개의 곤돌라는 전면 투명유리로 되어있어 더욱 아찔한 체험이 가능하다."} />
        </div>
        <h3>Food</h3>
        <div className='row justify-content-center text-center'>
          <FoodCard foodImg={"/osaka/food/osaka_food1.jpg"} foodName={"타코야끼"} foodAlt={"겉바속촉 안에 문어가 들어있는 맛있는 풀빵. 먹을때는 매우 뜨거우니 조심해서 먹어야한다."}foodPos={"40% 30%"}/>
          <FoodCard foodImg={"/osaka/food/osaka_food2.jpg"} foodName={"오꼬노미야끼"} foodAlt={"양배추와 여러 가지 재료를 섞은 반죽을 부친 맛있는 오사카식 파전. 해산물, 고기 등 자신이 원하는 베이스에 따라 반죽 변경이 가능하다."}foodPos={"40% 30%"}/>
          <FoodCard foodImg={"/osaka/food/osaka_food3.png"} foodName={"쿠시카츠"} foodAlt={"오사카식 밀가루 반죽 베이스 꼬치 튀김. 주 재료는 고기, 해산물, 채소, 떡 등 다양하다."}foodPos={"40% 30%"}/>
        </div>
      </div>
    </>
  );
}

export default Osaka;
