// importar dependencias

const express = require('express');

const ENV = require('../config/index')
const db = require ('./mongoDB')

//inicializar express  d
const app = express();

//conexion con db mondoDB

db(`mongodb+srv://${ENV.config.user_db}:${ENV.config.pass_db}@user.cp4kwjc.mongodb.net/servigest?retryWrites=true&w=majority`)






//activar servidor

app.listen(ENV.config.port, () => {
    console.log(`Servidor inicializado puerto ${ENV.config.port}`)
})