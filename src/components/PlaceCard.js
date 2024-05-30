import React from "react";

function PlaceCard({placeImg, placeName, placeAlt}) {
    return (
        <div className="col-md-4 mb-5">
            <div className="card" style={{
                padding: "0"
            }}>
                <img src={`${process.env.PUBLIC_URL}/img/${placeImg}`} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h4>{placeName}</h4>
                    <p className="card-text">{placeAlt}</p>
                </div>
            </div>
        </div>
    )
}

export default PlaceCard;