import "@testing-library/jest-dom";

import { enableFetchMocks } from "jest-fetch-mock";

enableFetchMocks();

Object.defineProperty(window, "matchMedia", {
  value: () => {
    return {
      matches: false,
      addEventListener: () => {},
      removeEventListener: () => {},
    };
  },
});
