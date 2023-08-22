import React from "react";

interface ChildProp {
  passingValueToParent?: (value: number) => void;
}

const Child = ({ passingValueToParent }: ChildProp) => {
  const [childValue, setChildValue] = React.useState(0);

  const handleIncreaseChildValue = () => {
    setChildValue((prev) => prev + 1);
    if (passingValueToParent) {
      passingValueToParent(1);
    }
  };
  return (
    <div style={{ border: "1px solid red", marginTop: "5px", padding: "10px" }}>
      Child
      <button onClick={handleIncreaseChildValue}>
        Increase child value {childValue}
      </button>
    </div>
  );
};

export default Child;
