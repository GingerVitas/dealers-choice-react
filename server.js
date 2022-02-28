const express = require('express');
const app = express();
const syncAndSeed = require('./db/seed')
const { Employee, Sale } = require ('./db/models')

app.get('/', async(req, res, next) =>{
    try{
        res.send(await Employee.findAll({
            include: Sale
        }))
    }
    catch(ex){
        next(ex)
    }
})

const start = async() => {
    try{
        await syncAndSeed();
        const port = process.env.PORT || 3000;
        app.listen(port, ()=> console.log(`listening on port ${port}`))
    }
    catch(ex){
        console.log(ex)
    }
}

start()