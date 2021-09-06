import ErrorBoundary from "./ErrorBoundary";
import { RouteProps, Route } from "react-router-dom";
import { FunctionComponent, useEffect } from "react";

interface IPageProps extends RouteProps {
  title: string;
}

const RouteWithErrorBoundary: FunctionComponent<IPageProps> = (props) => {
  useEffect(() => {
    document.title = `Company Portal | ${props.title}` || "Company Portal";
  }, [props.title]);

  return (
    <ErrorBoundary key={props.location?.pathname}>
      <Route {...props} />
    </ErrorBoundary>
  );
};

export default RouteWithErrorBoundary;
