import { useEffect, useState, FunctionComponent } from "react";
import EmployeeListItem from "./EmployeeListItem";
import CardList from "./CardList";
import Heading from "./Heading";
import Section from "./Section";
import { CurrentUser } from "./APIResponsesTypes";
import { fetchEmployeesFromAPI } from "./store/employeesSlice";
import { useAppDispatch, useAppSelector } from "./store/hooks";

const Employees: FunctionComponent = () => {
  const [accounting, setAccounting] = useState<CurrentUser[]>([]);
  const [informationTech, setInformationTech] = useState<CurrentUser[]>([]);
  const [marketing, setMarketing] = useState<CurrentUser[]>([]);
  const [leadershipTeam, setLeadershipTeam] = useState<CurrentUser[]>([]);
  const dispatch = useAppDispatch();
  const employees = useAppSelector((state) => state.employees.entities);

  useEffect(() => {
    if (!employees.length) {
      void dispatch(fetchEmployeesFromAPI());
    }
  }, [employees, dispatch]);

  useEffect(() => {
    if (!employees.length) {
      setAccounting(Array(5).fill(undefined));
      setInformationTech(Array(5).fill(undefined));
      setMarketing(Array(5).fill(undefined));
      setLeadershipTeam(Array(2).fill(undefined));
    } else {
      const chunked = chunk(employees, 5);
      setAccounting(chunked[0]);
      setInformationTech(chunked[1]);
      setMarketing(chunked[2]);
      setLeadershipTeam(chunked[3]);
    }
  }, [employees]);

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
