import { render } from "@testing-library/react";
import { NavbarLinks } from "./NavbarLinks";

describe("NavbarLinks", () => {
  it("renders the navbar link with the correct content and href", () => {
    const { getByText } = render(<NavbarLinks content="test" />);
    const linkElement = getByText(/test/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/test");
  });
});
