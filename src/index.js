import Axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EmployeeTable from './EmployeeTable';
import InventoryTable from './InventoryTable';
import SalesTable from './SalesTable'


class App extends Component {
    constructor() {
        super(),
        this.state = {
            employees: [],
            cars: [],
            sales: [],
            selectedList: []
        },
        this.listSelector = this.listSelector.bind(this)
    }

    async componentDidMount() {
        const [employees, cars, sales] = await Promise.all([
            Axios.get('/api/employees'),
            Axios.get('/api/cars'),
            Axios.get('/api/sales')
        ]);
        this.setState({employees:employees.data, cars:cars.data, sales:sales.data})
        
        // const employeeResponse = await Axios.get('/api/employees');
        // const employees = employeeResponse.data;
        // const carResponse = await Axios.get('/api/cars');
        // const cars = carResponse.data;
        // const salesResponse = await Axios.get('/api/sales');
        // const sales = salesResponse.data;
        // this.setState({employees, cars, sales})
    }

    async listSelector(arr) {
        this.setState({selectedList: arr})
    }

    render() {
        const employees = this.state.employees;
        const cars = this.state.cars;
        const sales = this.state.sales;
        const selectedList = this.state.selectedList
        return (
            <div id="Main">
                <div>
                    <h1>ACME Car Sales</h1>
                </div>
                <div id='navbar'>
                    <ul>
                        <li onClick={()=> this.listSelector(employees)}>Employees</li>
                        <li onClick={()=> this.listSelector(cars)}>Inventory</li>
                        <li onClick={()=> this.listSelector(sales)}>Sales</li>
                    </ul>
                </div>
                <div id='renderContainer'>
                    {
                        selectedList === employees ? <EmployeeTable employees={employees} />
                        : selectedList === cars ? <InventoryTable cars={cars} />
                        : selectedList === sales ? <SalesTable sales={sales} />
                        : []
                    }
                    
                </div>
            </div>
        )
    }

}


ReactDOM.render(
    <App />,
    document.querySelector('#app')
)