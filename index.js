//* 1) Inicializamos el servidor

const express = require('express');

//* CORS nos permite hacer solicitudes entre dominios, ejemplo una peticion fecth a nuestro backend
const cors = require('cors');

const userRouter = require('./Routes/UserRoutes');
const productRouter = require('./Routes/ProductRoute');

//* Variables de entorno
require('dotenv').config();
require('./Config/database');

const app = express();

//! limitar dominios en mi api
// const whiteList = ['Url de mi front o mis fronts']

app.use(cors()) // ojo solo con esto le decimos a nuestra api que permite cualquier origen
//! para limitar agregamos la whitelist a cors {origin: whiteList}
app.use(express.json())
//* Utilizamos nuestras rutas
app.use('/api', userRouter)
app.use('/api', productRouter)


app.listen(3000, () => console.log('Conectado en puerto 3000'))


//? Recordatorio:  Instanciar es invocar a una funcion, se ve en linea express()