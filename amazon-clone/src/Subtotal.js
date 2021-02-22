import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="subtotal">
      <h1>Sub-Total:</h1>
      <CurrencyFormat />
    </div>
  );
}

export default Subtotal;
