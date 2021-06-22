import { render } from "react-dom";
import {
  StrictMode,
  lazy,
  Suspense,
  createContext,
  useState,
  useEffect,
} from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import RouteWithErrorBoundary from "./RouteWithErrorBoundary";
import "./fontawesome";

const Employees = lazy(() => import("./Employees"));
const Clients = lazy(() => import("./Clients"));
const Blog = lazy(() => import("./Blog"));
const Profile = lazy(() => import("./Profile"));

export const UserProfileContext = createContext({});

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    requestProfile();
  }, []);

  async function requestProfile() {
    try {
      // from https://randomuser.me/documentation
      const res = await fetch("https://randomuser.me/api/?results=1");
      const json = await res.json();
      setCurrentUser(json.results[0]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Suspense fallback={<h1>loading route …</h1>}>
        <Router>
          <UserProfileContext.Provider value={currentUser}>
            <Header />
          </UserProfileContext.Provider>
          <main className="container mx-auto min-h-screen prose">
            <Switch>
              <RouteWithErrorBoundary
                path="/"
                exact
                render={() => <Employees />}
              />
              <RouteWithErrorBoundary path="/blog" render={() => <Blog />} />
              <RouteWithErrorBoundary
                path="/clients"
                render={() => <Clients />}
              />
              <UserProfileContext.Provider value={currentUser}>
                <RouteWithErrorBoundary
                  path="/profile"
                  render={() => <Profile />}
                />
              </UserProfileContext.Provider>
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
