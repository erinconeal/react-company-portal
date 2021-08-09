import { expect, test, beforeEach } from "@jest/globals";
import { render, screen, waitFor, within } from "@testing-library/react";
import Employees from "../Employees";
import { StaticRouter } from "react-router-dom";
import randomUsers from "../randomUsers";

beforeEach(() => {
  fetch.resetMocks();
});

test("displays loading skeleton initially", () => {
  render(
    <StaticRouter>
      <Employees />
    </StaticRouter>
  );
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Employees"
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
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Employees"
  );

  const leadershipCard = screen.queryByTestId("leadership");
  expect(leadershipCard).toBeInTheDocument();
  expect(within(leadershipCard).getAllByRole("listitem").length).toEqual(2);
  expect(
    within(leadershipCard).getByRole("heading", { level: 2 })
  ).toHaveTextContent("Leadership Team");

  const accountingCard = screen.queryByTestId("accounting");
  expect(accountingCard).toBeInTheDocument();
  expect(within(accountingCard).getAllByRole("listitem").length).toEqual(5);
  expect(
    within(accountingCard).getByRole("heading", { level: 2 })
  ).toHaveTextContent("Accounting");

  const itCard = screen.queryByTestId("it");
  expect(itCard).toBeInTheDocument();
  expect(within(itCard).getAllByRole("listitem").length).toEqual(5);
  expect(within(itCard).getByRole("heading", { level: 2 })).toHaveTextContent(
    "IT"
  );

  const marketingCard = screen.queryByTestId("marketing");
  expect(marketingCard).toBeInTheDocument();
  expect(within(marketingCard).getAllByRole("listitem").length).toEqual(5);
  expect(
    within(marketingCard).getByRole("heading", { level: 2 })
  ).toHaveTextContent("Marketing");
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
