import React from "react";
import styles from "../styles/PlaceCard.module.css";

function FoodCard({foodImg, foodName, foodAlt, foodPos}) {
    return (
        <div className="col-md-4 mb-5">
            <div className="card" style={{
                padding: "0"
            }}>
                <img style={{
                    objectPosition: `${foodPos}`
                }} src={`${process.env.PUBLIC_URL}/img/${foodImg}`} className={`${styles.ratio} card-img-top`} alt="..."></img>
                <div className="card-body">
                    <h4 style={{
                        fontFamily: 'ONE-Mobile-POP'
                    }}>{foodName}</h4>
                    <p className="card-text" style={{
                        fontFamily: 'Pretendard-Regular'
                    }}>{foodAlt}</p>
                </div>
            </div>
        </div>
    )
}

export default FoodCard;