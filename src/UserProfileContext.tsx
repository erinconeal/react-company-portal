import { createContext } from "react";
import { CurrentUser } from "./APIResponsesTypes";

const initialCurrentUserState = {
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
};

const UserProfileContext = createContext<CurrentUser | null>(
  initialCurrentUserState
);

export default UserProfileContext;
