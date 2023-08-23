import { render } from "@testing-library/react";
import { Picture } from "./Picture";

describe("Picture", () => {
  it("renders the picture component with the correct class", () => {
    const { container } = render(<Picture />);
    const divElement = container.querySelector(".pictureGeneric");
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveClass("grayBackground");
  });
});
