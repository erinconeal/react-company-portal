import { useEffect, useState, FunctionComponent } from "react";
import EmployeeListItem from "./EmployeeListItem";
import CardList from "./CardList";
import Heading from "./Heading";
import Section from "./Section";
import { RandomUserAPIResponse, CurrentUser } from "./APIResponsesTypes";

const localCache: {
  employees: CurrentUser[][];
} = { employees: [] };

const Employees: FunctionComponent = () => {
  const [, setEmployees] = useState<CurrentUser[][]>([]);
  const [accounting, setAccounting] = useState<CurrentUser[]>([]);
  const [informationTech, setInformationTech] = useState<CurrentUser[]>([]);
  const [marketing, setMarketing] = useState<CurrentUser[]>([]);
  const [leadershipTeam, setLeadershipTeam] = useState<CurrentUser[]>([]);

  useEffect(() => {
    if (!localCache.employees.length) {
      setAccounting(Array(5).fill(undefined));
      setInformationTech(Array(5).fill(undefined));
      setMarketing(Array(5).fill(undefined));
      setLeadershipTeam(Array(2).fill(undefined));
      void requestEmployees();
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
      const json = (await res.json()) as RandomUserAPIResponse;
      const chunked = chunk(json.results, 5);

      setEmployees(chunked);
      localCache.employees = chunked;
      setAccounting(chunked[0]);
      setInformationTech(chunked[1]);
      setMarketing(chunked[2]);
      setLeadershipTeam(chunked[3]);
    } catch (error) {
      console.log(error);
    }
  }

  function chunk(arr: CurrentUser[], len: number) {
    const chunks = [];
    let i = 0;

    while (i < arr.length) {
      chunks.push(arr.slice(i, (i += len)));
    }
    return chunks;
  }

  return (
    <Section>
      <Heading>Employees</Heading>
      <CardList
        headingTitle="Leadership Team"
        unorderedListClass="employees"
        array={leadershipTeam}
        Component={EmployeeListItem}
        testId="leadership"
      />
      <CardList
        headingTitle="Accounting"
        unorderedListClass="employees"
        array={accounting}
        Component={EmployeeListItem}
        testId="accounting"
      />
      <CardList
        headingTitle="IT"
        unorderedListClass="employees"
        array={informationTech}
        Component={EmployeeListItem}
        testId="it"
      />
      <CardList
        headingTitle="Marketing"
        unorderedListClass="employees"
        array={marketing}
        Component={EmployeeListItem}
        testId="marketing"
      />
    </Section>
  );
};

export default Employees;
