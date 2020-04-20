import React from "react";
import HamburgerIcon from "./hamburger";

const Icon = ({ symbol }) => {
  switch (symbol) {
    case "hamburger":
      return <HamburgerIcon />;
    default:
      return <span>Unknown icon: {symbol}</span>;
  }
};

export default Icon;
