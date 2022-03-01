const router = require('express').Router();
const { Sale, Employee, Car } = require('../db/models');

module.exports = router;

router.get('/', async(req, res, next) => {
    try{
        const sales = await Sale.findAll({
            attributes: ['id', 'color'],
            include: [{
                model: Employee,
                attributes: ['name']
            },
            {
                model: Car,
                attributes: ['brand', 'modelName', 'cost']
            }],
        })
        res.json(sales)
    }
    catch(ex){
        next(ex)
    }
})