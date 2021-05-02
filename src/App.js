import { render } from "react-dom";
import { StrictMode } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Employees from "./Employees";
import Clients from "./Clients";
import Blog from "./Blog";
import Profile from "./Profile";
import Header from "./Header";
import Footer from "./Footer";
import RouteWithErrorBoundary from "./RouteWithErrorBoundary";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <RouteWithErrorBoundary path="/" exact render={() => <Employees />} />
          <RouteWithErrorBoundary path="/profile" render={() => <Profile />} />
          <RouteWithErrorBoundary path="/blog" render={() => <Blog />} />
          <RouteWithErrorBoundary path="/clients" render={() => <Clients />} />
        </Switch>
      </Router>
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
