import { render } from "react-dom";
import { StrictMode, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import RouteWithErrorBoundary from "./RouteWithErrorBoundary";
import "./fontawesome";

const Employees = lazy(() => import("./Employees"));
const Clients = lazy(() => import("./Clients"));
const Blog = lazy(() => import("./Blog"));
const Profile = lazy(() => import("./Profile"));

const App = () => {
  return (
    <>
      <Suspense fallback={<h1>loading route …</h1>}>
        <Router>
          <Header />
          <main className="container mx-auto min-h-screen prose">
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
          </main>
        </Router>
      </Suspense>
      <Footer />
    </>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
