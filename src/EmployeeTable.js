import React from 'react';
import EmployeeRow from './EmployeeRow';

const EmployeeTable = props => {
    const employees = props.employees;
    const employeeSelector = props.employeeSelector;

    return (
        <table>
            <tbody>
            <tr>
                <th>Salesperson</th>
                <th>Number of Sales</th>
            </tr>
                {employees.map(employee=> <EmployeeRow key={employee.id} employee={employee} employeeSelector={employeeSelector}/>)} 
            </tbody>   
        </table>
    )
}

export default EmployeeTable