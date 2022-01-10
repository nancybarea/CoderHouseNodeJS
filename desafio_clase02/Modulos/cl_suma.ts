//importo la clase abstracta
import {Operacion} from "./cl_operacion.js"; //Operacion = nombre de la clase en cl_operacion.js

//clase de la operacion SUMA
export class Suma extends Operacion{

    constructor(num1:number, num2:number){
       super(num1, num2); // super pq viene de Operacion
    }
    
    resultado() : number {
        return this.num1+this.num2;
    }
}
