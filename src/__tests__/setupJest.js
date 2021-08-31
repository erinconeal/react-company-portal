import "@testing-library/jest-dom";

import { enableFetchMocks } from "jest-fetch-mock";

enableFetchMocks();

const { axe, toHaveNoViolations } = require("jest-axe");

expect.extend(toHaveNoViolations);

global.axe = axe;

Object.defineProperty(window, "matchMedia", {
  value: () => {
    return {
      matches: false,
      addEventListener: () => {},
      removeEventListener: () => {},
    };
  },
});
