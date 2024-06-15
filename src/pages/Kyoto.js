import React from 'react';
import Hero from '../components/Hero';
import ScrollToTop from '../scripts/ScrollToTop';
import CityHero from '../components/CityHero';
import PlaceCard from '../components/PlaceCard';
import FoodCard from '../components/FoodCard';
import Carousel from '../components/Carousel';
import PlaceCardNoLink from '../components/PlaceCardNoLink';

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
        }}>일본의 전통과 역사가 살아있는 곳. 여러 일본의 문화유산을 볼 수 있다. 그리고 교토식 화법으로 유명한 곳...</p>
        <Carousel carouselImg1={"kyoto/kyoto1.jpg"} carouselImg2={"kyoto/kyoto2.jpg"} carouselImg3={"kyoto/kyoto3.jpg"} carouselPos2={"50% 70%"} carouselPos3={"50% 50%"}/>
        <h3>Place</h3>
        <div className="row justify-content-center text-center">
          <PlaceCard placeImg={"/kyoto/place/kyoto_place1.webp"} placeName={"청수사"} placeAlt={"교토의 대표 관광지로 꼽히는 사찰. 높은 절벽 위에 걸쳐있는 것이 특징이며 교토의 아름다운 사계절을 한눈에 담을 수 있어 인기가 많다."} placeUrl={"https://triple.guide/attractions/668ec566-9156-4979-8a41-66757b2fddb7?_triple_no_navbar"}/>
          <PlaceCard placeImg={"/kyoto/place/kyoto_place2.jpg"} placeName={"후시미 이나리 신사"} placeAlt={"토리이(도리이)가 붉은 터널과 같은 형태로 이뤄져 있는 신사. 영화 게이샤의 추억에 등장하여 전 세계적으로 유명해진 관광지다. 영화의 한장면 같은 사진을 찍을 수 있어 사람들의 발길이 끊이지 않는다."} placeUrl={"https://triple.guide/attractions/b7c46e47-678c-4864-849c-b2eb3b07e51e?_triple_no_navbar"}/>
          <PlaceCard placeImg={"/kyoto/place/kyoto_place3.webp"} placeName={"기온거리"} placeAlt={"천년의 역사를 품고 있는 아름다운 골목. 일본의 전통 가옥이 잘 정돈된 거리다. 오래된 전통만큼 이름있는 음식점도 많으니 방문해보자."} placeUrl={"https://triple.guide/regions/71476976-cf9a-4ae8-a60f-76e6fb26900d/attractions/79b938c5-1b4c-45e1-9c9f-6551adae38a2"}/>
          <PlaceCardNoLink placeImg={"/kyoto/place/kyoto_place4.webp"} placeName={"금각사"} placeAlt={"유네스코 세계문화유산으로 지정되어 있는, 아름다운 금빛으로 물든 교토의 사원. 특히 물에 비친 금각사는 그 아름다움을 일본 전체에서 손꼽는다 한다."}/>
          <PlaceCardNoLink placeImg={"/kyoto/place/kyoto_place5.jpg"} placeName={"은각사"} placeAlt={"소박한 아름다움이 돋보이는 일본의 국보, 은각사. 자연과 인공이 조화를 이루는 정원은 그야말로 그림과 같은 풍경이다."}/>
          <PlaceCardNoLink placeImg={"/kyoto/place/kyoto_place6.jpg"} placeName={"교토타워"} placeAlt={"교토 시내에서 가장 높은 131m의 교토의 랜드마크. 전망대에 올라가면 계절에 따라 변하는 교토 시내를 한눈에 담을 수 있다."}/>
          <PlaceCardNoLink placeImg={"/kyoto/place/kyoto_place7.png"} placeName={"덴류지"} placeAlt={"일본식 정원하면 대표적으로 떠오르는 교토의 사찰. 원형 연못을 중심으로 모래나 소나무, 바위를 펼쳐서 정원을 꾸미는 일본 전통의 정원 조성법을 볼 수 있다."}/>
          <PlaceCardNoLink placeImg={"/kyoto/place/kyoto_place8.webp"} placeName={"도지"} placeAlt={"유서 깊은 고적이 넘쳐나는 교토에서도 특히 오래된 사찰이다. 일본에서 가장 높은 목조탑인 '고주노토'가 사찰 내 자리하고 있다."}/>
        </div>
        <h3>Food</h3>
        <div className='row justify-content-center text-center'>
          <FoodCard foodImg={"/kyoto/food/kyoto_food1.webp"} foodName={"가이세키"} foodAlt={"일본 전통 고급 요리, 여러 코스로 구성된 정찬. 교토 가이세키는 특히 교토 지역에서 발전한 독특한 스타일로, 계절의 재료를 최대한 활용하여 자연의 미를 담아낸다! "} />
          <FoodCard foodImg={"/kyoto/food/kyoto_food2.jpg"} foodName={"유도후"} foodAlt={"교토 지역의 대표적인 전통 요리로, 두부를 주재료로 한 간단하면서도 정갈한 음식이다."} />
          <FoodCard foodImg={"/kyoto/food/kyoto_food3.jpg"} foodName={"사바스시"} foodAlt={"고등어를 사용한 초밥이다. 사바스시는 특히 교토의 마쓰리가 끝난 후나 특별한 행사 때 즐겨 먹는 고급 요리로 알려져 있다."} />
        </div>
      </div>
    </>
  );
}

export default Kyoto;
