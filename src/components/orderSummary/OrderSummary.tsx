import React, { useContext } from "react";
import { QuantityContext } from "../../context/quantityContext";
import { TotalContext } from "../../context/totalContext";

export const OrderSummary: React.FC = () => {
  const { sumQuantity } = useContext(QuantityContext);
  const { sumTotal } = useContext(TotalContext);

  return (
    <>
      <div className="ml-24">
        <h1> Order Summary</h1>
        <span>Number of items</span>
        <div className="btns-summary">
          <div className="sumatoria">
            <h3 data-testid="order-summary-total-items">
              Total: {sumQuantity}
            </h3>
            <h2 className="sumaTotalPrecios">$ {sumTotal.toFixed(2)}</h2>
          </div>
          <button className="btn-summary-checkout dark-softBackground white">
            Proceed to Checkout
          </button>
          <button className="btn-summary-shopping noneBackground">
            Continue shopping
          </button>
        </div>
      </div>
    </>
  );
};
