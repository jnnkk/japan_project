import React from 'react';

function CityHero({cityName, cityOverview, cityImg}) {
    return (
        <>
            <div className="hero user-select-none" style={{backgroundImage: `url(img/${cityImg})`}}>
                <h1>{cityName}</h1>
                <p>{cityOverview}</p>
            </div>
        </>
    )
}

export default CityHero;