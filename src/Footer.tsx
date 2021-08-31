import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <footer className="w-full mt-10 p-7 bg-purple-600 text-white">
      <p>{new Date().getFullYear()} Portal site</p>
    </footer>
  );
};

export default Footer;
