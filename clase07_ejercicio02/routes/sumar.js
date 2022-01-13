const express = require('express'); // importar express
const router = express.Router(); //crear router

//b) Ruta get '/api/sumar?num1=5&num2=62) 
router.get("/",(req,res)=>{    // por QUERY

    //igual que el caso a) pero con req.query
    const suma = parseInt(req.query.numA) + parseInt(req.query.numB)
    res.send({suma});

    /*version mejorada
    let query = req.query;
    let resultadoSuma = 0;
    console.log(query);
    for (const num in query) {
        resultadoSuma+= parseInt(query[num]);
    }
    !isNaN(resultadoSuma) ? res.status(200).send({resultadoSuma}) : res.status(404).send({error:"Datos invalidos"});
    */

});

//a) Ruta get '/api/sumar/5/6
router.get("/:numA/:numB",(req,res)=>{    // por PARAMS
   
    //res.send(req.params.numA + req.params.numB); // si mando 5/1 --> devuelve 51 --> o sea concatena
    const suma = parseInt(req.params.numA) + parseInt(req.params.numB)
    //res.send(suma); // devuelve error pq tengo q mandar un string o json
    res.send({suma}); //devuelvo un objeto con la suma ejemplo {"suma":5}

    /*version mejorada con validaciones
    let opA = parseInt(req.params.numA);
    let opB = parseInt(req.params.numB);
    !isNaN(opA) && !isNaN(opB) ? res.status(200).send({resultadoSuma: opA+opB}) : res.status(404).send({error:"Datos invalidos"});
    */

});

module.exports = router;