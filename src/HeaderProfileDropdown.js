import { useState } from "react";
import { NavLink } from "react-router-dom";
import { UserProfileContext } from "./App";

const HeaderProfileDropdown = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <UserProfileContext.Consumer>
      {(currentUser) => {
        if (!currentUser) return null;

        return (
          <div className="inline-block relative">
            <button
              aria-label="Profile menu"
              aria-expanded={showProfileMenu ? "true" : "false"}
              aria-controls="profileMenu"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            >
              <img
                alt={`${currentUser.name.first} ${currentUser.name.last}`}
                src={currentUser.picture.thumbnail}
                className="rounded-3xl"
              />
            </button>
            <ul
              className={`absolute text-gray-700 pt-1 ${
                showProfileMenu ? "block" : "hidden"
              }`}
              id="profileMenu"
            >
              <li>
                <NavLink
                  to="/profile"
                  activeClassName="text-white bg-purple-500"
                  className="rounded-t rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                >
                  Profile
                </NavLink>
              </li>
            </ul>
          </div>
        );
      }}
    </UserProfileContext.Consumer>
  );
};

export default HeaderProfileDropdown;
