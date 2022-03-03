import React from 'react';

const EmployeeRow = props => {
    const employee = props.employee;
    const employeeSelector = props.employeeSelector
    return (
        <tr onClick={()=> employeeSelector(employee.id)}>
            <td>{employee.name}</td>
            <td>{employee.sales.length}</td>
        </tr>
        
    )
}

export default EmployeeRow