import UserProfileContext from "../UserProfileContext";
import { render } from "@testing-library/react";

/**
 * A custom render to setup providers. Extends regular
 * render options with `providerProps` to allow injecting
 * different scenarios to test with.
 *
 * @see https://testing-library.com/docs/react-testing-library/setup#custom-render
 */
const userProfileContextRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <UserProfileContext.Provider {...providerProps}>
      {ui}
    </UserProfileContext.Provider>,
    renderOptions
  );
};

export default userProfileContextRender;
