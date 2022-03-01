import React from 'react';

const EmployeeRow = props => {
    const employee = props.employee;
    return (
        <tr>
            <td>{employee.name}</td>
            <td>{employee.sales.length}</td>
        </tr>
        
    )
}

export default EmployeeRow