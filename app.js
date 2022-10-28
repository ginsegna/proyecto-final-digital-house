const express = require('express');
const app = express();
const path = require('path');

const mainRouter = require('./routers/mainRouter')


app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/', mainRouter);

const app_port = process.env.PORT || 3000;




const publicPath = path.resolve('public');
app.use(express.static(publicPath));


app.listen(app_port, ()=> {
console.log('Servidor en el puerto ' + app_port);
})


app.get('/', (req,res) => {
    res.sendFile(path.resolve('views/index.html'))
})
app.post('/', (req,res) => {
    res.sendFile(path.resolve('views/index.html'))
})

app.get('/producto',(req,res) => {
    res.sendFile(path.resolve('views/productDetail.html'))
})

app.get('/carrito',(req,res)=>{
    res.sendFile(path.resolve('views/productCar.html'))
})

app.get('/registro',(req,res)=>{
    res.sendFile(path.resolve('views/register.html'))
})

app.post('/registro',(req,res)=>{
    res.sendFile(path.resolve('views/register.html'))
})

app.get('/login',(req,res)=>{
    res.sendFile(path.resolve('views/login.html'))
})