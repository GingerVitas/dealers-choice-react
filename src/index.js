import Axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EmployeeTable from './EmployeeTable';
import InventoryTable from './InventoryTable';
import SalesTable from './SalesTable'
import SingleEmployee from './SingleEmployee';
import '../public/main.css';


class App extends Component {
    constructor() {
        super(),
        this.state = {
            employees: [],
            cars: [],
            sales: [],
            selectedList: [],
            selectedEmployee: {}
        },
        this.listSelector = this.listSelector.bind(this);
        this.employeeSelector = this.employeeSelector.bind(this);
    }

    async componentDidMount() {
        const [employees, cars, sales] = await Promise.all([
            Axios.get('/api/employees'),
            Axios.get('/api/cars'),
            Axios.get('/api/sales')
        ]);
        this.setState({employees:employees.data, cars:cars.data, sales:sales.data})
    }

    async listSelector(arr) {
        this.setState({selectedList: arr})
        this.setState({selectedEmployee: {}})
    }

    async employeeSelector(employeeId) {
        const employee = (await Axios.get(`/api/employees/${employeeId}`)).data
        this.setState({selectedEmployee: employee})
    }

    render() {
        const employees = this.state.employees;
        const cars = this.state.cars;
        const sales = this.state.sales;
        const selectedList = this.state.selectedList
        const selectedEmployee = this.state.selectedEmployee;
        const employeeSelector = this.employeeSelector;

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
                        !!selectedEmployee && selectedEmployee.id ? <SingleEmployee employee={selectedEmployee} />
                        : selectedList === employees ? <EmployeeTable employees={employees} employeeSelector={employeeSelector}/>
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