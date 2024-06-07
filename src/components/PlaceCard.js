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
                </div>
                <a href={`${placeUrl}`} className="btn btn-outline-info m-2 p-md-2 p-4" target="_blank" rel="noreferrer">More Info</a>
            </div>
        </div>
    )
}

export default PlaceCard;