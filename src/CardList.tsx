import { FunctionComponent, ElementType } from "react";
import { CurrentUser } from "./APIResponsesTypes";

interface EProps {
  headingTitle: string;
  unorderedListClass: string;
  array: CurrentUser[];
  Component: ElementType;
}

const CardList: FunctionComponent<EProps> = ({
  headingTitle,
  unorderedListClass = "",
  array,
  Component,
}) => {
  return (
    <div className="py-10 bg-white shadow-lg rounded-3xl sm:p-20 my-5">
      <h2>{headingTitle}</h2>
      <ul className={unorderedListClass}>
        {array.map((item, index) => {
          return <Component key={index} {...item} />;
        })}
      </ul>
    </div>
  );
};

export default CardList;
