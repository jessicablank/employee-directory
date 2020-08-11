## The author's attempt to get her head around React Component Structuring

### src folder
* The _index.js_ file builds the page.
    * Requires:
        * import React from 'react';
        * import ReactDOM from 'react-dom';
        * import App from './App';
        * import App.css for header styling
    * Exports:
    * PseudoCode: ReactDOM.render with 'root'
* The _APP.jsx_ file builds the data.
    * Requires:
        * import React from "react";
        * import EmployeeTable from './components/EmployeeTable'
        * import Header from './components/Header
    * Exports:
        * export default App;
    * PseudoCode:
        * function App() returns div with a container class (className) containing the header and employee table

### components folder
* The _Header.js_ file styles the page header.
    * Requires:
        * import React from "react";
    * Exports:
        * export default Header;
* The _EmployeeTable.js_ file populates table with all data.
    * Requires:
        * import React, { Component } from "react";
        * import API from "../utils/API";
        * import employeeRow from './employeeRow
        * some crazy stuff to get font awesome to work
    * Exports:
        * export default employeeTable;
    * PseudoCode:
        * starting with `class employeeTable extends Component`
            * set State object
            * componentDidMount()
            * function to sort employee emails
            * function to search employee states (as in location of residence) with a filter
* The _TableRow.js_ file populates the table with sorted data.
    * Requires:
        * import React from "react";
    * Exports:
        * export TableRow;


### utils folder
    * The _API.js_ file uses axios to query the api and return the number of users specified.
        * Requires:
            * import axios from "axios";
        * Exports:
            * export default{
                getEmployee: function()
                {
                    return axios.get("https://randomuser.me/api?results=30&nat=us");
                }
            }
        
