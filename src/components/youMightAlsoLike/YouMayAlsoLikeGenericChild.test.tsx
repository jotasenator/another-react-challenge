import { render } from "@testing-library/react";
import { YouMightAlsoLikeChild } from "./YouMayAlsoLikeGenericChild";

describe("YouMightAlsoLikeChild", () => {
  it("renders the component with the correct content and values", () => {
    const { getByText } = render(
      <YouMightAlsoLikeChild
        subtitle="test"
        lowPrice="1.99"
        highPrice="5.99"
        minimum="10"
      />
    );
    const subtitleElement = getByText(/test/i);
    expect(subtitleElement).toBeInTheDocument();
    const priceRangeElement = getByText(/\$1.99-\$5.99/i);
    expect(priceRangeElement).toBeInTheDocument();
    const minimumElement = getByText(/Minimum: 10/i);
    expect(minimumElement).toBeInTheDocument();
  });
});
