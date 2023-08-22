import React from "react";
import Child from "./Child";

const Parent = () => {
  const [totalValue, setTotalValue] = React.useState(0);

  const handleChildValueChange = (value: number) => {
    setTotalValue((prev) => prev + value);
  };
  return (
    <div>
      Parent
      <Child passingValueToParent={handleChildValueChange} />
      <Child passingValueToParent={handleChildValueChange} />
      Total Value: {totalValue}
    </div>
  );
};

export default Parent;
