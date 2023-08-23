import { render, fireEvent } from "@testing-library/react";
import { QuantityProvider } from "../../context/quantityContext";
import { TotalProvider } from "../../context/totalContext";
import { GenericItem } from "./GenericItem";

describe("GenericItem", () => {
  it("updates deleteStyle state correctly", () => {
    const { getByText } = render(
      <QuantityProvider>
        <TotalProvider>
          <GenericItem
            name="Test Item"
            packInfo={["Pack Info 1", "Pack Info 2"]}
            packDetails={["Pack Detail 1", "Pack Detail 2"]}
            editRemove={true}
            remove={false}
            price="10"
          />
        </TotalProvider>
      </QuantityProvider>
    );

    const removeButton = getByText("Remove");
    fireEvent.click(removeButton);
    expect(getByText("Test Item")).not.toBeVisible();
  });

  it("updates quantity and total state correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <QuantityProvider>
        <TotalProvider>
          <GenericItem
            name="Test Item"
            packInfo={["Pack Info 1", "Pack Info 2"]}
            packDetails={["Pack Detail 1", "Pack Detail 2"]}
            editRemove={true}
            remove={false}
            price="10"
          />
        </TotalProvider>
      </QuantityProvider>
    );

    const quantityInput = getByPlaceholderText("0");
    fireEvent.change(quantityInput, { target: { value: "5" } });
    expect(getByText("Total: $50")).toBeInTheDocument();
  });

  it("updates QuantityContext and TotalContext correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <QuantityProvider>
        <TotalProvider>
          <GenericItem
            name="Test Item"
            packInfo={["Pack Info 1", "Pack Info 2"]}
            packDetails={["Pack Detail 1", "Pack Detail 2"]}
            editRemove={true}
            remove={false}
            price="10"
          />
        </TotalProvider>
      </QuantityProvider>
    );

    const quantityInput = getByPlaceholderText("0");
    fireEvent.change(quantityInput, { target: { value: "5" } });
    expect(getByText("Total: $50")).toBeInTheDocument();
  });

  it("handleRemove function works correctly", () => {
    const { getByText } = render(
      <QuantityProvider>
        <TotalProvider>
          <GenericItem
            name="Test Item"
            packInfo={["Pack Info 1", "Pack Info 2"]}
            packDetails={["Pack Detail 1", "Pack Detail 2"]}
            editRemove={true}
            remove={false}
            price="10"
          />
        </TotalProvider>
      </QuantityProvider>
    );

    const removeButton = getByText("Remove");
    fireEvent.click(removeButton);
    expect(getByText("Test Item")).not.toBeVisible();
  });

  it("handleEditPack function works correctly", () => {
    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
    const { getByText } = render(
      <QuantityProvider>
        <TotalProvider>
          <GenericItem
            name="Test Item"
            packInfo={["Pack Info 1", "Pack Info 2"]}
            packDetails={["Pack Detail 1", "Pack Detail 2"]}
            editRemove={true}
            remove={false}
            price="10"
          />
        </TotalProvider>
      </QuantityProvider>
    );

    const editPackButton = getByText("Edit pack");
    fireEvent.click(editPackButton);
    expect(alertSpy).toHaveBeenCalledWith(
      "Learn React.js if you want to Edit Pack :)"
    );
    alertSpy.mockRestore();
  });

  it("useEffect hook updates total and context values correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <QuantityProvider>
        <TotalProvider>
          <GenericItem
            name="Test Item"
            packInfo={["Pack Info 1", "Pack Info 2"]}
            packDetails={["Pack Detail 1", "Pack Detail 2"]}
            editRemove={true}
            remove={false}
            price="10"
          />
        </TotalProvider>
      </QuantityProvider>
    );

    const quantityInput = getByPlaceholderText("0");
    fireEvent.change(quantityInput, { target: { value: "5" } });
    expect(getByText("Total: $50")).toBeInTheDocument();
  });

  it("renders correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <QuantityProvider>
        <TotalProvider>
          <GenericItem
            name="Test Item"
            packInfo={["Pack Info 1", "Pack Info 2"]}
            packDetails={["Pack Detail 1", "Pack Detail 2"]}
            editRemove={true}
            remove={false}
            price="10"
          />
        </TotalProvider>
      </QuantityProvider>
    );

    expect(getByText(/Test Item/i)).toBeInTheDocument();
    expect(getByText(/Pack Info 1/i)).toBeInTheDocument();
    expect(getByText(/Pack Detail 1/i)).toBeInTheDocument();
    expect(getByText(/Pack Info 2/i)).toBeInTheDocument();
    expect(getByText(/Pack Detail 2/i)).toBeInTheDocument();
    expect(getByPlaceholderText("0")).toBeInTheDocument();
    expect(getByText("$10")).toBeInTheDocument();
    expect(getByText("Total: $0")).toBeInTheDocument();
    expect(getByText("Edit pack")).toBeInTheDocument();
    expect(getByText("Remove")).toBeInTheDocument();
  });

  it("component without pack options renders correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <QuantityProvider>
        <TotalProvider>
          <GenericItem
            name="Test Item"
            editRemove={false}
            remove={true}
            price="10"
          />
        </TotalProvider>
      </QuantityProvider>
    );

    expect(getByText("Test Item")).toBeInTheDocument();
    expect(getByPlaceholderText("0")).toBeInTheDocument();
    expect(getByText("$10")).toBeInTheDocument();
    expect(getByText("Total: $0")).toBeInTheDocument();
    expect(getByText("Remove")).toBeInTheDocument();
  });
});
