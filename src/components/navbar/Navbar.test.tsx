import { render } from "@testing-library/react";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  it("renders the navbar with the correct content and links", () => {
    const { getByText } = render(<Navbar />);
    const logoElement = getByText(/LOGO/i);
    expect(logoElement).toBeInTheDocument();
    const allProductsLink = getByText(/All products/i);
    expect(allProductsLink).toBeInTheDocument();
    expect(allProductsLink).toHaveAttribute("href", "/All products");
    const packagingLink = getByText(/Packaging/i);
    expect(packagingLink).toBeInTheDocument();
    expect(packagingLink).toHaveAttribute("href", "/Packaging");
  });

  it("renders the navbar with the correct search input", () => {
    const { getByPlaceholderText } = render(<Navbar />);
    const searchInputElement = getByPlaceholderText(/Search products/i);
    expect(searchInputElement).toBeInTheDocument();
  });

  it("renders the navbar with the correct sign in and cart links", () => {
    const { getByText } = render(<Navbar />);
    const signInLink = getByText(/Sign in/i);
    expect(signInLink).toBeInTheDocument();
    expect(signInLink).toHaveAttribute("href", "/signin");
    const cartLink = getByText(/Cart/i);
    expect(cartLink).toBeInTheDocument();
    expect(cartLink).toHaveAttribute("href", "/cart");
  });
});
