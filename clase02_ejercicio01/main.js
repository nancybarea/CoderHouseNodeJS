/*
Dados los siguientes arrays: 
[6,'**',2]   ['**']    [3,'**',3]   [4, '**' ]   [4,'**',5]  [8,'**',2,'**']  [4,'*=',5] 
Realizaremos una función que reciba un array y devuelva el resultado de la operación potenciación 
en caso de poder realizarla. De no ser posible, devolverá null.
Se deberá detectar si el array incluye un ** y tiene un número a cada lado. En ese caso, 
realizar la operación de potenciación del número localizado a la izquierda del ** elevado al exponente 
que indica el número de la derecha. 
Utilizaremos las funciones de ES7 includes y **
*/

function potencia ( a ) {
    
    if ( a.includes('**') ) {
        let po = a.indexOf('**'); // obtengo la posicion del ** para saber luego el nro anterior y el posterior
        if ( po == 0 || po == a.length-1 ){  // valido que no sea ni la primer ni ultima posicion, ya que debe tener dos nros a los costados
            return null;
        }
        let n1 = a[po-1];
        let n2 = a[po+1];
        if ( typeof (n1) != 'number' || typeof(n2) != 'number' ) { // valido que sea nro lo que se encuentra antes y despues del **
            return null;
        }
        return n1 ** n2;
    } else {
        return null;
    }
    
}

const a1 = "6**2";
console.log(potencia(a1));
const a2 = ['hola', "8",'**',2,'**'];
console.log(potencia(a2));
const a3 = ['hola', 8,'**',2,'**'];
console.log(potencia(a3));
