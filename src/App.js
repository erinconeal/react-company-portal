import { render } from "react-dom";
import { StrictMode, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import RouteWithErrorBoundary from "./RouteWithErrorBoundary";

const Employees = lazy(() => import("./Employees"));
const Clients = lazy(() => import("./Clients"));
const Blog = lazy(() => import("./Blog"));
const Profile = lazy(() => import("./Profile"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<h1>loading route …</h1>}>
        <Router>
          <Header />
          <Switch>
            <RouteWithErrorBoundary
              path="/"
              exact
              render={() => <Employees />}
            />
            <RouteWithErrorBoundary
              path="/profile"
              render={() => <Profile />}
            />
            <RouteWithErrorBoundary path="/blog" render={() => <Blog />} />
            <RouteWithErrorBoundary
              path="/clients"
              render={() => <Clients />}
            />
          </Switch>
        </Router>
      </Suspense>
      <Footer />
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
