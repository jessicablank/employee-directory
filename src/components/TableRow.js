import React from 'react';

const TableRow = ({employee}) => {

    return (
        <tr>
            <th><img src={employee.picture.medium} alt={`${employee.name.first} ${employee.name.last}`} /></th>
            <td>{employee.name.first} {employee.name.last}</td>
            <td>{employee.login.username}</td>
            <td>{employee.login.password}</td>
            <td>{employee.dob.age}</td>
            <td>{employee.location.country} <img src={`https://www.countryflags.io/${employee.nat}/shiny/32.png`} alt="flag"></img></td>
            <td>{employee.phone}</td>
        </tr>
    );
};

export default TableRow;