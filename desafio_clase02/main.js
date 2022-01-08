var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//importo la funcion operacion
var resultado = require("./Modulos/operacion.js");
//Funcion OPERACIONES: llama a la funcion OPERACION con casos de pruebas
function operaciones() {
    return __awaiter(this, void 0, void 0, function () {
        var c1_num1, c1_num2, c1_operacion, c1_resultadoOperacion, c2_num1, c2_num2, c2_operacion, c2_resultadoOperacion, c3_num1, c3_num2, c3_operacion, c3_resultadoOperacion, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    //caso de prueba operacion SUMA
                    console.log("INICIO --> CASO DE PRUEBA 1");
                    c1_num1 = 10;
                    c1_num2 = 5;
                    c1_operacion = "suma";
                    return [4 /*yield*/, resultado.operacion(c1_num1, c1_num2, c1_operacion)];
                case 1:
                    c1_resultadoOperacion = _b.sent();
                    console.log("El resultado de la operacion \"".concat(c1_operacion, "\" entre ").concat(c1_num1, " y ").concat(c1_num2, " es igual a ").concat(c1_resultadoOperacion));
                    console.log("FIN -->  CASO DE PRUEBA 1");
                    //caso de prueba operacion RESTA
                    console.log("INICIO --> CASO DE PRUEBA 2");
                    c2_num1 = 10;
                    c2_num2 = 5;
                    c2_operacion = "resta";
                    return [4 /*yield*/, resultado.operacion(c2_num1, c2_num2, c2_operacion)];
                case 2:
                    c2_resultadoOperacion = _b.sent();
                    console.log("El resultado de la operacion \"".concat(c2_operacion, "\" entre ").concat(c2_num1, " y ").concat(c2_num2, " es igual a ").concat(c2_resultadoOperacion));
                    console.log("FIN -->  CASO DE PRUEBA 2");
                    //caso de prueba operacion NO EXISTE
                    console.log("INICIO --> CASO DE PRUEBA 3");
                    c3_num1 = 10;
                    c3_num2 = 5;
                    c3_operacion = "dividir";
                    return [4 /*yield*/, resultado.operacion(c3_num1, c3_num2, c3_operacion)];
                case 3:
                    c3_resultadoOperacion = _b.sent();
                    console.log("El resultado de la operacion \"".concat(c3_operacion, "\" entre ").concat(c3_num1, " y ").concat(c3_num2, " es igual a ").concat(c3_resultadoOperacion));
                    console.log("FIN -->  CASO DE PRUEBA 3");
                    return [3 /*break*/, 5];
                case 4:
                    _a = _b.sent();
                    console.error("Error en la función operaciones");
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
//Desafio:  llamar funcion OPERACIONES: casos de prueba, que llame a funcion OPERACION: resuelve casos de prueba
operaciones();
