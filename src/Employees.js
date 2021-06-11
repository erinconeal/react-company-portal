import { useEffect, useState } from "react";
import EmployeeListItem from "./EmployeeListItem";
import CardList from "./CardList";

const localCache = {
  employees: [],
};

const Employees = () => {
  const [, setEmployees] = useState([]);
  const [accounting, setAccounting] = useState([]);
  const [informationTech, setInformationTech] = useState([]);
  const [marketing, setMarketing] = useState([]);
  const [leadershipTeam, setLeadershipTeam] = useState([]);

  useEffect(() => {
    if (!localCache.employees.length) {
      setAccounting(Array(5).fill());
      setInformationTech(Array(5).fill());
      setMarketing(Array(5).fill());
      setLeadershipTeam(Array(2).fill());
      requestEmployees();
    } else {
      setAccounting(localCache.employees[0]);
      setInformationTech(localCache.employees[1]);
      setMarketing(localCache.employees[2]);
      setLeadershipTeam(localCache.employees[3]);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestEmployees() {
    try {
      // from https://randomuser.me/documentation
      const res = await fetch("https://randomuser.me/api/?results=17");
      const json = await res.json();
      const chunked = chunk(json.results, 5);

      setEmployees(chunked);
      localCache.employees = chunked;
      setAccounting(chunked[0]);
      setInformationTech(chunked[1]);
      setMarketing(chunked[2]);
      setLeadershipTeam(chunked[3]);
    } catch (error) {
      console.log("error", error);
    }
  }

  function chunk(arr, len) {
    const chunks = [];
    let i = 0;

    while (i < arr.length) {
      chunks.push(arr.slice(i, (i += len)));
    }
    return chunks;
  }

  return (
    <div>
      <h1>Employees</h1>
      <CardList
        headingTitle="Leadership Team"
        unorderedListClass="employees"
        array={leadershipTeam}
        Component={EmployeeListItem}
      />
      <CardList
        headingTitle="Accounting"
        unorderedListClass="employees"
        array={accounting}
        Component={EmployeeListItem}
      />
      <CardList
        headingTitle="IT"
        unorderedListClass="employees"
        array={informationTech}
        Component={EmployeeListItem}
      />
      <CardList
        headingTitle="Marketing"
        unorderedListClass="employees"
        array={marketing}
        Component={EmployeeListItem}
      />
    </div>
  );
};

export default Employees;
