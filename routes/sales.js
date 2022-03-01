const router = require('express').Router();
const { Sale, Employee, Car } = require('../db/models');

module.exports = router;

router.get('/', async(req, res, next) => {
    try{
        const sales = await Sale.findAll({
            attributes: ['id', 'color'],
            include: [
                {
                model: Car,
                attributes: ['brand', 'modelName', 'cost']
                },
                {
                    model: Employee,
                    as: 'Salesperson',
                    attributes: ['name']
                    }],
            order: ['employeeId']
        })
        res.json(sales)
    }
    catch(ex){
        next(ex)
    }
})