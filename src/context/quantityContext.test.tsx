import React, { useContext } from "react";
import { render, fireEvent } from "@testing-library/react";
import { QuantityContext, QuantityProvider } from "./quantityContext";

describe("QuantityProvider", () => {
  it("renders the provider and provides the correct context values", () => {
    const TestComponent = () => {
      const { sumQuantity, setSumQuantity } = useContext(QuantityContext);
      return (
        <>
          <div>Sum Quantity: {sumQuantity}</div>
          <button onClick={() => setSumQuantity(5)}>Set Quantity</button>
        </>
      );
    };
    const { getByText } = render(
      <QuantityProvider>
        <TestComponent />
      </QuantityProvider>
    );
    expect(getByText(/Sum Quantity: 0/i)).toBeInTheDocument();
    fireEvent.click(getByText(/Set Quantity/i));
    expect(getByText(/Sum Quantity: 5/i)).toBeInTheDocument();
  });
});
