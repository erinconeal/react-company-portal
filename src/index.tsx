import { render } from "react-dom";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById("root")
);
