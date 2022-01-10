/*
Realizaremos una función que reciba un objeto, y muestre cada dos segundos sus claves y valores 
en este formato: [clave, valor]. 
El proceso no debe ser bloqueante. 
Utilizaremos las nuevas funciones de ES8: entries, async await 

nota: async await   NO FUE RESUELTO PQ EL PROFE DIJO Q NO SABE Q QUISIERON PONER CON ESO.
*/

//funcion que muestra el objeto en formato [clave, valor]  (en caso de solo querer mostrar valor usar metodo Object.value)
function mostrar1(objeto){
    console.log(Object.entries(objeto));
}

//idem mostrar1 pero con intervalo de tiempo: EL PEDIDO EN EL EJERCICIO
function mostrar2(objeto){
    setInterval ( () => 
        {
        console.log(Object.entries(objeto));
        },
        2000
    )
}


//defino el objeto a mostrar (testing)
let objetoMostrar1 = {
    clave1: "valor 1", 
    clave2: 2,
}
let objetoMostrar2 = {
    a: 1, 
    b: 2,
}

//invoco la funcion para mostrar el objeto
mostrar1(objetoMostrar1);
mostrar2(objetoMostrar2);

