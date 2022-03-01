const { Car, Employee, Sale } = require('./models');
const db = require('./db')

const syncAndSeed = async() => {
    try{
        await db.sync({force: true});
        const [moe, larry, curly, lucy, ethyl] = await Promise.all([
            Employee.create({name: 'Moe'}),
            Employee.create({name: 'Larry'}),
            Employee.create({name: 'Curly'}),
            Employee.create({name: 'Lucy'}),
            Employee.create({name: 'Ethyl'}),
        ]);
        const [corolla, camry, rav4, fusion, mustang, civic, accord] = await Promise.all([
            Car.create({brand: 'Toyota', modelName: 'Corolla', cost: 20000}),
            Car.create({brand: 'Toyota', modelName: 'Camry', cost: 26000}),
            Car.create({brand: 'Toyota', modelName: 'Rav4', cost: 26000}),
            Car.create({brand: 'Ford', modelName: 'Fusion', cost: 25000}),
            Car.create({brand: 'Ford', modelName: 'Mustang', cost: 40000}),
            Car.create({brand: 'Honda', modelName: 'Civic', cost: 18000}),
            Car.create({brand: 'Honda', modelName: 'Accord', cost: 32000}),
        ]);
        await Promise.all([
            Sale.create({employeeId: lucy.id, carId: camry.id, color: 'Red'}),
            Sale.create({employeeId: lucy.id, carId: camry.id, color: 'Silver'}),
            Sale.create({employeeId: lucy.id, carId: fusion.id, color: 'Blue'}),
            Sale.create({employeeId: moe.id, carId: rav4.id, color: 'Black'}),
            Sale.create({employeeId: moe.id, carId: mustang.id, color: 'Red'}),
            Sale.create({employeeId: larry.id, carId: civic.id, color: 'White'}),
            Sale.create({employeeId: ethyl.id, carId: accord.id, color: 'White'}),
            Sale.create({employeeId: ethyl.id, carId: accord.id, color: 'Blue'}),
            Sale.create({employeeId: curly.id, carId: corolla.id, color: 'Black'}),
            Sale.create({employeeId: curly.id, carId: corolla.id, color: 'Silver'}),
            Sale.create({employeeId: curly.id, carId: camry.id, color: 'Blue'}),
        ])
    }
    catch(ex){
        console.log(ex)
    }
}

module.exports = syncAndSeed