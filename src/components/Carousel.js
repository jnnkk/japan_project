import React from "react";

function Carousel({carouselImg1, carouselImg2, carouselImg3, carouselPos1, carouselPos2, carouselPos3}) {
    return (
        <div id="carouselExampleIndicators" className="carousel slide m-2 mb-5"  data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner h-100" style={{
                maxHeight: "500px"
            }}>
                <div className="carousel-item active">
                    <img src={`${process.env.PUBLIC_URL}/img/${carouselImg1}`} style={{
                        objectPosition: `${carouselPos1}`,
                        objectFit: "cover",
                    }} className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src={`${process.env.PUBLIC_URL}/img/${carouselImg2}`} style={{
                        objectPosition: `${carouselPos2}`,
                        objectFit: "cover",
                    }} className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src={`${process.env.PUBLIC_URL}/img/${carouselImg3}`} style={{
                        objectPosition: `${carouselPos3}`,
                        objectFit: "cover",
                    }} className="d-block w-100" alt="..."></img>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel;