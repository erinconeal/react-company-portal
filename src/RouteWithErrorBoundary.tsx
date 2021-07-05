import ErrorBoundary from "./ErrorBoundary";
import { RouteProps, Route } from "react-router-dom";
import { FunctionComponent } from "react";

const RouteWithErrorBoundary: FunctionComponent<RouteProps> = (props) => (
  <ErrorBoundary key={props.location?.pathname}>
    <Route {...props} />
  </ErrorBoundary>
);

export default RouteWithErrorBoundary;
