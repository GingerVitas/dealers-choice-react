import React from 'react';
import EmployeeSales from './EmployeeSales'

const SingleEmployee = props => {
  const employee = props.employee
  const sales = employee.sales;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});
  return (
      <table>
        <tbody>
          <tr>
            <th colSpan='2'>{employee.name}'s Sales</th>
          </tr>
          { sales.map( sale => <EmployeeSales key={sale.id} sale={sale} />) }
          <tr>
            <td>Total Sales</td>
            <td>{formatter.format(sales.reduce((acc, curr) => acc + curr.car.cost, 0))}</td>
          </tr>
        </tbody>
      </table>
  )
}

export default SingleEmployee