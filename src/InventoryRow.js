import React from 'react';

const InventoryRow = props => {
    const car = props.car;
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    return(
        <tr>
            <td>{car.brand}</td>
            <td>{car.modelName}</td>
            <td>{formatter.format(car.cost)}</td>
        </tr>
    )
}

export default InventoryRow