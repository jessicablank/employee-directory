import React from 'react';

const TableRow = (props) => {

    return (
        <tr>
            <th><img src={props.image} alt={props.name} /></th>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.state}</td>
        </tr>
    );
};

export default TableRow;