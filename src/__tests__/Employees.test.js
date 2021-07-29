/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { expect, test } from "@jest/globals";
import { render, screen, waitFor } from "@testing-library/react";
import Employees from "../Employees";
import { StaticRouter } from "react-router-dom";
import randomUsers from "../randomUsers";
test("displays a list of employees", async () => {
  render(
    <StaticRouter>
      <Employees />
    </StaticRouter>
  );
  fetch.mockResponseOnce(
    JSON.stringify({
      results: randomUsers,
    })
  );

  const div = await waitFor(() => screen.getByTestId("leadership"));
  console.log("div", div);
});
