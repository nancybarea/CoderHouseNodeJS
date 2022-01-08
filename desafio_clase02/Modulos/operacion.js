"use strict";
exports.__esModule = true;
exports.operacion = void 0;
//function OPERACION: recibe 3 parametros: dos numeros y un string que es la operacion a realizar. 
//Debe cargar dinamicamente un modulo para realizar dicho calculo (ejemplo cl_suma.js, cl_resta.js)
//Debe devolver resultado a traves de una promesa 
//usar funcion flecha
var operacion = function (num1, num2, operacion) { return new Promise(function (resolve, reject) {
    if (operacion !== "suma" && operacion !== "resta") { //caso error
        reject(new Error("La operación ingresada no existe."));
    }
    else { //caso exitoso
        Promise.resolve().then(function () { return require("../Modulos/cl_".concat(operacion, ".js")); }).then(function (resultadoOperacion) {
            var respuesta = resultadoOperacion.resultado(num1, num2);
            resolve(respuesta);
        });
    }
}); };
exports.operacion = operacion;
