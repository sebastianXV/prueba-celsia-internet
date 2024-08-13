const express = require('express');
const { mongoConn } = require('./databases/connection');
const dotenv = require('dotenv').config();
const cors = require('cors');

mongoConn();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
    origin: '*'
}));

// Rutas
const cliente = require('./routes/cliente');
const servicio = require('./routes/servicio');


app.use('/api/v1/cliente', cliente);
app.use('/api/v1/servicio', servicio);



module.exports = app;
