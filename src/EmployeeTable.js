import React from 'react';
import EmployeeRow from './EmployeeRow';

const EmployeeTable = props => {
    const employees = props.employees;

    return (
        <table>
            <tr>
                <th>Salesperson</th>
                <th>Number of Sales</th>
            </tr>
                {employees.map(employee=> <EmployeeRow key={employee.id} employee={employee} />)}    
        </table>
    )
}

export default EmployeeTable