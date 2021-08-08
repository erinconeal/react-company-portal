import { expect, test, beforeEach, describe } from "@jest/globals";
import { render, screen, waitFor, within } from "@testing-library/react";
import Employees from "../Employees";
import { StaticRouter } from "react-router-dom";
import randomUsers from "../randomUsers";
import fetch from "jest-fetch-mock";
import "@testing-library/jest-dom/extend-expect";

describe("test", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("displays loading skeleton initially", () => {
    render(
      <StaticRouter>
        <Employees />
      </StaticRouter>
    );
    // expect page not to contain any images or links
    let images = screen.queryAllByRole("image");
    expect(images).toHaveLength(0);
    let links = screen.queryAllByRole("link");
    expect(links).toHaveLength(0);
  });
  test("displays a list of employees", async () => {
    const mockAPI = fetch.mockResponse(JSON.stringify(randomUsers));
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

    expect(
      screen.getByTestId("accounting").querySelectorAll("li").length
    ).toEqual(5);

    expect(screen.getByTestId("it").querySelectorAll("li").length).toEqual(5);

    expect(
      screen.getByTestId("marketing").querySelectorAll("li").length
    ).toEqual(5);
  });

  test("a list item contains a given employee's image, name, email and telephone number", () => {
    fetch.mockResponse(JSON.stringify(randomUsers));
    render(
      <StaticRouter>
        <Employees />
      </StaticRouter>
    );
    // use `queryBy` to avoid throwing an error with `getBy`
    const leadershipCard = screen.queryByTestId("leadership");
    expect(leadershipCard).toBeInTheDocument();
    expect(within(leadershipCard).getAllByRole("img")).toBeTruthy();
    expect(
      within(leadershipCard).getByText("Mr Patrick Morris")
    ).toBeInTheDocument();
    expect(
      within(leadershipCard).getByText("patrick.morris@example.com")
    ).toBeInTheDocument();
    expect(
      within(leadershipCard).getByText("(438)-467-8557")
    ).toBeInTheDocument();
  });
});
