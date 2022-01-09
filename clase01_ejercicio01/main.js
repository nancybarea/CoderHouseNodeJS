//Ejercicio de clase

//1-Definir la función mostrarLista que reciba una lista de datos y muestre su contenido, si no está vacía, 
//o de lo contrario muestre el mensaje “lista vacía”. 
//Luego, invocarla con datos de prueba para verificar que funciona bien en ambos casos.

function mostrarLista(lista) {   
    if (Array.isArray(lista) && lista.length>0){ //solucion en clase x profesor        
        console.log (lista);     
    }else{
        console.log ("lista vacía");    
    }
}
// mostrar la lista vacia
let listaDatos = [];
mostrarLista(listaDatos);
// mostrar la lista con datos
listaDatos = ["dato1", "dato2"];
mostrarLista(listaDatos);


//2-Definir una función anónima que haga lo mismo que la del punto 1, e invocarla inmediatamente, 
//pasando una lista con 3 números como argumento.
// o sea es una funcion IIFE
(function (){
    let listaDatos2 = [1,2,3];
    if (listaDatos2 == null){
        console.log ("lista vacía");
    }else{
        console.log (listaDatos2);    
    }
})()


//3-Definir la función crearMultiplicador que reciba un número y devuelva una función anónima que reciba segundo número 
//y dé como resultado el producto de ambos. Luego, a partir de la función definida, crear dos funciones duplicar y triplicar, 
//y probarlas con diferentes valores
function crearMultiplicador (numero1){
    return function (numero2){
        return numero1 * numero2;
    }
};

const duplicar = crearMultiplicador(2);
console.log(duplicar(2));

const triplicar = crearMultiplicador(duplicar(2));
console.log(triplicar(2));

