import React, { Component } from "react";
import API from "../utils/API.js";
import TableRow from "./TableRow";

class EmployeeTable extends Component {
  state = {
    employees: [],
    allEmployees: [],
    order: "ascending",
    searchText: ""
  };

  componentDidMount() {
    this.getEmployee();
  }

  getEmployee = () => {
    API.getEmployee()

      .then((res) => {
        this.setState({
          employees: res.data.results,
          allEmployees: res.data.results,
        });
      })
      .catch((error) => console.log(error));
  };

  handleNameSort = () => {
    this.setState({
      order: this.state.order === "ascending" ? "descending" : "ascending",
    });
  };

  renderPage() {
    if (this.state.employees.length === 0) {
      return <h1>Please refresh the page</h1>;
    } else {
      const sortedNames = this.state.employees.sort((a, b) => {
        const aName = `${a.name.first} ${a.name.last}`.toLowerCase();
        const bName = `${b.name.first} ${b.name.last}`.toLowerCase();
        if (aName === bName) {
          return 0;
        }
        if (this.state.order === "ascending") {
          if (aName < bName) {
            return -1;
          }
          return 1;
        }
        if (aName < bName) {
          return 1;
        }
        return -1;
      });

      return (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">State</th>
            </tr>
          </thead>
          <tbody>
            {sortedNames.map((employee) => {
              return (
                <TableRow
                  key={employee.id.value}
                  picture={employee.picture.thumbnail}
                  name={employee.name.first + " " + employee.name.last}
                  email={employee.email}
                  state={employee.location.state}
                />
              );
            })}
          </tbody>
        </table>
      );
    }
  }

  render() {
    return this.renderPage();
  }
}
export default EmployeeTable;
