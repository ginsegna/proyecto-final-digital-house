const { executionAsyncResource } = require('async_hooks');
const express = require('express');
const app = express();
const path = require('path');
const public_User = path.resolve('public');
app.use(express.static(public_User))
app.use(express.json());

const app_port = 3000;
app.listen(app_port, ()=> {
console.log('Servidor en el puerto ' + app_port);
})


app.get('/', (req,res) => {
    res.sendFile(path.resolve('views/index.html'))
})

app.get('/producto',(req,res) => {
    res.sendFile(path.resolve('views/productDetail.html'))
})

app.get('/carrito',(req,res)=>{
    res.sendFile(path.resolve('views/productCar.html'))
})

app.get('/login-registro',(req,res)=>{
    res.sendFile(path.resolve('views/register-login.html'))
})