//Clase abstracta (no tiene instancias) que sera usada por todas las operaciones.
//todas las operaciones deben tener un metodo llamado "resultado" que haga la operacion solicitada

export abstract class Operacion {

    protected num1:number;
    protected num2:number;

    protected constructor(num1:number,num2:number){
        this.num1 = num1;
        this.num2 = num2;
    }

    abstract resultado(num1:number,num2:number):number;
}
