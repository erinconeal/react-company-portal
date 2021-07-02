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
import { RandomUserAPIResponse, CurrentUser } from "./APIResponsesTypes";
import "./fontawesome";

const Employees = lazy(() => import("./Employees"));
const Clients = lazy(() => import("./Clients"));
const Blog = lazy(() => import("./Blog"));
const Profile = lazy(() => import("./Profile"));

export const UserProfileContext = createContext<CurrentUser | null>({
  name: {
    first: "",
    last: "",
    title: "",
  },
  picture: {
    thumbnail: "",
    medium: "",
    large: "",
  },
  dob: {
    date: "",
    age: "",
  },
  location: {
    street: {
      number: "",
      name: "",
    },
    city: "",
    state: "",
    postcode: "",
    country: "",
  },
  registered: {
    age: 0,
  },
  email: "",
  phone: "",
  cell: "",
});

const App = () => {
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
      <Suspense fallback={<h1>loading route …</h1>}>
        <Router>
          <UserProfileContext.Provider value={currentUser}>
            <Header />
          </UserProfileContext.Provider>
          <main className="container mx-auto min-h-screen prose">
            <Switch>
              <RouteWithErrorBoundary path="/" exact component={Employees} />
              <RouteWithErrorBoundary path="/blog" component={Blog} />
              <RouteWithErrorBoundary path="/clients" component={Clients} />
              <UserProfileContext.Provider value={currentUser}>
                <RouteWithErrorBoundary path="/profile" component={Profile} />
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
