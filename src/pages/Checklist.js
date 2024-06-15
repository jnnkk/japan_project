import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ScrollToTop from '../scripts/ScrollToTop';
import CityHero from '../components/CityHero';
import styles from '../styles/Checklist.module.css';

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
        <h1 style={{
          fontFamily: 'TheJamsil5Bold'
        }}>체크리스트</h1>
        <p className="mb-5">여행을 떠나기전... 뭐가 필요하지?</p>

        <div className="row justify-content-center text-center">
          <div className="col-md-4 mb-5">
            <div className="card" style={{padding: "0"}}>
              <img src="img/yen.webp" className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h4 className={`${styles.font_2} card-title`}>환 전</h4>
                <p className="card-text" style={{
                  fontFamily: 'Pretendard-Regular'
                }}>일본은 '엔'을 쓰기 때문에 환전을 해서 가야한다!<br></br>실시간 환율을 알아보고 환전 하자!</p>
                <p className="card-text">{data.date} {data.time} 기준</p>
                <p className="card-text">(1000원 당)</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className={`${styles.font_1} list-group-item`}>기준: {data.basePrice}￥</li>
                <li className={`${styles.font_1} list-group-item`}>살때: {data.cashBuyingPrice}￥</li>
                <li className={`${styles.font_1} list-group-item`}>팔때: {data.cashSellingPrice}￥</li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="card" style={{padding: "0"}}>
              <img src="img/yen.webp" className={`${styles.ratio} card-img-top`} alt="..."></img>
              <div className="card-body">
                <h4 className={`${styles.font_2} card-title`}>전 기</h4>
              </div>
              <p className="card-text mb-5" style={{
                fontFamily: 'Pretendard-Regular'
              }}>일본은 우리나라와 다르게 100v를 쓴다는 사실!! 알고 계셨나요?<br></br>그러기 때문에 '돼지코' 어댑터나 멀티 어댑터를 미리 준비하자!</p>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="card" style={{padding: "0"}}>
              <img src="img/yen.webp" className={`${styles.ratio} card-img-top`} alt="..."></img>
              <div className="card-body">
                <h4 className={`${styles.font_2} card-title`}>여 권</h4>
              </div>
              <p className="card-text mb-5" style={{
                fontFamily: 'Pretendard-Regular'
              }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="card" style={{padding: "0"}}>
              <img src="img/yen.webp" className={`${styles.ratio} card-img-top`} alt="..."></img>
              <div className="card-body">
                <h4 className={`${styles.font_2} card-title`}>유심, 포켓 와이파이</h4>
              </div>
              <p className="card-text mb-5" style={{
                fontFamily: 'Pretendard-Regular'
              }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="card" style={{padding: "0"}}>
              <img src="img/yen.webp" className={`${styles.ratio} card-img-top`} alt="..."></img>
              <div className="card-body">
                <h4 className={`${styles.font_2} card-title`}>트래블 월렛</h4>
              </div>
              <p className="card-text" style={{
                fontFamily: 'Pretendard-Regular'
              }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="www.naver.com" className="btn btn-outline-info m-2 p-md-2 p-4" target="_blank" rel="noreferrer">More Info</a>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="card" style={{padding: "0"}}>
              <img src="img/yen.webp" className={`${styles.ratio} card-img-top`} alt="..."></img>
              <div className="card-body">
                <h4 className={`${styles.font_2} card-title`}>Visit Web Japan</h4>
              </div>
              <p className="card-text" style={{
                fontFamily: 'Pretendard-Regular'
              }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="www.naver.com" className="btn btn-outline-info m-2 p-md-2 p-4" target="_blank" rel="noreferrer">More Info</a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Checklist;
