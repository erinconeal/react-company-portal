import { FunctionComponent, ElementType } from "react";
import Section from "./Section";
import Heading from "./Heading";
import { CurrentUser } from "./APIResponsesTypes";

interface EProps {
  headingTitle: string;
  unorderedListClass: string;
  array: CurrentUser[];
  Component: ElementType;
  testId: string;
}

const CardList: FunctionComponent<EProps> = ({
  headingTitle,
  unorderedListClass = "",
  array,
  Component,
  testId,
}) => {
  return (
    <div
      className="py-10 bg-white shadow-lg rounded-3xl sm:p-20 my-5"
      data-testid={testId}
    >
      <Section>
        <Heading>{headingTitle}</Heading>
        <ul className={unorderedListClass}>
          {array.map((item, index) => {
            return <Component key={index} {...item} />;
          })}
        </ul>
      </Section>
    </div>
  );
};

export default CardList;
