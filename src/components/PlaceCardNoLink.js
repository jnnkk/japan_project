import React from "react";
import styles from "../styles/PlaceCard.module.css";

function PlaceCardNoLink({placeImg, placeName, placeAlt, placePos}) {
    return (
        <div className="col-md-4 mb-5">
            <div className="card" style={{
                padding: "0"
            }}>
                <img style={{
                    objectPosition: `${placePos}`
                }} src={`${process.env.PUBLIC_URL}/img/${placeImg}`} className={`${styles.ratio} card-img-top`} alt="..."></img>
                <div className="card-body">
                    <h4 style={{
                        fontFamily: 'JalnanGothic'
                    }}>{placeName}</h4>
                    <p className="card-text" style={{
                        fontFamily: 'Pretendard-Regular'
                    }}>{placeAlt}</p>
                </div>
            </div>
        </div>
    )
}

export default PlaceCardNoLink;