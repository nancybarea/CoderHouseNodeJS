"use strict";
//Clase abstracta (no tiene instancias) que sera usada por todas las operaciones.
//todas las operaciones deben tener un metodo llamado "resultado" que haga la operacion solicitada
exports.__esModule = true;
exports.Operacion = void 0;
var Operacion = /** @class */ (function () {
    function Operacion(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    return Operacion;
}());
exports.Operacion = Operacion;
