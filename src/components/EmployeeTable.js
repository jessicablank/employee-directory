import React, { Component } from "react";
import API from "../utils/API.js";
import TableRow from "./TableRow";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAlphaDown } from '@fortawesome/free-solid-svg-icons'
import { faSortAlphaDownAlt } from '@fortawesome/free-solid-svg-icons'

class EmployeeTable extends Component {
  state = {
    employees: [],
    allEmployees: [],
    order: "ascending",
    icon :  faSortAlphaDown,
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

 
  handleEmailSort = () => {
    this.setState({
      order: this.state.order === "ascending" ? "descending" : "ascending",
      icon: this.state.icon === faSortAlphaDown ?  faSortAlphaDownAlt  :  faSortAlphaDown
    });
  };

  renderPage() {
    if (this.state.employees.length === 0) {
      return <h1>Please refresh the page</h1>;
    } else {
      const sortedEmails = this.state.employees.sort((a, b) => {
        const aEmail = a.email
        const bEmail = b.email
        if (aEmail === bEmail) {
          return 0;
        }
        if (this.state.order === "ascending") {
          if (aEmail < bEmail) {
            return -1;
          }
          return 1;
        }
        if (aEmail < bEmail) {
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
              <th scope="col" onClick={this.handleEmailSort}> Email <FontAwesomeIcon icon={this.state.icon} /></th>
              <th scope="col">State</th>
            </tr>
          </thead>
          <tbody>
            {sortedEmails.map((employee) => {
              return (
                <TableRow
                  key={employee.id.value}
                  picture={employee.picture.medium}
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
