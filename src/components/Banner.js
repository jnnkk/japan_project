import React from 'react';
import { useNavigate } from 'react-router-dom';

function Banner() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  }

  const redirect = (path) => {
    window.location.href = path;
  }

  return (
    <div className='container my-5'>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" onClick={() => handleClick('/tokyo')}>
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">일본여행 체크리스트</h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32"></img>
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em"></svg>
                  <small>Earth</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em"></svg>
                  <small>3d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" onClick={() => redirect('https://www.google.com/travel/flights?hl=ko')}>
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">항공권 검색하기</h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"></img>
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em"></svg>
                  <small>Pakistan</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em"></svg>
                  <small>4d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1" onClick={() => redirect('https://triple.guide/')}>
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">트리플로 여행계획 짜기</h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"></img>
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em"></svg>
                  <small>California</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em"></svg>
                  <small>5d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
