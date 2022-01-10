//importo la clase abstracta
import {Resta} from "./cl_resta.js"; //Resta = nombre de la clase en cl_operacion.js
import {Suma} from "./cl_suma.js";

//function OPERACION: recibe 3 parametros: dos numeros y un string que es la operacion a realizar. 
//Debe cargar dinamicamente un modulo para realizar dicho calculo (ejemplo cl_suma.js, cl_resta.js)
//Debe devolver resultado a traves de una promesa 
//usar funcion flecha
export const operacion = (num1:number,num2:number,operacion:string): Promise<any> => new Promise((resolve,reject)=>{
    if(operacion !== "suma" && operacion !== "resta"){  //caso error
        reject(new Error("La operación ingresada no existe."));
    }
    else{  //caso exitoso
        import(`../Modulos/cl_${operacion}.js`).then(respuesta => { //carga dinamica de la operacion, ejemplo ../Modulos/suma.js
            if (operacion == "suma") {
                let cuenta : Suma = new Suma(num1,num2);
                respuesta =  cuenta.resultado();
            }else{ // resta
                let cuenta : Resta = new Resta(num1,num2);
                respuesta =  cuenta.resultado();
            }
            resolve(respuesta);
         }); 
    }    
})
