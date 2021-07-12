import UserProfileContext from "./UserProfileContext";
import { FunctionComponent } from "react";

const Profile: FunctionComponent = () => {
  return (
    <>
      <h1>Profile</h1>
      <UserProfileContext.Consumer>
        {(currentUser) => {
          if (!currentUser) return null;
          return (
            <div className="mx-5 sm:mx-1 border-card">
              <div className="sm:flex sm:items-center">
                <div className="mr-6">
                  <img
                    src={currentUser.picture.large}
                    alt={`${currentUser.name.first} ${currentUser.name.last}`}
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <p>
                    {currentUser.name.first} {currentUser.name.last}
                  </p>
                  <p>{currentUser.email}</p>
                  <p>
                    Born {currentUser.dob.date} (Age {currentUser.dob.age})
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2">
                <div>
                  <h2>Address</h2>
                  <span>
                    {currentUser.location.street.number}{" "}
                    {currentUser.location.street.name}
                  </span>
                  <br />
                  <span>
                    {`${currentUser.location.city}, ${currentUser.location.state} ${currentUser.location.postcode}`}
                  </span>
                  <br />
                  <span>{currentUser.location.country}</span>
                </div>
                <div>
                  <h2>Phones</h2>
                  <span>Cell: {currentUser.cell}</span>
                  <br />
                  <span>Home: {currentUser.phone}</span>
                </div>
              </div>
              <p>Employed here for {currentUser.registered.age} years</p>
            </div>
          );
        }}
      </UserProfileContext.Consumer>
    </>
  );
};

export default Profile;
