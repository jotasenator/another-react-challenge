import { getByTestId, render } from "@testing-library/react";
import App from "./App";
import { QuantityProvider } from "./context/quantityContext";
import { TotalProvider } from "./context/totalContext";

describe("App", () => {
  it("renders correctly GenericItem name", () => {
    const { getByText, getAllByTestId } = render(
      <QuantityProvider>
        <TotalProvider>
          <App />
        </TotalProvider>
      </QuantityProvider>
    );

    expect(getByText(/My Christmas pack/i)).toBeInTheDocument();
    expect(getByText(/Basic T-Shirt/i)).toBeInTheDocument();
    expect(getByText(/Woman bottle/i)).toBeInTheDocument();
    expect(getByText(/You Might Also Like/i)).toBeInTheDocument();
    expect(getAllByTestId("generic-item")).toHaveLength(3);
  });

  it("renders Navbar and Footer components", () => {
    const { getByText } = render(
      <QuantityProvider>
        <TotalProvider>
          <App />
        </TotalProvider>
      </QuantityProvider>
    );

    // expect(getByText(/Home/i)).toBeInTheDocument();
    expect(getByText(/About/i)).toBeInTheDocument();
    expect(getByText(/Contact/i)).toBeInTheDocument();
    expect(getByText(/Privacy/i)).toBeInTheDocument();
    expect(getByText(/Terms of Use/i)).toBeInTheDocument();
  });

  it("renders OrderSummary component", () => {
    const { getByText, getByTestId } = render(
      <QuantityProvider>
        <TotalProvider>
          <App />
        </TotalProvider>
      </QuantityProvider>
    );

    expect(getByText(/Order Summary/i)).toBeInTheDocument();
    expect(getByText(/Number of items/i)).toBeInTheDocument();
    expect(getByTestId("order-summary-total-items")).toBeInTheDocument();
    expect(getByTestId("order-summary-total-items")).toHaveTextContent("Total");
    expect(getByText(/Proceed to Checkout/i)).toBeInTheDocument();
    expect(getByText(/Continue shopping/i)).toBeInTheDocument();
  });

  it("renders YouMightAlsoLike components", () => {
    const { getByText, getAllByTestId } = render(
      <QuantityProvider>
        <TotalProvider>
          <App />
        </TotalProvider>
      </QuantityProvider>
    );

    expect(getByText(/You Might Also Like/i)).toBeInTheDocument();
    expect(getAllByTestId("you-might-also-like")).toHaveLength(4);
  });
});
