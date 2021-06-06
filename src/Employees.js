import { useEffect, useState } from "react";

const localCache = {
  employees: [],
};

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  // console.log("state", state);
  useEffect(() => {
    if (!localCache.employees.length) {
      requestEmployees();
    } else {
      setEmployees(localCache.employees);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestEmployees() {
    try {
      // from https://randomuser.me/documentation
      const res = await fetch("https://randomuser.me/api/?results=10");
      const json = await res.json();

      setEmployees(json.results);
      localCache.employees = json.results;
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div>
      <h1>Employees</h1>
      <div className="px-4 py-10 bg-white shadow-lg rounded-3xl sm:p-20">
        <ul className="employees">
          {employees.map((item, index) => {
            return (
              <li key={index}>
                <div className="flex flex-row items-center">
                  <img
                    src={item.picture.thumbnail}
                    alt={`${item.name.first} ${item.name.last}`}
                    className="rounded-3xl employee-img"
                  />
                  <span className="text-lg ml-3">
                    {item.name.title} {item.name.first} {item.name.last}
                  </span>
                </div>
                <div className="text-gray-600">{item.email}</div>
                <div className="text-gray-600">{item.phone}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Employees;
