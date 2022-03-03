import React from 'react';

const EmployeeSales = props => {
  const sale = props.sale;
  const car = sale.car;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});
  return(
    <tr>
      <td>{sale.color} {car.brand} {car.modelName}</td>
      <td>{formatter.format(car.cost)}</td>
    </tr>
  )
}

export default EmployeeSales