const mongoose = require('mongoose');
//import mongoose from "mongoose";

const usuarioCollection = 'usuarios';

const usuarioSchema = new mongoose.Schema({
    nombre: {type: String, require: true, max: 100},
    apellido: {type: String, require: true, max: 100},
    email: {type: String, require: true, max: 100},
    usuario: {type: String, require: true, max: 100},
    password: {type: Number, require: true}
})

//const usuarios =  mongoose.model(usuarioCollection, usuarioSchema);
//module.exports = usuarios;

module.exports = mongoose.model(usuarioCollection, usuarioSchema);


