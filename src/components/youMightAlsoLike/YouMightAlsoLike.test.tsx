import { render } from "@testing-library/react";
import { YouMightAlsoLike } from "./YouMightAlsoLike";

describe("YouMightAlsoLike", () => {
  it("renders the component with the correct content and values", () => {
    const { getByText } = render(<YouMightAlsoLike />);
    const subtitleElement = getByText(/Unisex Short Sleeve T-Shirt/i);
    expect(subtitleElement).toBeInTheDocument();
    const priceRangeElement = getByText(/\$10-\$24/i);
    expect(priceRangeElement).toBeInTheDocument();
    const minimumElement = getByText(/Minimum: 24/i);
    expect(minimumElement).toBeInTheDocument();
  });
});
