//importo la clase abstracta
import {Operacion} from "./cl_operacion.js";

//clase de la operacion RESTA
class Resta extends Operacion{

    constructor(num1:number, num2:number){
        super(num1, num2);
     }
    
     resultado() : number {
         return this.num1-this.num2;
     }
}

//funcion RESULTADO para poder llamar de operacion
export const resultado = (num1:number, num2:number) : number=>{
    let cuenta : Resta = new Resta(num1,num2);
    return cuenta.resultado();
}