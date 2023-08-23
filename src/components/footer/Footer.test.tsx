import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders the footer with the correct content", () => {
    render(<Footer />);
    const logoElement = screen.getByText(/LOGO/i);
    expect(logoElement).toBeInTheDocument();
    const companyInfoElement = screen.getByText(/Our company/i);
    expect(companyInfoElement).toBeInTheDocument();
    const helpInfoElement = screen.getByText(/How can we help/i);
    expect(helpInfoElement).toBeInTheDocument();
    const informationElement = screen.getByText(/Information/i);
    expect(informationElement).toBeInTheDocument();
  });
});
