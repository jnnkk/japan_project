import React from 'react';

function CityHero({cityName, cityOverview, cityImg}) {
    return (
        <>
            <div className="hero user-select-none" style={{
                backgroundImage: `url(img/${cityImg})`,
                textShadow: "0 0 5px black"
                }}>
                <h1>{cityName}</h1>
                <p>{cityOverview}</p>
            </div>
        </>
    )
}

export default CityHero;