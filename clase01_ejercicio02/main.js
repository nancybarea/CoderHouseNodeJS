/* Ejercicio
Construir una herramienta que permita que diferentes personas puedan llevar cuentas individuales 
sobre algo que deseen contabilizar, al mismo tiempo que nos brinde una contabilidad general 
del total contado. Para ello:
- Definir la clase Contador.
- Cada instancia de contador debe ser identificada con el nombre de la persona responsable de ese conteo.
- Cada instancia inicia su cuenta individual en cero.
- La clase en sí misma posee un valor estático con el que lleva la cuenta de todo lo contado 
por sus instancias, el cual también inicia en cero.
- Definir un método obtenerResponsable que devuelva el nombre del responsable de la instancia.
- Definir un método obtenerCuentaIndividual que devuelva la cantidad contada por la instancia.
- Definir un método obtenerCuentaGlobal que devuelva la cantidad contada por todos los contadores creados hasta el momento.
- Definir el método contar que incremente en uno tanto la cuenta individual como la cuenta general

*/

class Contador{

    constructor (nombre) {
        this.nombre = nombre;
        this.contador = 0;
    }

    static contadorTotal = 0;

    obtenerResponsable () {
        console.log(`El nombre es ${this.nombre}`);
    }

    obtenerCuentaIndividual(){
        console.log(`La cuenta individual es ${this.contador}`);
    }

    obtenerCuentaGlobal(){
        console.log(`La cantidad total es ${Contador.contadorTotal}`);
    }

    contar(){
        this.contador ++;
        Contador.contadorTotal ++;
    }
}

const contadorTelecom = new Contador("Nancy");
const contadorTelefonica = new Contador("Raul");
console.log("Telecom: ");
contadorTelecom.obtenerResponsable;
contadorTelecom.obtenerCuentaIndividual;
console.log("Telefonica");
contadorTelefonica.obtenerResponsable;
contadorTelefonica.obtenerCuentaIndividual;
console.log("incremento en 1 contador Telecom");
contadorTelecom.contar();
console.log("incremento en 2 contador telefonica");
contadorTelefonica.contar();
contadorTelefonica.contar();
console.log("el incremento total es: ");
console.log(Contador.contadorTotal);