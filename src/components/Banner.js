import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Banner.module.css';

const shadow = {
  textShadow: '0 0 3px black, 0 0 3px grey, 0 0 3px black'
}

function Banner() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  }

  const redirect = (path) => {
    window.open(path);
  }

  return (
    <div className='container my-5'>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <div className={`${styles.card} card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg`} style={{
            backgroundImage: "url(img/checklist.webp)",
            backgroundPosition: "50% 50%",
            backgroundSize: "150%"
          }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 user-select-none" onClick={() => handleClick('/tokyo')}>
              <h3 className={`${styles.h3} pt-5 mt-5 mb-5 display-6 lh-base fw-bold text-center`} style={shadow}>일본여행<br/>체크리스트</h3>
            </div>
          </div>
        </div>

        <div className="col">
          <div className={`${styles.card} card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg`} style={{
            backgroundImage: "url(img/googleflight.png)",
            backgroundPosition: "40% 50%",
            backgroundSize: "150%"
          }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 user-select-none" onClick={() => redirect('https://www.google.com/travel/flights?hl=ko')}>
              <h3 className={`${styles.h3} pt-5 mt-5 mb-5 display-6 lh-base fw-bold text-center`} style={shadow}>항공권 검색하기</h3>
            </div>
          </div>
        </div>

        <div className="col">
          <div className={`${styles.card} card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg`} style={{
            backgroundImage: "url(img/triple.png)",
            backgroundPosition: "50% 50%",
            backgroundSize: "80%"
          }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 user-select-none" onClick={() => redirect('https://triple.guide/')}>
              <h3 className={`${styles.h3} pt-5 mt-5 mb-5 display-6 lh-base fw-bold text-center`} style={shadow}>트리플로<br/>여행계획 짜기</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
