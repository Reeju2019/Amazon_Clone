import React, { useEffect, useState } from "react";
import "./Payment.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import { Helmet } from "react-helmet";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "./axios";

function Payment() {
  const stripe = useStripe();
  const elements = useElements();
  const [{ basket, user }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Strip expects the total in a currencies subunits
        url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("THE SECRET IS >>>", clientSecret);

  const handleSubmit = async (event) => {
    // do all the fancy stuff
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("./orders");
      });
  };

  const handleChange = (event) => {
    // do some stuff
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

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
          <div className="payment__details">
            {/* Strip magic will go */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total : {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
