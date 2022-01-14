const express = require('express'); // importar express
const router = express.Router(); //crear router

const obj = {}; //defino el objeto a exportar

//GET '/api/frase': devuelve un objeto que como campo ‘frase’ contenga la frase completa
router.get("/:frase",(req,res)=>{
    obj.frase = req.params.frase;
    res.send(obj);
});

module.exports = router; 
module.exports.obj = obj;  // exporto el objeto para poder ser usado en palabras.js