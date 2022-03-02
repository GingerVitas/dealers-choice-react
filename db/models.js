const Sequelize = require('sequelize');
const db = require('./db')

const Employee = db.define('employee', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    }
})

const Car = db.define('car', {
    brand: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    modelName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },

    cost: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

const Sale = db.define('sale', {
    color: {
        type: Sequelize.ENUM('Red', 'Blue', 'White', 'Black', 'Silver'),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
});

Sale.belongsTo(Employee);
Sale.belongsTo(Car)
Employee.hasMany(Sale);
Car.hasMany(Sale);

module.exports = {
    Employee,
    Car,
    Sale
}