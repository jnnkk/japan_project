import React from 'react';
import Hero from '../components/Hero';
import ScrollToTop from '../scripts/ScrollToTop';
import CityHero from '../components/CityHero';
import PlaceCard from '../components/PlaceCard';
import FoodCard from '../components/FoodCard';
import Carousel from '../components/Carousel';

function Fukuoka() {
  ScrollToTop();
  return (
    <>
      <Hero />
      <CityHero cityName={"후 쿠 오 카"} cityOverview={"Discover the beauty of Japan's top travel destinations."} cityImg={"fukuoka_main.jpg"}/>
      <div className="container my-5">
        <h2 style={{
          fontFamily: 'TheJamsil5Bold'
        }}>후 쿠 오 카</h2>
        <p className="mb-5" style={{
          fontFamily: 'Pretendard-Regular'
        }}>규슈 지방에서 가장 큰 대도시 후쿠오카, 맛있는 먹거리의 고장으로 유명한 도시이다.</p>
        <Carousel carouselImg1={"fukuoka/fukuoka1.jpg"} carouselImg2={"fukuoka/fukuoka2.jpg"} carouselImg3={"fukuoka/fukuoka3.webp"} carouselPos2={"50% 100%"} carouselPos3={"50% 50%"}/>
        <h3>Place</h3>
        <div className="row justify-content-center text-center">
          <PlaceCard placeImg={"/fukuoka/place/fukuoka_place1.jpg"} placeName={"후쿠오카 타워"} placeAlt={"후쿠오카의 랜드마크로서 234m 높이를 자랑하는 타워. 전망대에 올라가면 후쿠오카 시내는 물론이고 하카타 만까지도 한눈에 볼 수 있다. 특히 저녁에는 조명으로 장식된 타워가 더욱 매력적이다."} placeUrl={"https://triple.guide/attractions/24d885fe-df11-4555-adb4-a4c96a44fd9f?_triple_no_navbar"}/>
          <PlaceCard placeImg={"/fukuoka/place/fukuoka_place2.jpg"} placeName={"모모치 해변공원"} placeAlt={"후쿠오카 도심에서 가까운 곳에 위치한 인공 해변. 넓고 깨끗한 해변과 함께 다양한 레스토랑과 카페가 있어 가족 단위로 방문하기 좋다. 특히 여름철에는 수영과 일광욕을 즐기는 사람들로 붐빈다."} placeUrl={"https://triple.guide/attractions/ef572366-8195-4827-9ff1-bd8826292f51?_triple_no_navbar"}/>
          <PlaceCard placeImg={"/fukuoka/place/fukuoka_place3.jpg"} placeName={"캐널시티 하카타"} placeAlt={"후쿠오카의 대표적인 쇼핑몰이자 엔터테인먼트 복합 시설. 쇼핑, 식사, 엔터테인먼트를 한곳에서 모두 즐길 수 있다. 특히 중앙에 위치한 운하와 분수 쇼는 방문객들에게 큰 인기를 끌고 있다."} placeUrl={"https://triple.guide/attractions/c4dc1c87-18b1-4d34-a114-27c44d32b259?_triple_no_navbar"}/>
          <PlaceCard placeImg={"/fukuoka/place/fukuoka_place4.jpg"} placeName={"나카스"} placeAlt={"후쿠오카의 유명한 유흥가이자 미식 거리. 밤이 되면 화려한 네온사인 아래로 다양한 음식점과 바가 줄지어 있다. 이곳에서 후쿠오카의 유명한 야타이(포장마차) 음식을 맛볼 수 있다."} placeUrl={"https://triple.guide/attractions/454aa686-38f5-4299-9240-03bd4549efe7?_triple_no_navbar"}/>
          <PlaceCard placeImg={"/fukuoka/place/fukuoka_place5.jpg"} placeName={"이치란 본사 총본점"} placeAlt={"유명한 라멘 체인 이치란의 본점. 특별한 맛을 자랑하는 돈코츠 라멘을 맛볼 수 있으며, 독특한 개별 좌석 시스템으로 혼자서도 편하게 식사를 즐길 수 있다. 줄이 길게 늘어서는 경우가 많으니 시간을 넉넉히 잡는 것이 좋다."} placeUrl={"https://triple.guide/restaurants/3814dfe4-c179-4554-b66e-a5c556e83ff5?_triple_no_navbar"}/>
        </div>
        <h3>Food</h3>
        <div className='row justify-content-center text-center'>
          <FoodCard foodImg={"/fukuoka/food/fukuoka_food1.jpg"} foodName={"하카타식 라멘"} foodAlt={"후쿠오카를 대표하는 라멘, 돼지사골로 육수를 우려내 진득함이 일품인 후쿠오카식 라멘"} />
          <FoodCard foodImg={"/fukuoka/food/fukuoka_food2.jpg"} foodName={"모츠나베"} foodAlt={"후쿠오카의 대표적인 전골 요리로, 소 내장과 야채를 주 재료로 하여 된장 또는 간장 베이스의 육수에서 끓여낸다. 특히 추운 겨울철에 먹으면 진짜 맛있다"} />
          <FoodCard foodImg={"/fukuoka/food/fukuoka_food3.jpg"} foodName={"멘타이코"} foodAlt={"후쿠오카에서 유래된 매콤한 명란젓으로, 일본 전역에서 사랑받는 식재료다. 밥과 함께 먹거나 오니기리(주먹밥) 속에 넣어 먹기도 하며, 파스타와 함께 요리해도 좋다."} />
          <FoodCard foodImg={"/fukuoka/food/fukuoka_food4.webp"} foodName={"히요코"} foodAlt={"후쿠오카의 대표적인 기념품 과자로, 병아리 모양의 귀여운 외관이 특징이다. 부드러운 만주 반죽 속에 달콤한 팥 앙금이 들어있어 남녀노소 누구나 좋아하는 간식이다. 실제로 사보면 먹기 아까울 정도로 귀엽다."} />
        </div>
      </div>
    </>
  );
}

export default Fukuoka;
