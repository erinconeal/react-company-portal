import Skeleton from "react-loading-skeleton";

const EmployeeListItem = ({ item }) => {
  return (
    <li>
      <div className="flex my-5">
        <div className="hidden sm:block sm:mr-4">
          {item ? (
            <img
              src={item.picture.medium}
              alt={`${item.name.first} ${item.name.last}`}
              className="rounded-3xl employee-img"
            />
          ) : (
            <Skeleton height={100} width={100} />
          )}
        </div>
        <div className="flex-shrink self-center w-full">
          {item ? (
            <div className="text-lg">
              {item.name.title} {item.name.first} {item.name.last}
            </div>
          ) : (
            <Skeleton />
          )}
          {item ? (
            <div className="text-gray-600">{item.email}</div>
          ) : (
            <Skeleton />
          )}
          {item ? (
            <a href={`tel:${item.phone}`} className="text-gray-600">
              {item.phone}
            </a>
          ) : (
            <Skeleton />
          )}
        </div>
      </div>
    </li>
  );
};

export default EmployeeListItem;
