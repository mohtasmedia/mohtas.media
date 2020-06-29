import React from "react";
import { HamburgerIcon } from "./hamburger";
import { WebDevelopmentIcon } from "./web-development";
import { MobileDevelopmentIcon } from "./mobile-development";
import { DevelopmentConsultingIcon } from "./development-consulting";
import { ProductDesignIcon } from "./product-design";

export const Icon = ({ symbol, className }) => {
  switch (symbol) {
    case "hamburger":
      return <HamburgerIcon className={className} />;
    case "web-development":
      return <WebDevelopmentIcon className={className} />;
    case "mobile-development":
      return <MobileDevelopmentIcon className={className} />;
    case "development-consulting":
      return <DevelopmentConsultingIcon className={className} />;
    case "product-design":
      return <ProductDesignIcon className={className} />;
    default:
      return <span>Unknown icon: {symbol}</span>;
  }
};
