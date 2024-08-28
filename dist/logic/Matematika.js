"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.math = void 0;
/**
 * name
 */
var Matematika = /** @class */ (function () {
    function Matematika() {
    }
    Matematika.prototype.RumusPenambahan = function (a, b) {
        console.log('coba test print' + a);
        return (a + b);
    };
    Matematika.prototype.RumusPengurangan = function (a, b) {
        return (a - b);
    };
    Matematika.prototype.RumusPembagian = function (a, b) {
        return (a / b);
    };
    Matematika.prototype.RumusPerkalian = function (a, b) {
        return (a * b);
    };
    return Matematika;
}());
exports.math = new Matematika();
//# sourceMappingURL=Matematika.js.map