import React from 'react';
import Hero from '../components/Hero';
import ScrollToTop from '../scripts/ScrollToTop';
import CityHero from '../components/CityHero';
import PlaceCard from '../components/PlaceCard';
import FoodCard from '../components/FoodCard';
import Carousel from '../components/Carousel';

function Nagasaki() {
  ScrollToTop();
  return (
    <>
      <Hero />
      <CityHero cityName={"나 가 사 키"} cityOverview={"Discover the beauty of Japan's top travel destinations."} cityImg={"nagasaki_main.jpg"}/>
      <div className="container my-5">
        <h2 style={{
          fontFamily: 'TheJamsil5Bold'
        }}>나 가 사 키</h2>
        <p className="mb-5" style={{
          fontFamily: 'Pretendard-Regular'
        }}>역사와 문화, 그리고 다양한 미식이 어우러진 매력적인 도시 나가사키로 떠나보세요</p>
        <Carousel carouselImg1={"nagasaki/nagasaki1.jpg"} carouselImg2={"nagasaki/nagasaki2.jpeg"} carouselImg3={"nagasaki/nagasaki3.jpg"} carouselPos2={"50% 70%"} carouselPos3={"50% 50%"}/>
        <h3>Place</h3>
        <div className="row justify-content-center text-center">
          <PlaceCard placeImg={"/nagasaki/place/nagasaki_place1.jpg"} placeName={"나가사키 원폭 자료관"} placeAlt={"나가사키에 투하된 원자폭탄의 역사와 그 여파를 기록한 자료관이다. 전쟁의 참혹함과 평화의 중요성을 되새길 수 있는 곳으로, 사진, 유물, 증언 등을 통해 당시의 상황을 생생하게 전달한다. 피해자 관점에서 쓴 내용이 많다"} placeUrl={"https://triple.guide/regions/e7ec9079-a154-4f23-85e9-95007b0771ff/attractions/550c615a-4eca-4619-be18-e09351d2e02d"}/>
          <PlaceCard placeImg={"/nagasaki/place/nagasaki_place2.jpg"} placeName={"메가네바시"} placeAlt={"나가사키의 대표적인 명소인 메가네바시는 '안경 다리'라는 뜻으로, 두 개의 반원형 아치가 물에 비쳐 마치 안경을 닮은 모습에서 유래했다. 아름다운 돌다리와 그 주변의 경치는 사진 촬영지로 인기가 많다."} placeUrl={"https://triple.guide/attractions/cbb3183b-ca40-4664-aee8-13f164c21ee3?_triple_no_navbar"}/>
          <PlaceCard placeImg={"/nagasaki/place/nagasaki_place3.jpeg"} placeName={"하우스텐보스"} placeAlt={"네덜란드의 아름다운 마을을 재현한 테마파크로, 나가사키에서 색다른 유럽 분위기를 만끽할 수 있다. 꽃밭, 운하, 풍차 등의 풍경이 펼쳐지며, 다양한 놀이기구와 이벤트가 마련되어 있어 가족 단위로 방문하기 좋은 곳이다."} placeUrl={"https://triple.guide/attractions/bedaf239-8612-4f05-885c-5660fd9f78a0?_triple_no_navbar"}/>
          <PlaceCard placeImg={"/nagasaki/place/nagasaki_place4.jpg"} placeName={"글로버 가든"} placeAlt={"나가사키의 역사적인 서양식 저택과 정원을 모아놓은 야외 박물관이다. 19세기 중반, 나가사키에 거주하던 외국인들이 지은 저택들을 복원하여 전시하고 있으며, 아름다운 정원과 나가사키 항의 경치를 감상할 수 있다."} placeUrl={"https://triple.guide/regions/e7ec9079-a154-4f23-85e9-95007b0771ff/attractions/55e55e1b-7778-497f-826c-84d8f8dce5d0"}/>
        </div>
        <h3>Food</h3>
        <div className='row justify-content-center text-center'>
          <FoodCard foodImg={"/nagasaki/food/nagasaki_food1.jpg"} foodName={"나가사키 짬뽕"} foodAlt={"다양한 해산물과 야채가 듬뿍 들어간 중국식 면 요리다. 돼지뼈로 우려낸 진한 국물에 해산물의 풍미가 더해져 깊고 풍부한 맛을 자랑한다. 한국의 짬뽕과는 또 다른 독특한 맛을 경험할 수 있다."} foodPos={"50% 75%"}/>
          <FoodCard foodImg={"/nagasaki/food/nagasaki_food2.jpg"} foodName={"카스테라"} foodAlt={"나가사키의 유명한 스폰지 케이크로, 포르투갈에서 전래된 후 일본식으로 변형된 디저트다. 부드럽고 촉촉한 식감과 달콤한 맛이 일품이며, 특히 나가사키에서 만든 카스테라는 그 품질과 맛으로 유명하다."} />
          <FoodCard foodImg={"/nagasaki/food/nagasaki_food3.jpeg"} foodName={"카쿠니만"} foodAlt={"나가사키의 전통 요리 중 하나로, 돼지고기를 간장과 설탕으로 달콤하게 조린 후 만두피에 싸서 찐 요리다. 부드럽고 진한 맛의 돼지고기와 쫄깃한 만두피가 조화를 이루어 남녀노소 누구나 좋아하는 맛을 낸다."} />
        </div>
      </div>
    </>
  );
}

export default Nagasaki;
