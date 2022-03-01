import React from 'react';

const SalesRow = props => {
    const sale = props.sale;

    return(
        <tr>
            <td>{sale.employee.name}</td>
            <td>{sale.color} {sale.car.brand} {sale.car.modelName}</td>
            <td>{sale.car.cost}</td>
        </tr>
    )
}

export default SalesRow