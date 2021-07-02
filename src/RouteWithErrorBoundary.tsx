import ErrorBoundary from "./ErrorBoundary";
import { RouteProps } from "react-router-dom";
import { FunctionComponent, ComponentType, Component } from "react";

type RProps = {
  component: ComponentType;
} & RouteProps;

const RouteWithErrorBoundary: FunctionComponent<RProps> = (props: RProps) => (
  <ErrorBoundary>
    <Component {...props} />
  </ErrorBoundary>
);

export default RouteWithErrorBoundary;
