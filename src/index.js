import Axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EmployeeTable from './EmployeeTable'


class App extends Component {
    constructor() {
        super(),
        this.state = {
            employees: [],
            cars: [],
            sales: [],
        }
    }

    async componentDidMount() {
        const employeeResponse = await Axios.get('/api/employees');
        const employees = employeeResponse.data;
        const carResponse = await Axios.get('/api/cars');
        const cars = carResponse.data;
        const salesResponse = await Axios.get('/api/sales');
        const sales = salesResponse.data;
        this.setState({employees, cars, sales})
    }

    render() {
        const employees = this.state.employees;
        const cars = this.state.cars;
        const sales = this.state.sales;
        console.log(employees, cars, sales)
        return (
            <div id="Main">
                <div>
                    <h1>ACME Car Sales</h1>
                </div>
                <div id='navbar'>
                    <ul>
                        <li>Employees</li>
                        <li>Inventory</li>
                    </ul>
                </div>
                <div id='renderContainer'>
                    <EmployeeTable employees={employees} />
                </div>
            </div>
        )
    }

}


ReactDOM.render(
    <App />,
    document.querySelector('#app')
)