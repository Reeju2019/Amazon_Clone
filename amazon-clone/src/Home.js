import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./Home.css";
import { Helmet } from "react-helmet";
import Footer from "./Footer";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div className="home">
      <Helmet>
        <title>RAC | Home</title>
      </Helmet>
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg"
          alt="Banner"
        />

        <div className="home__row">
          <Product
            id="567567"
            title="The Old Man and the Sea"
            price={9.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91oNxcEYXFL.jpg"
            rating={5}
          />
          <Product
            id="678678"
            title="Samsung 810 L Frost Free Side-by-Side Refrigerator(RF28N9780SG/TL, Black, Inverter Compressor)"
            price={870.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71O31clz6mL._SL1500_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="123123"
            title="Sennheiser HD 800 Over-Ear Circumaural Dynamic Premiere Headphone (Black)"
            price={1247.5}
            image="https://images-na.ssl-images-amazon.com/images/I/81SEwPSrTYS._SY355_.jpg"
            rating={4}
          />
          <Product
            id="234234"
            title="New Apple iPhone 12 Pro Max (128GB) - Graphite"
            price={699.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71XXJC7V8tL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="345345"
            title="Dymatize Nutrition ISO 100 Whey Protein Isolate Powder - 5lbs (Gourmet Chocolate)"
            price={74.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81OQTLLASAL._SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="456456"
            title="Samsung 48.9inch Ultra-wide Curved Gaming Monitor"
            price={1499.99}
            image="https://azcd.harveynorman.com.au/media/catalog/product/h/g/hg90_edit_4.png"
            rating={5}
          />
        </div>
        <div className="home__backToTop">
          {isVisible && (
            <div onClick={scrollToTop}>
              <button className="home__backToTopButton">Back To Top</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
