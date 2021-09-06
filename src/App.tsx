import { lazy, Suspense, useState, useEffect, FunctionComponent } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import RouteWithErrorBoundary from "./RouteWithErrorBoundary";
import { RandomUserAPIResponse, CurrentUser } from "./APIResponsesTypes";
import registerIcons from "./fontawesome";
registerIcons();
import UserProfileContext from "./UserProfileContext";

const Employees = lazy(() => import("./Employees"));
const Clients = lazy(() => import("./Clients"));
const Blog = lazy(() => import("./Blog"));
const Profile = lazy(() => import("./Profile"));

const App: FunctionComponent = () => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  useEffect(() => {
    void requestProfile();
  }, []);

  async function requestProfile() {
    try {
      // from https://randomuser.me/documentation
      const res = await fetch("https://randomuser.me/api/?results=1");
      const json = (await res.json()) as RandomUserAPIResponse;
      setCurrentUser(json.results[0]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Suspense fallback={<h1>Loading…</h1>}>
        <Router>
          <UserProfileContext.Provider value={currentUser}>
            <Header />
          </UserProfileContext.Provider>
          <main className="container mx-auto min-h-screen prose">
            <Suspense fallback={<h1>Loading page...</h1>}>
              <Switch>
                <RouteWithErrorBoundary
                  title="Employees"
                  path="/"
                  exact
                  render={() => <Employees />}
                />
                <RouteWithErrorBoundary
                  title="Blog"
                  path="/blog"
                  render={() => <Blog />}
                />
                <RouteWithErrorBoundary
                  title="Clients"
                  path="/clients"
                  render={() => <Clients />}
                />
                <UserProfileContext.Provider value={currentUser}>
                  <RouteWithErrorBoundary
                    title="Profile"
                    path="/profile"
                    render={() => <Profile />}
                  />
                </UserProfileContext.Provider>
              </Switch>
            </Suspense>
          </main>
        </Router>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
