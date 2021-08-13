import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { StaticRouter } from "react-router-dom";
import Profile from "../Profile";
import UserProfileContext from "../UserProfileContext";
import randomUsers from "./data/randomUsers";

/**
 * A custom render to setup providers. Extends regular
 * render options with `providerProps` to allow injecting
 * different scenarios to test with.
 *
 * @see https://testing-library.com/docs/react-testing-library/setup#custom-render
 */
const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <UserProfileContext.Provider {...providerProps}>
      {ui}
    </UserProfileContext.Provider>,
    renderOptions
  );
};

test("Profile shows value from provider", () => {
  const providerProps = {
    value: randomUsers.results[1],
  };
  customRender(
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
});
