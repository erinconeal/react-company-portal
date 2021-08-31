import { expect, test, beforeEach } from "@jest/globals";
import { Suspense } from "react";
import { screen, act } from "@testing-library/react";
import { StaticRouter } from "react-router-dom";
import randomUsers from "./data/randomUsers";
import customRender from "./customRender";
import Header from "../Header";
import registerIcons from "../fontawesome";

beforeEach(() => {
  registerIcons();
});

test("header has the necessary links and buttons at small screen sizes", async () => {
  const providerProps = {
    value: randomUsers.results[1],
  };
  const { container } = customRender(
    <Suspense fallback={<div>loading...</div>}>
      <StaticRouter>
        <Header />
      </StaticRouter>
    </Suspense>,
    { providerProps }
  );

  await screen.findByLabelText(/profile menu/i);

  expect(screen.getAllByRole("link")).toHaveLength(5);
  expect(screen.getAllByRole("button")).toHaveLength(2);
  expect(screen.getByText(/portal/i)).toBeInTheDocument();
  expect(screen.getByText(/employees/i)).toBeInTheDocument();
  expect(screen.getByText(/clients/i)).toBeInTheDocument();
  expect(screen.getByText(/blog/i)).toBeInTheDocument();
  expect(screen.getByText(/profile/i)).toBeInTheDocument();
  expect(screen.getByAltText("Charlotte Moulin")).toBeInTheDocument();

  await act(async () => {
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
