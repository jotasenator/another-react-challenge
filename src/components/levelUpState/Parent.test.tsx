import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Parent from "./Parent";

describe("Parent", () => {
  it("renders the parent component and increases the total value when the child buttons are clicked", () => {
    const { getAllByText, getByText } = render(<Parent />);
    const buttonElements = getAllByText(/Increase child value 0/i);
    expect(buttonElements).toHaveLength(2);
    fireEvent.click(buttonElements[0]);
    expect(getByText(/Total Value: 1/i)).toBeInTheDocument();
    fireEvent.click(buttonElements[1]);
    expect(getByText(/Total Value: 2/i)).toBeInTheDocument();
  });
});
