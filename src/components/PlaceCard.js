import React from "react";
import styles from "../styles/PlaceCard.module.css";

function PlaceCard({placeImg, placeName, placeAlt, placePos, placeUrl}) {
    return (
        <div className="col-md-4 mb-5">
            <div className="card" style={{
                padding: "0"
            }}>
                <img style={{
                    objectPosition: `${placePos}`
                }} src={`${process.env.PUBLIC_URL}/img/${placeImg}`} className={`${styles.ratio} card-img-top`} alt="..."></img>
                <div className="card-body">
                    <h4>{placeName}</h4>
                    <p className="card-text">{placeAlt}</p>
                    <a href={`${placeUrl}`} class="btn btn-outline-info" target="_blank" rel="noreferrer">More Info</a>
                </div>
            </div>
        </div>
    )
}

export default PlaceCard;