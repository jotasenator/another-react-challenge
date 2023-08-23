import React, { useContext } from "react";
import { render, fireEvent } from "@testing-library/react";
import { TotalContext, TotalProvider } from "./totalContext";

describe("TotalProvider", () => {
  it("renders the provider and provides the correct context values", () => {
    const TestComponent = () => {
      const { sumTotal, setSumTotal } = useContext(TotalContext);
      return (
        <>
          <div>Sum Total: {sumTotal}</div>
          <button onClick={() => setSumTotal(5)}>Set Total</button>
        </>
      );
    };
    const { getByText } = render(
      <TotalProvider>
        <TestComponent />
      </TotalProvider>
    );
    expect(getByText(/Sum Total: 0/i)).toBeInTheDocument();
    fireEvent.click(getByText(/Set Total/i));
    expect(getByText(/Sum Total: 5/i)).toBeInTheDocument();
  });
});
