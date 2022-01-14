const express = require('express'); // importar express
const router = express.Router(); //crear router
const frase = require('./frase.js') //importo frase para poder usar el "obj"

//GET '/api/palabras/:pos': devuelve un objeto que como campo ‘buscada’ contenga la palabra hallada 
//en la frase en la posición dada 
router.get('/:pos',(req,res)=>{
    let pos = parseInt(req.params.pos);
    let arrFrase =[];
    if(frase.obj.frase === undefined){
        res.send({error:"Sin frase"})
    }
    else{
        arrFrase = frase.obj.frase.split(" "); //creo array nuevo separando por espacios para luego buscar x la posicion ingresada como parametro
        !isNaN(pos) && pos > 0 && pos <= arrFrase.length ? res.status(200).send({frase:frase.obj.frase, buscado:arrFrase[pos-1]}) : res.status(404).send({error:"Fuera de rango"});
    }
});

//POST '/api/palabras': recibe un objeto con una palabra bajo el campo ‘palabra’ 
//y la agrega al final de la frase. 
//Devuelve un objeto que como campo ‘agregada’ contenga la palabra agregada, 
//y en el campo ‘pos’ la posición en que se agregó dicha palabra
router.post("",(req,res)=>{
    let arrFrase =[];
    if(frase.obj.frase === undefined){
        res.send({error:"Sin frase"})
    }
    else{
        //obtengo los valores del body
        let nuevaPalabra = req.body.palabra;

        //creo array con las palabras de la frase, por eso separo por espacio con split
        arrFrase = frase.obj.frase.split(" "); 
        // agrego la nueva palabra al array con las palabras de la frase inicial        
        arrFrase.push(nuevaPalabra); 

        // armo la frase final con la nueva palagra, desde el array voy agregando espacio y armo string
        let fraseFinal = arrFrase.reduce((acum,previo)=> acum=acum +" "+ previo);

        //armo el obj a mostrar 
        let obj = {
            fraseInicial:frase.obj.frase,
            fraseFinal:fraseFinal,
            pos:arrFrase.length
        }; 

        // devuelv el obj 
        res.status(200).send(obj);     
    }
});

//PUT '/api/palabras/:pos': recibe un objeto con una palabra bajo el campo ‘palabra’ 
//y reemplaza en la frase aquella hallada en la posición dada. 
//Devuelve un objeto que como campo ‘actualizada’ contenga la nueva palabra, 
//y en el campo ‘anterior’ la anterior.
router.put('/:pos',(req,res)=>{

    if(frase.obj.frase === undefined){
        res.send({error:"Sin frase"})
    }
    else{
        //creo array con las palabras de la frase, por eso separo por espacio con split
        let arrFrase = frase.obj.frase.split(" ");
        
        //obtengo los valores por parametro
        let pos = parseInt(req.params.pos); //posicion a reemplazar

        if(!isNaN(pos) && pos > 0 && pos <= arrFrase.length){ 
            
            //reemplazo la nueva palabra en la frase actual
            arrFrase[pos-1] =  req.body.palabra; //reemplazo en array
            let fraseFinal = arrFrase.reduce((acum,previo)=> acum=acum +" "+ previo); //vuelvo armar la frase como string

            //creo y armo el objeto con valores a mostrar
            let obj = {
                Anterior:frase.obj.frase,
                Actualizada: fraseFinal,
                Posicion:pos
            };
            //muestro el objeto creado
            res.status(200).send(obj);
        }else{
            res.status(404).send({error:"Fuera de rango"});
        }       
    }
});

//DELETE '/api/palabras/:pos': elimina una palabra en la frase, según la posición dada 
//(considerar que la primera palabra tiene posición #1).
router.delete('/:pos',(req,res)=>{

    if(frase.obj.frase === undefined){
        res.send({error:"Sin frase"})
    }
    else{
       
        let pos = parseInt(req.params.pos); // obtengo la posicion enviada como parametro
        let arrFrase = frase.obj.frase.split(" "); //creo array con las palabras de la frase

        if(!isNaN(pos) && pos > 0 && pos <= arrFrase.length){

            arrFrase.splice(pos-1,1); // con el (posicion del array, con "1" indico q lo borre lo q hay en esa posicion del 1er parametro)
            let fraseFinal = arrFrase.reduce((acum,previo)=> acum=acum +" "+ previo);
            
            //armo el objeto y lo muestro
            let obj = {
                fraseInicial:frase.obj.frase,
                fraseFinal:fraseFinal
            };
            res.status(200).send(obj);
        }else{
            res.status(404).send({error:"Fuera de rango"});
        }       
    }
});

module.exports = router;