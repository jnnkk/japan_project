import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import RegionCard from '../components/RegionCard';



function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <div className="container my-5 user-select-none">
        <h2>Popular Destinations</h2>
        <p>Explore the most popular travel destinations in Japan.</p>
        <div className="row">
          <RegionCard regionName={"Tokyo"} background={"tokyo_main.jpg"} url={"/tokyo"} />
          <RegionCard regionName={"Osaka"} background={"osaka_main.jpg"} url={"/osaka"} />
          <RegionCard regionName={"Fukuoka"} background={"fukuoka_main.jpg"} url={"/fukuoka"} />
          <RegionCard regionName={"Yufuin"} background={"yufuin_main.jpg"} url={"/yufuin"} />
          <RegionCard regionName={"Kyoto"} background={"kyoto_main.jpg"} url={"/kyoto"} />
          <RegionCard regionName={"Kumamoto"} background={"kumamoto_main.jpg"} url={"/kumamoto"} />
          <RegionCard regionName={"Nagasaki"} background={"nagasaki_main.jpg"} url={"/nagasaki"} />
          <RegionCard regionName={"Saporo"} background={"saporo_main.jpg"} url={"/saporo"} />
          <RegionCard regionName={"Okinawa"} background={"okinawa_main.jpg"} url={"/okinawa"} />
        </div>
      </div>
    </>
  );
}

export default Home;
