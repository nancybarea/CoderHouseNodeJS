//importo la funcion operacion
let resultado = require("./Modulos/operacion.js");

//Funcion OPERACIONES: llama a la funcion OPERACION con casos de pruebas
async function operaciones () 
{  
    try{
        //caso de prueba operacion SUMA
        console.log("INICIO --> CASO DE PRUEBA 1");        
        let c1_num1 = 10
        let c1_num2 = 5
        let c1_operacion = "suma"
        let c1_resultadoOperacion = await resultado.operacion(c1_num1,c1_num2,c1_operacion);
        console.log(`El resultado de la operacion "${c1_operacion}" entre ${c1_num1} y ${c1_num2} es igual a ${c1_resultadoOperacion}`);
        console.log("FIN -->  CASO DE PRUEBA 1"); 
        
        //caso de prueba operacion RESTA
        console.log("INICIO --> CASO DE PRUEBA 2");
        let c2_num1 = 10;
        let c2_num2 = 5;
        let c2_operacion = "resta";
        let c2_resultadoOperacion = await resultado.operacion(c2_num1,c2_num2,c2_operacion);
        console.log(`El resultado de la operacion "${c2_operacion}" entre ${c2_num1} y ${c2_num2} es igual a ${c2_resultadoOperacion}`);
        console.log("FIN -->  CASO DE PRUEBA 2");  

        //caso de prueba operacion NO EXISTE
        console.log("INICIO --> CASO DE PRUEBA 3"); 
        let c3_num1 = 10;
        let c3_num2 = 5;
        let c3_operacion = "dividir";
        let c3_resultadoOperacion = await resultado.operacion(c3_num1,c3_num2,c3_operacion);
        console.log(`El resultado de la operacion "${c3_operacion}" entre ${c3_num1} y ${c3_num2} es igual a ${c3_resultadoOperacion}`);
        console.log("FIN -->  CASO DE PRUEBA 3");  
        }
    catch{
        console.error("Error en la función operaciones");
    } 
}

//Desafio:  llamar funcion OPERACIONES: casos de prueba, que llame a funcion OPERACION: resuelve casos de prueba
operaciones();