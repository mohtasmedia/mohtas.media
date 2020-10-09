import { wrapRootElement as provider } from "./src/root-wrapper";
import { wrapPageElement as layout } from "./src/root-wrapper";

export const wrapPageElement = layout;
export const wrapRootElement = provider;
