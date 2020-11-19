import React from "react";
import SortToggle from "../utils/SortToggle";
import Table from 'react-bootstrap/Table'
import TableRow from "./TableRow";

function EmployeeTable ({employees, sortClickHandler, sortObj}) {
  return (
    <Table fluid responsive striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Picture</th>
          <th>
            Agent Name
            {" "}
            <SortToggle
            field="name"
            sortClickHandler={sortClickHandler}
            sortObj={sortObj}/>
          </th>
          <th>
            Code Name
            {" "}
            <SortToggle
            field="username"
            sortClickHandler={sortClickHandler}
            sortObj={sortObj}/>
          </th>
          <th>
            Last Mission
            {" "}
            <SortToggle
            field="password"
            sortClickHandler={sortClickHandler}
            sortObj={sortObj}/>
          </th>
          <th>
            Age
            {" "}
            <SortToggle
            field="age"
            sortClickHandler={sortClickHandler}
            sortObj={sortObj}/>
          </th>
          <th>
            Country
            {" "}
            <SortToggle
            field="country"
            sortClickHandler={sortClickHandler}
            sortObj={sortObj}/>
          </th>
        </tr>
      </thead>
      <tbody>
      {employees.map((employee, i) => <TableRow employee={employee} key={i} />)}
      </tbody>
    </Table>
  );
}
  
export default EmployeeTable;
