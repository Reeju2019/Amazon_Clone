import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg"
            alt="Banner"
          />

          <div className="home__row">
            <Product />
            <Product />
          </div>

          <div className="home__row">
            <Product />
            <Product />
            <Product />
          </div>

          <div className="home__row">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
