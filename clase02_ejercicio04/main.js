/* 
Realizaremos una función que reciba una cantidad indeterminada de argumentos de entrada 
y devuelva la suma de ellos en un array de un sólo elemento. 
Obtendremos un array que contenga el resultado de 3 operaciones de suma con argumentos varios.
Utilizaremos funciones de ES9: Spread y rest operator
*/

// REST
const {nro1, nro2, ...otrosNros} = {nro1:1, nro2:2, otrosNros1:3, otrosNros2:4}
console.log(nro1); 
console.log(nro2); 
console.log(otrosNros); // devuelve { otrosNros1: 3, otrosNros2: 4 }

//SPREAD --> usando REST definido antes
const numeros = {nro1, nro2, ...otrosNros}
console.log(numeros); //{ nro1: 1, nro2: 2, otrosNros1: 3, otrosNros2: 4 }

// PENDIENTE HACER EJERCICIO!!!
