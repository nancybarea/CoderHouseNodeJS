
const mongoose = require('mongoose');
//import mongoose from 'mongoose'
const model = require('./models/usuario');
//import * as model from './models/usuario.js'

CRUD()

async function CRUD () {
    try{
        //connection to database
        const URL = 'mongodb://localhost:27017/ecommerce'
        let rta = await mongoose.connect(URL, {});   
        //console.log(rta);
        console.log('Base de datos conectada');

        //create
        console.log('Create');
        const usuario = {nombre: 'Nancy', apellido: 'Barea', email: 'nancybarea@gmail.com', usuario:'nancybarea', password: '123'}
        const usuarioSaveModel = model(usuario);
        let usuarioSave = await usuarioSaveModel.save();
        console.log(usuarioSave);

        //read
        console.log('Read all');
        let usuarios = await model.find({});
        console.log(usuarios);
    }    
    catch(error){
        console.log(`error en CRUD: ${error}`);
        throw new Error('Error al conectarse a la base de datos');
    }
}

