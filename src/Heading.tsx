import { useContext, FunctionComponent, createElement } from "react";
import HeadingLevelContext from "./HeadingLevelContext";

const Heading: FunctionComponent = ({ children }) => {
  const level = useContext(HeadingLevelContext);
  return createElement(`h${level}`, { children });
};

export default Heading;
