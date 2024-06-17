import React from 'react';
import Hero from '../components/Hero';
import ScrollToTop from '../scripts/ScrollToTop';
import CityHero from '../components/CityHero';
import PlaceCard from '../components/PlaceCard';
import FoodCard from '../components/FoodCard';
import Carousel from '../components/Carousel';
import PlaceCardNoLink from '../components/PlaceCardNoLink';

function Kumamoto() {
  ScrollToTop();
  return (
    <>
      <Hero />
      <CityHero cityName={"구 마 모 토"} cityOverview={"Discover the beauty of Japan's top travel destinations."} cityImg={"kumamoto_main.jpg"}/>
      <div className="container my-5">
        <h2 style={{
          fontFamily: 'TheJamsil5Bold'
        }}>구 마 모 토</h2>
        <p className="mb-5" style={{
          fontFamily: 'Pretendard-Regular'
        }}>규슈의 풍부한 문화와 자연미, 자극적인 맛을 구마모토에서 느껴보세요</p>
        <Carousel carouselImg1={"kumamoto/kumamoto1.jpg"} carouselImg2={"kumamoto/kumamoto2.jpg"} carouselImg3={"kumamoto/kumamoto3.jpg"} carouselPos2={"50% 70%"} carouselPos3={"50% 50%"}/>
        <h3>Place</h3>
        <div className="row justify-content-center text-center">
          <PlaceCard placeImg={"/kumamoto/place/kumamoto_place1.jpg"} placeName={"구마모토 성"} placeAlt={"구마모토의 상징적인 랜드마크로, 일본 3대 명성 중 하나로 꼽힌다. 웅장한 성곽과 아름다운 정원이 특징이며, 역사의 흔적을 느낄 수 있는 곳이다. 특히 벚꽃이 만개하는 봄철에는 많은 관광객이 찾는다."} placeUrl={"https://castle.kumamoto-guide.jp/ko/"}/>
          <PlaceCardNoLink placeImg={"/kumamoto/place/kumamoto_place2.jpg"} placeName={"스이젠지 조주엔"} placeAlt={"구마모토에 위치한 일본 전통 정원으로, 에도 시대에 만들어진 아름다운 조경을 자랑한다. 원형 연못과 잘 가꿔진 잔디, 다양한 식물들이 어우러져 평화로운 분위기를 자아낸다."}/>
          <PlaceCard placeImg={"/kumamoto/place/kumamoto_place3.jpg"} placeName={"가토신사"} placeAlt={"구마모토성 근처에 위치한 신사로, 구마모토의 영웅인 가토 기요마사를 기리는 곳이다. 경내에는 신성한 분위기가 감돌며, 아름다운 자연 경관과 함께 역사적인 유물들을 감상할 수 있다. 구마모토의 역사를 깊이 이해할 수 있는 명소다."} placeUrl={"https://kumamoto-guide.jp/ko/spots/detail/80"}/>
        </div>
        <h3>Food</h3>
        <div className='row justify-content-center text-center'>
          <FoodCard foodImg={"/kumamoto/food/kumamoto_food1.jpg"} foodName={"구마모토식 라멘"} foodAlt={"구마모토의 대표적인 라멘으로, 진한 돼지뼈 육수와 함께 마늘 기름이 특징이다. 풍부하고 깊은 맛을 자랑하며, 두툼한 면발이 육수와 잘 어우러진다. 마늘의 향이 라멘의 풍미를 한층 더해줘 입맛을 돋운다."} />
          <FoodCard foodImg={"/kumamoto/food/kumamoto_food2.jpg"} foodName={"아카규동"} foodAlt={"구마모토 지역에서 유명한 붉은 소고기 덮밥이다. 신선한 구마모토산 소고기를 사용해 부드럽고 육즙이 풍부한 것이 특징이다. 밥 위에 얹어진 소고기는 달콤짭짤한 소스와 잘 어울리며, 고기의 맛을 한층 더 돋보이게 한다."} foodPos={"50% 80%"}/>
          <FoodCard foodImg={"/kumamoto/food/kumamoto_food3.jpg"} foodName={"타이피엔"} foodAlt={"구마모토의 독특한 향토 요리로, 중국식 누들 수프다. 돼지뼈를 우려낸 육수에 해산물, 고기, 채소가 풍부하게 들어가 있다. 투명한 당면이 특징이며, 담백하면서도 깊은 맛을 자랑한다."} />
        </div>
      </div>
    </>
  );
}

export default Kumamoto;
