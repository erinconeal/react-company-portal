import { useState, lazy, FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconPrefix } from "@fortawesome/fontawesome-svg-core";
import useMediaQuery from "./useMediaQuery";
import useLocationChange from "./useLocationChange";

const HeaderProfileDropdown = lazy(() => import("./HeaderProfileDropdown"));

const Header: FunctionComponent = () => {
  const isMobileView = useMediaQuery("(max-width: 640px)");
  const [showMenu, setShowMenu] = useState(false);

  useLocationChange(() => {
    setShowMenu(false);
  });

  return (
    <header className="w-full mb-10 px-4 py-7 sm:px-7">
      <nav className="flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 mr-6">
          <NavLink to="/">
            <FontAwesomeIcon
              icon={["fa" as IconPrefix, "atom"]}
              className="fill-current h-5 w-5 mr-2"
            />
            <span className="font-semibold text-2xl">Portal</span>
          </NavLink>
        </div>
        <div className="block sm:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded"
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Site menu"
            aria-expanded={showMenu ? "true" : "false"}
            aria-controls="siteMenu"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full flex-grow sm:flex sm:items-center sm:w-auto ${
            showMenu ? "block" : "hidden"
          }`}
          id="siteMenu"
        >
          <div className="sm:flex-grow">
            <NavLink
              to="/"
              className="block mt-4 sm:inline-block sm:mt-0 mr-4"
              activeClassName="text-purple-600"
              exact
              aria-current="page"
            >
              Employees
            </NavLink>
            <NavLink
              to="/clients"
              className="block mt-4 sm:inline-block sm:mt-0 mr-4"
              activeClassName="text-purple-600"
              aria-current="page"
            >
              Clients
            </NavLink>
            <NavLink
              to="/blog"
              className="block mt-4 sm:inline-block sm:mt-0 mr-4"
              activeClassName="text-purple-600"
              aria-current="page"
            >
              Blog
            </NavLink>
          </div>
        </div>
        <div className={showMenu ? "block" : "hidden sm:block"}>
          {isMobileView ? (
            <NavLink
              to="/profile"
              className="mt-4 sm:mt-0 inline-block"
              aria-current="page"
            >
              Profile
            </NavLink>
          ) : (
            <HeaderProfileDropdown />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
