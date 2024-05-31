import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../styles/RegionCard.module.css';

function RegionCard({regionName, background, url}) {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
      }

    return (
        <div className="col-md-4 mb-5">
            <div className={`${styles.card} card text-bg-dark`} onClick={() => handleClick(`${url}`)}>
                <img src={`${process.env.PUBLIC_URL}/img/${background}`} className="card-img" alt="..."></img>
                <div className={`${styles.cardimgoverlay} card-img-overlay`}>
                    <h3 className="card-title">{regionName}</h3>
                </div>
            </div>
        </div>
    )
}

export default RegionCard;