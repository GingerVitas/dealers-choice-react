import React from 'react';

const SalesRow = props => {
    const sale = props.sale;
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    return(
        <tr>
            <td>{sale.employee.name}</td>
            <td>{sale.color} {sale.car.brand} {sale.car.modelName}</td>
            <td>{formatter.format(sale.car.cost)}</td>
        </tr>
    )
}

export default SalesRow