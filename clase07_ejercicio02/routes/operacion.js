const express = require('express'); // importar express
const router = express.Router(); //crear router

//c) Ruta get '/api/operacion/5+6
router.get("/:suma",(req,res)=>{    
    let arrSuma = req.params.suma.split("+");
    const suma = parseInt(arrSuma[0]) + parseInt(arrSuma[1])    
    res.send({suma}); 

    /*version mejorada
    let arrSuma = req.params.suma.split("+");
    let resultadoSuma = arrSuma.reduce((acum,previo)=>acum+=parseInt(previo),0);
    res.status(200).send({resultadoSuma});
    */
});

module.exports = router; // exportar router