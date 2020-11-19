import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container'
import fetch from "node-fetch";
import EmployeeTable from "./EmployeeTable";
import HandleSearch from "./HandleSearch";
//import Modal from "./Modal.";
import { trackPromise } from "react-promise-tracker";

const DataSort = () => {
  const [employees, setEmployees] = useState([]);
  const [sortObj, updateSort] = useState({ field: "name", order: "asc" });
  const [filterObj, updateFilter] = useState({ name: "" });
  const [filteredEmployees, updateFilteredEmployees] = useState([]);

  //Call API on page load with loading indicator
  useEffect(() => {
    trackPromise(
      fetch("https://randomuser.me/api?results=100")
        .then((res) => res.json())
        .then((json) => {
          //console.log(json)
          setEmployees(json.results);
        })
    );
  }, []);

  //update the page when something changes
  useEffect(() => {
    let filterEmployees = [...employees];

    //apply filters
    if (filterEmployees.length && filterObj.name) {
      filterEmployees = filterEmployees.filter((employee) => {
        return `${employee.name.first.toLowerCase()}  ${employee.name.last.toLowerCase()}`.includes(
          filterObj.name.toLowerCase()
        );
      });
    }

    //sort functions based on different sort fields
    const sortFunctions = {
      name: (a, b) => {
        const aName = `${a.name.first} ${a.name.last}`.toLowerCase();

        const bName = `${b.name.first} ${b.name.last}`.toLowerCase();

        return aName < bName ? -1 : aName > bName ? 1 : 0;
      },
      username: (a, b) => {
        return a.login.username < b.login.username
          ? -1
          : a.login.username > b.login.username
          ? 1
          : 0;
      },
      password: (a, b) => {
        return a.login.password < b.login.password
          ? -1
          : a.login.password > b.login.password
          ? 1
          : 0;
      },
      age: (a, b) => {
        return a.dob.age - b.dob.age;
      },
      country: (a, b) => {
        return a.location.country < b.location.country
          ? -1
          : a.location.country > b.location.country
          ? 1
          : 0;
      },
    };

    //apply sorting
    if (filterEmployees.length && sortObj) {
      filterEmployees = filterEmployees.sort((a, b) => {
        //get output from sort function
        let sortedEmployees = sortFunctions[sortObj.field](a, b);

        //if using reverse sort then reverse value
        sortedEmployees =
          sortObj.order === "dsc" ? sortedEmployees * -1 : sortedEmployees;

        return sortedEmployees;
      });
    }

    updateFilteredEmployees(filterEmployees);
  }, [employees, sortObj, filterObj]);

  const sortClickHandler = (e) => {
    const field = e.target.dataset.field;

    console.log(field);

    if (sortObj.field === field) {
      if (sortObj.order === "asc") {
        updateSort({ field: field, order: "dsc" });
      } else {
        updateSort({ field: field, order: "asc" });
      }
    } else {
      updateSort({ field: field, order: "asc" });
    }
  };

  return (
      <Container fluid>
        <HandleSearch updateFilter={updateFilter} />
        <EmployeeTable
          employees={filteredEmployees}
          sortClickHandler={sortClickHandler}
          sortObj={sortObj}
        />
      </Container>
  );
};

export default DataSort;
