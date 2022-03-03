const express = require('express');
const app = express();
const syncAndSeed = require('./db/seed')
const { Employee, Sale } = require ('./db/models')
const path = require('path')

app.use('/api/employees', require('./routes/employees'))
app.use('/api/cars', require('./routes/cars'))
app.use('/api/sales', require('./routes/sales'))
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', async(req, res, next)=>{
    try{
        res.sendFile(path.join(__dirname, './public/index.html'))
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