import { expect, test, beforeEach } from "@jest/globals";
import { render, screen, waitFor } from "@testing-library/react";
import Employees from "../Employees";
import { StaticRouter } from "react-router-dom";
import randomUsers from "../randomUsers";
import fetch from "jest-fetch-mock";

beforeEach(() => {
  fetch.resetMocks();
});
test("displays a list of 2 employees in the Leadership card", async () => {
  const mockAPI = fetch.mockResponseOnce(JSON.stringify(randomUsers));
  render(
    <StaticRouter>
      <Employees />
    </StaticRouter>
  );

  // Wait until the callback does not throw an error. In this case, that means
  // it'll wait until the mock function has been called once.
  await waitFor(() => expect(mockAPI).toHaveBeenCalledTimes(1));

  expect(
    screen.getByTestId("leadership").querySelectorAll("li").length
  ).toEqual(2);
});
