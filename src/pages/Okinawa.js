import React from 'react';
import Hero from '../components/Hero';
import ScrollToTop from '../scripts/ScrollToTop';
import CityHero from '../components/CityHero';
import PlaceCard from '../components/PlaceCard';
import FoodCard from '../components/FoodCard';
import Carousel from '../components/Carousel';

function Okinawa() {
  ScrollToTop();
  return (
    <>
      <Hero />
      <CityHero cityName={"오 키 나 와"} cityOverview={"Discover the beauty of Japan's top travel destinations."} cityImg={"okinawa_main.jpg"}/>
      <div className="container my-5">
        <h2 style={{
          fontFamily: 'TheJamsil5Bold'
        }}>오 키 나 와</h2>
        <p className="mb-5" style={{
          fontFamily: 'Pretendard-Regular'
        }}>일본의 유명 휴양지, 기존 일본과는 전혀 다른 느낌 지닌 아름다운 해변으로 유명한 열대 낙원 오키나와로 떠나봅시다</p>
        <Carousel carouselImg1={"okinawa/okinawa1.jpg"} carouselImg2={"okinawa/okinawa2.jpg"} carouselImg3={"okinawa/okinawa3.webp"} carouselPos2={"50% 70%"} carouselPos3={"50% 50%"}/>
        <h3>Place</h3>
        <div className="row justify-content-center text-center">
          <PlaceCard placeImg={"/okinawa/place/okinawa_place1.webp"} placeName={"츄라우미 수족관"} placeAlt={"오키나와를 대표하는 수족관으로, 세계 최대 규모의 수조에서 고래상어와 다양한 해양 생물을 가까이서 볼 수 있다. 교육적이고 흥미로운 전시가 가득하다."} placeUrl={"https://triple.guide/attractions/13ca70fe-6681-4065-91ed-33cedfb7ee66?_triple_no_navbar"}/>
          <PlaceCard placeImg={"/okinawa/place/okinawa_place2.jpg"} placeName={"미하마 아메리칸 빌리지"} placeAlt={"오키나와에 위치한 대형 쇼핑 및 엔터테인먼트 복합단지로, 미국의 분위기를 물씬 느낄 수 있는 장소다. 다양한 상점, 레스토랑, 영화관 등이 있어 쇼핑과 여가를 즐기기에 좋다."} placeUrl={"https://triple.guide/attractions/79fdf88c-f15b-4237-85ba-77565b6ff808?_triple_no_navbar"}/>
          <PlaceCard placeImg={"/okinawa/place/okinawa_place3.jpg"} placeName={"만좌모"} placeAlt={"오키나와의 아름다운 해안 절벽으로, 푸른 바다와 하늘이 어우러진 경관이 인상적이다. 이름은 '만 명이 앉을 수 있는 들판'이라는 뜻으로, 특히 일몰 시간에 환상적인 풍경을 감상할 수 있는 명소다."} placeUrl={"https://triple.guide/attractions/8e39c6d3-fd87-4519-99dd-f6b69109c219?_triple_no_navbar"}/>
          <PlaceCard placeImg={"/okinawa/place/okinawa_place4.jpg"} placeName={"슈리성"} placeAlt={"오키나와의 역사를 대표하는 성으로, 류큐 왕국 시대의 문화와 건축 양식을 엿볼 수 있다. 유네스코 세계문화유산으로 지정되어 있으며, 성곽과 아름다운 정원이 어우러진 경치가 일품이다."} placeUrl={"https://triple.guide/attractions/f8e29cd7-37f0-4fd7-b6ce-4ba1fd6cf5e5?_triple_no_navbar"}/>
        </div>
        <h3>Food</h3>
        <div className='row justify-content-center text-center'>
          <FoodCard foodImg={"/okinawa/food/okinawa_food1.jpg"} foodName={"라후테"} foodAlt={"오키나와의 전통 음식으로, 돼지고기를 간장과 설탕, 술로 오랫동안 조린 요리다. 부드럽고 달콤짭짤한 맛이 일품이며, 밥과 함께 먹으면 더욱 맛있다."} />
          <FoodCard foodImg={"/okinawa/food/okinawa_food2.jpg"} foodName={"참프루"} foodAlt={"오키나와의 대표적인 가정식 요리로, 다양한 채소, 두부, 고기, 해산물을 함께 볶아낸 음식이다. 특히 고야 참프루(여주 참프루)가 유명하며, 건강한 식재료로 가득한 맛있고 영양가 높은 요리다."} />
        </div>
      </div>
    </>
  );
}

export default Okinawa;
