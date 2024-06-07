import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ScrollToTop from '../scripts/ScrollToTop';
import CityHero from '../components/CityHero';

function Checklist() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      // API URL
      const apiURL = '/api/v1/forex/recent?codes=FRX.KRWJPY'
    
      try {
        const response = await fetch(apiURL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json(); // 응답을 JSON으로 변환
        setData(result[0]);
        console.log(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }

    fetchUsers();
  }, []);

  ScrollToTop();
  return (
    <>
      <Hero />
      <CityHero cityName={"체 크 리 스 트"} cityOverview={""} cityImg={"tokyo_main.jpg"}/>
      <div className="container my-5">
        <h2 style={{
          fontFamily: 'TheJamsil5Bold'
        }}>체크리스트</h2>
        <p className="mb-5">여행을 떠나기전... 뭐가 필요하지?</p>
        <h3>환전</h3>
        <div className="row mb-5 text-center">
          <div class="card" style={{width: "18rem"}}>
            <img src="img/yen.webp" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">실시간 환율</h5>
              <p class="card-text">{data.date} {data.time} 기준</p>
              <p class="card-text">(1000원 당)</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">기준: {data.basePrice}￥</li>
              <li class="list-group-item">살때: {data.cashBuyingPrice}￥</li>
              <li class="list-group-item">팔때: {data.cashSellingPrice}￥</li>
            </ul>
          </div>
        </div>
        <h3>Food</h3>
        <div className='row'>
          
        </div>
      </div>
    </>
  );
}

export default Checklist;
