const express = require("express");
const router = express.Router();

const arrPersonas = [];


router.get("/",(req, res)=>{
    res.status(200).send(JSON.stringify(arrPersonas)); //no hace falta hacer stringify (convierte a json) ya que lo hace express
});

router.post("/",(req,res)=>{

    if(req.body.nombre !== undefined && req.body.apellido !== undefined && req.body.edad !== undefined){
        let obj = req.body;
        arrPersonas.push(obj); //conviene mandar cada item del objeto , no el objeto completo
        res.status(201).send({status:"ok",datos:arrPersonas});
    }
    else{
        res.status(400).send({error:"No se recibio alguno de los parametros para la carga de elementos"});
    }

});

module.exports = router;