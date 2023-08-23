import { render, screen } from "@testing-library/react";
import { FooterLinks } from "./FooterLinks";

describe("FooterLinks", () => {
  it("renders the content as a link", () => {
    render(<FooterLinks content="test" />);
    const linkElement = screen.getByText(/test/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/test");
  });
});
