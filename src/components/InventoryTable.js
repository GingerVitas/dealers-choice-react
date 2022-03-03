import React from 'react';
import InventoryRow from './InventoryRow'

const InventoryTable = props => {
    const inventory = props.cars;

    return (
        <table>
            <tbody>
                <tr>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Price</th>
                </tr>
                {inventory.map(car => <InventoryRow key={car.id} car={car} />)}
            </tbody>
        </table>
    )
}

export default InventoryTable