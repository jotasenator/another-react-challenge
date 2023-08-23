import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Child from "./Child";

describe("Child", () => {
  it("renders the child component and increases the value when the button is clicked", () => {
    const mockPassingValueToParent = jest.fn();
    const { getByText } = render(
      <Child passingValueToParent={mockPassingValueToParent} />
    );
    const buttonElement = getByText(/Increase child value 0/i);
    expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
    expect(getByText(/Increase child value 1/i)).toBeInTheDocument();
    expect(mockPassingValueToParent).toHaveBeenCalledWith(1);
  });
});
