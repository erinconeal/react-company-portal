import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

const Footer: FunctionComponent = () => {
  return (
    <footer className="w-full mt-10 p-7 bg-purple-600 text-white flex place-content-between">
      <p>{new Date().getFullYear()} Portal site</p>
      <NavLink to="/contact">Contact us</NavLink>
    </footer>
  );
};

export default Footer;
