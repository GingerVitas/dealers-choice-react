const router = require('express').Router()
const { Employee, Sale, Car } = require('../db/models');

module.exports = router

router.get('/', async(req, res, next)=>{
    try{
        const employees = await Employee.findAll({
            attributes: ['id', 'name'],
            include: [{
                model: Sale,
                attributes: ['color'],
                include: [{
                    model: Car,
                    attributes: ['brand', 'modelName', 'cost']
                }]
            }]
        });
        res.json(employees)
    }
    catch(ex){
        next(ex)
    }
})

router.get('/:id', async(req, res, next)=>{
    try{
        const employee = await Employee.findByPk(req.params.id, {
            attributes: ['id', 'name'],
            include: [{
                model: Sale,
                attributes: ['color'],
                include: [{
                    model: Car,
                    attributes: ['brand', 'modelName', 'cost']
                }]
            }]
        });
        res.json(employee)
    }
    catch(ex){
        next(ex)
    }
})

