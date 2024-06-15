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
      <CityHero cityName={"체 크 리 스 트"} cityOverview={""} cityImg={"check.webp"}/>
      <div className="container my-5">
        <h1 style={{
          fontFamily: 'TheJamsil5Bold'
        }}>체크리스트</h1>
        <p className="mb-5">여행을 떠나기전... 뭐가 필요하지?</p>

        <div className="row justify-content-center text-center">
          <div className="col-md-4 mb-5">
            <div className="card" style={{padding: "0"}}>
              <img src="img/checklist/yen.webp" className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h4 className={`${styles.font_2} card-title`}>환 전</h4>
                <p className="card-text fs-5" style={{
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
              <img src="img/checklist/plug.webp" className={`${styles.ratio} card-img-top`} alt="..."></img>
              <div className="card-body">
                <h4 className={`${styles.font_2} card-title`}>전 기</h4>
                <p className="card-text mb-5 fs-5" style={{
                  fontFamily: 'Pretendard-Regular'
                }}>일본은 우리나라와 다르게 100v를 쓴다는 사실!!<br></br>알고 계셨나요?<br></br>그러기 때문에 '돼지코' 어댑터나<br></br>멀티 어댑터를 미리 준비하자!</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="card" style={{padding: "0"}}>
              <img src="img/checklist/passport.webp" className={`${styles.ratio} card-img-top`} alt="..."></img>
              <div className="card-body">
                <h4 className={`${styles.font_2} card-title`}>여 권</h4>
                <p className="card-text mb-5 fs-5" style={{
                  fontFamily: 'Pretendard-Regular'
                }}>여권의 기간이 1개월 이상 남았는지 확인하자!<br></br><br></br>또한 여행 중 여권을 잃어버릴 수도 있으니<br></br>여권 사본과 여권 사진 2매는 챙기는 것을 추천!!</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="card" style={{padding: "0"}}>
              <img src="img/checklist/wifi.webp" className={`${styles.ratio} card-img-top`} alt="..."></img>
              <div className="card-body">
                <h4 className={`${styles.font_2} card-title`}>유심, 포켓 와이파이</h4>
                <p className="card-text mb-5 fs-5" style={{
                  fontFamily: 'Pretendard-Regular'
                }}>요즘 해외여행엔 필수인 인터넷!<br></br>포켓 와이파이를 받을지<br></br>로밍을 할지 듀얼심을 할지 고려해보고 가자!<br></br><br></br>두 명 이상이 여행한다면 포켓 와이파이를 추천!</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="card" style={{padding: "0"}}>
              <img src="img/checklist/travelwallet.jpg" className={`${styles.ratio} card-img-top`} alt="..."></img>
              <div className="card-body">
                <h4 className={`${styles.font_2} card-title`}>트래블 월렛</h4>
                <p className="card-text fs-5" style={{
                  fontFamily: 'Pretendard-Regular'
                }}>카드 한 장에 다양한 통화를<br></br>앱으로 충전할 수 있는 트래블 월렛 앱!<br></br>힘들게 현금으로 환전할 필요 없이<br></br>카드가 가능하면 간단히 환전 가능!<br></br>요즘 여행 가는데 이 앱을 쓰면 편하다<br></br><br></br>트래블 월렛 광고 아님...</p>
              </div>
              <a href="https://www.travel-wallet.com/" className="btn btn-outline-info m-2 p-md-2 p-4" target="_blank" rel="noreferrer">More Info</a>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="card" style={{padding: "0"}}>
              <img src="img/checklist/VJW.webp" className={`${styles.ratio} card-img-top`} alt="..."></img>
              <div className="card-body">
                <h4 className={`${styles.font_2} card-title`}>Visit Japan Web</h4>
                <p className="card-text fs-5" style={{
                  fontFamily: 'Pretendard-Regular'
                }}>일본의 입국 수속 온라인 서비스!<br></br>입국 심사 정보, 세관 신고까지<br></br>미리 등록이 가능해<br></br>기내에서 입국·세관 신고서를<br></br>쓰지 않아도 된다!<br></br><br></br>이 앱으로 미리 등록만 하면<br></br>빠르게 입국할 수 있다!!</p>
              </div>
              <a href="https://www.vjw.digital.go.jp/main/#/vjwplo001" className="btn btn-outline-info m-2 p-md-2 p-4" target="_blank" rel="noreferrer">More Info</a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Checklist;
