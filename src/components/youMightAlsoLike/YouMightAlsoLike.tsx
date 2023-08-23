import React from "react";
import { YouMightAlsoLikeChild } from "./YouMayAlsoLikeGenericChild";

export const YouMightAlsoLike: React.FC = () => {
  return (
    <div data-testid="you-might-also-like">
      <YouMightAlsoLikeChild
        subtitle="Unisex Short Sleeve T-Shirt"
        lowPrice="10"
        highPrice="24"
        minimum="24"
      />
    </div>
  );
};
