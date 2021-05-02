import ErrorBoundary from "./ErrorBoundary";
import { Route } from "react-router-dom";

const RouteWithErrorBoundary = (props) => {
  return (
    <ErrorBoundary key={props.location?.pathname}>
      <Route {...props} />
    </ErrorBoundary>
  );
};

export default RouteWithErrorBoundary;
