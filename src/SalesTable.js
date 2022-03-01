import React from 'react';
import SalesRow from './SalesRow';

const SalesTable = props => {
    const sales = props.sales;

    return(
        <table>
            <tbody>
                <tr>
                    <th>Salesperson</th>
                    <th>Car</th>
                    <th>Sale Price</th>
                </tr>
                {sales.map(sale=> <SalesRow key={sale.id} sale={sale} />)}
            </tbody>
        </table>
    )
}

export default SalesTable