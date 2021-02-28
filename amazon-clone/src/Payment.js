import React from "react";
import "./Payment.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import { Helmet } from "react-helmet";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <Helmet>
        <title>Payment Gateway</title>
      </Helmet>

      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} itmes</Link>)
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Road</p>
            <p>West Bengal, India</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__item">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">{/* Strip magic will go */}</div>
          <div className="payment__subtotal">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p>
                    Order Total : <strong>{value}</strong>
                  </p>
                </>
              )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
