import React from 'react';
import SalesRow from './SalesRow';

const SalesTable = props => {
    const sales = props.sales;
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    return(
        <table>
            <tbody>
                <tr>
                    <th>Salesperson</th>
                    <th>Car</th>
                    <th>Sale Price</th>
                </tr>
                {sales.map(sale=> <SalesRow key={sale.id} sale={sale} />)}
                <tr>
                    <td>Total Sales</td>
                    <td>{formatter.format(sales.reduce((acc, curr)=> acc + curr.car.cost, 0))}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default SalesTable