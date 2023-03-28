import { FunctionComponent, useContext } from "react";
import HeadingLevelContext from "./HeadingLevelContext";

const Section: FunctionComponent = (children) => {
  const level = useContext(HeadingLevelContext);
  return (
    <HeadingLevelContext.Provider value={level + 1}>
      <section {...children} />
    </HeadingLevelContext.Provider>
  );
};

export default Section;
