import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full mb-10 p-7">
      <nav className="flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 mr-6">
          <NavLink to="/">
            <FontAwesomeIcon
              icon={["fa", "atom"]}
              className="fill-current h-5 w-5 mr-2"
            />
            <span className="font-semibold text-2xl">Portal</span>
          </NavLink>
        </div>
        <div className="block sm:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full flex-grow sm:flex sm:items-center sm:w-auto ${
            showMenu ? "block" : "hidden"
          }`}
        >
          <div className="sm:flex-grow">
            <NavLink
              to="/"
              className="block mt-4 sm:inline-block sm:mt-0 mr-4"
              activeClassName="text-purple-500"
              exact
            >
              Employees
            </NavLink>
            <NavLink
              to="/clients"
              className="block mt-4 sm:inline-block sm:mt-0 mr-4"
              activeClassName="text-purple-500"
            >
              Clients
            </NavLink>
            <NavLink
              to="/blog"
              className="block mt-4 sm:inline-block sm:mt-0 mr-4"
              activeClassName="text-purple-500"
            >
              Blog
            </NavLink>
          </div>
        </div>
        <div className={showMenu ? "block" : "hidden sm:block"}>
          <NavLink to="/profile" className="mt-4 sm:mt-0 inline-block">
            Profile
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
