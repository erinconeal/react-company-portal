import { expect, test } from "@jest/globals";
import { screen, act } from "@testing-library/react";
import { StaticRouter } from "react-router-dom";
import Profile from "../Profile";
import randomUsers from "./data/randomUsers";
import customRender from "./customRender";

test("Profile shows value from provider", async () => {
  const providerProps = {
    value: randomUsers.results[1],
  };
  const { container } = customRender(
    <StaticRouter>
      <Profile />
    </StaticRouter>,
    { providerProps }
  );
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Profile"
  );

  // image (src, alt)
  const image = screen.getByRole("img");
  expect(image.src).toBe("https://randomuser.me/api/portraits/women/33.jpg");
  expect(image.alt).toBe("Charlotte Moulin");
  // first, last name
  expect(screen.getByText("Charlotte Moulin")).toBeInTheDocument();
  // email
  expect(screen.getByText("charlotte.moulin@example.com")).toBeInTheDocument();
  // dob
  expect(
    screen.getByText("Born 1979-06-09T22:04:02.978Z (Age 42)")
  ).toBeInTheDocument();
  // address
  expect(screen.getByText("8096 Rue Denfert-Rochereau")).toBeInTheDocument();
  expect(screen.getByText("Monteggio, St. Gallen 4616")).toBeInTheDocument();
  expect(screen.getByText("Switzerland")).toBeInTheDocument();
  // cell phone
  expect(screen.getByText("075 352 22 08")).toBeInTheDocument();
  // home phone
  expect(screen.getByText("075 913 80 70")).toBeInTheDocument();
  // employment length
  expect(screen.getByText("Employed here for 19 years")).toBeInTheDocument();

  await act(async () => {
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
