import { render } from "@testing-library/react";
import { OrderSummary } from "./OrderSummary";
import { QuantityContext } from "../../context/quantityContext";
import { TotalContext } from "../../context/totalContext";

describe("OrderSummary", () => {
  it("renders the order summary with the correct content and values", () => {
    const quantityValue = { sumQuantity: 5 };
    const totalValue = { sumTotal: 10.99 };
    const { getByText } = render(
      <QuantityContext.Provider value={quantityValue}>
        <TotalContext.Provider value={totalValue}>
          <OrderSummary />
        </TotalContext.Provider>
      </QuantityContext.Provider>
    );
    const totalQuantityElement = getByText(/Total: 5/i);
    expect(totalQuantityElement).toBeInTheDocument();
    const totalSumElement = getByText(/\$ 10.99/i);
    expect(totalSumElement).toBeInTheDocument();
  });

  it("renders the order summary with the correct buttons", () => {
    const quantityValue = { sumQuantity: 5 };
    const totalValue = { sumTotal: 10.99 };
    const { getByText } = render(
      <QuantityContext.Provider value={quantityValue}>
        <TotalContext.Provider value={totalValue}>
          <OrderSummary />
        </TotalContext.Provider>
      </QuantityContext.Provider>
    );
    const checkoutButton = getByText(/Proceed to Checkout/i);
    expect(checkoutButton).toBeInTheDocument();
    const continueShoppingButton = getByText(/Continue shopping/i);
    expect(continueShoppingButton).toBeInTheDocument();
  });
});
