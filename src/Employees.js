import { useEffect, useState } from "react";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    requestEmployees();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestEmployees() {
    try {
      // from https://randomuser.me/documentation
      const res = await fetch("https://randomuser.me/api/?results=10");
      const json = await res.json();
      // console.log("json results", json.results);

      setEmployees(json.results);
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div>
      <h1>Employees</h1>
      {employees.map((item, index) => {
        return (
          <div key={index}>
            <p>
              {item.name.title} {item.name.first} {item.name.last}
            </p>
            <p>{item.email}</p>
            <p>{item.phone}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Employees;
