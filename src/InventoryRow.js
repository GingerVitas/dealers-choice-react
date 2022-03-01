import React from 'react';

const InventoryRow = props => {
    const car = props.car;

    return(
        <tr>
            <td>{car.brand}</td>
            <td>{car.modelName}</td>
            <td>{car.cost}</td>
        </tr>
    )
}

export default InventoryRow