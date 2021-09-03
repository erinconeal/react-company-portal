import { expect, test, beforeEach } from "@jest/globals";
import { screen, act, render } from "@testing-library/react";
import App from "../App";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import randomUsers from "./data/randomUsers";
import testClients from "./data/testClients";

beforeEach(() => {
  fetch.resetMocks();
});

test("full app rendering/navigating", async () => {
  fetchMock.mockResponse(JSON.stringify(randomUsers));
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  await act(() => Promise.resolve());
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Employees"
  );
  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/clients/i), leftClick);

  fetchMock.mockResponse(JSON.stringify(testClients));
  await act(() => Promise.resolve());
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Clients"
  );

  await act(async () => {
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
