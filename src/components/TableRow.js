import React from 'react';

const TableRow = ({employee}) => {

    return (
        <tr>
            <th><img src={employee.picture.medium} alt={`${employee.name.first} ${employee.name.last} image`} /></th>
            <td>{employee.name.first} {employee.name.last}</td>
            <td>{employee.login.username}</td>
            <td>{employee.login.password}</td>
            <td>{employee.dob.age}</td>
            <td>{employee.location.country}</td>
        </tr>
    );
};

export default TableRow;