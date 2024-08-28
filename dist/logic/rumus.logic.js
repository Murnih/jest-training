"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rumus = void 0;
var RumusBangunDatar = /** @class */ (function () {
    function RumusBangunDatar() {
    }
    RumusBangunDatar.prototype.RumusLuasPersegi = function (sisi) {
        console.log('Masuk', sisi);
        return sisi * sisi;
    };
    RumusBangunDatar.prototype.RumusPersegiPanjang = function (panjang, lebar) {
        return panjang * lebar;
    };
    RumusBangunDatar.prototype.RumusLuasSegitiga = function (alas, tinggi) {
        return (alas * tinggi) / 2;
    };
    return RumusBangunDatar;
}());
exports.rumus = new RumusBangunDatar();
//# sourceMappingURL=rumus.logic.js.map