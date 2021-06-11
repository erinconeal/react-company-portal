const CardList = ({
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
          return <Component key={index} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default CardList;
