import Skeleton from "react-loading-skeleton";
import { FunctionComponent } from "react";
import { CurrentUser } from "./APIResponsesTypes";

const EmployeeListItem: FunctionComponent<CurrentUser> = (item) => {
  return (
    <li>
      <div className="flex my-5">
        <div className="hidden sm:block sm:mr-4">
          {item.picture ? (
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
          {item.name ? (
            <div className="text-lg">
              {item.name.title} {item.name.first} {item.name.last}
            </div>
          ) : (
            <Skeleton />
          )}
          <div className="text-gray-600">
            {item.email ? (
              <a href={`mailto:${item.email}`}>{item.email}</a>
            ) : (
              <Skeleton />
            )}
          </div>
          <a href={`tel:${item?.phone}`} className="text-gray-600">
            {item.phone || <Skeleton />}
          </a>
        </div>
      </div>
    </li>
  );
};

export default EmployeeListItem;
