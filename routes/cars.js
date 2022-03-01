const router = require('express').Router();
const { Car } = require('../db/models');

module.exports = router;

router.get('/', async(req, res, next)=> {
    try{
        const cars = await Car.findAll({
            attributes: ['id', 'brand', 'modelName', 'cost'],
            order: ['brand']
        });
        res.json(cars)
    }
    catch(ex){
        next(ex)
    }
})