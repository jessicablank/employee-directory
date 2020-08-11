# src folder
* The _index.js_ file builds the page.
    * Requires:
        * import "bootstrap/dist/css/bootstrap.css";
        * import React from 'react';
        * import ReactDOM from 'react-dom';
        * import App from './App';
    * Exports:
    * PseudoCode: ReactDOM.render App
* The _APP.js_ file builds the data.
    * Requires:
        * import React from "react";
        * import EmployeeTable from './components/EmployeeTable'
        * import Header from './components/Header
    * Exports:
        * export default App;
    * PseudoCode:
        * function App() returns div with a container class (className) containing <Header /> and <employeeTable />

## components folder
* The _header.js_ file styles the page header.
    * Requires:
        * import React from "react";
        * 
    * Exports:
        * export default Header;
* The _employeeTable.js_ file populates table with all data.
    * Requires:
        * import React, { Component } from "react";
        * import API from "../utils/API";
        * import employeeRow from './employeeRow
    * Exports:
        * export default employeeTable;
    * PseudoCode:
        * starting with `class employeeTable extends Component`
            * set State object
            * componentDidMount()
            * function to sort employee names
            * function to search employee names using a filter
            * function to render the page after sort
* The _employeeSort.js_ file populates the table with sorted data.
    * Requires:
        * import React from "react";
    * Exports:
        * export employeeSort;


## utils folder
    * The _API.js_ file uses axios to query the api and return the number of users specified.
        * Requires:
            * import axios from "axios";
        * Exports:
            * export default{
                getEmployee: function()
                {
                    return axios.get("https://randomuser.me/api?results=30");
                }
            }
        
