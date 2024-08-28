"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rumus_logic_1 = require("./logic/rumus.logic");
test('Rumus Luas Persegi 2', function () {
    expect(rumus_logic_1.rumus.RumusLuasPersegi(4)).toBe(16);
});
test('Rumus Luas Persegi Panjang 2', function () {
    expect(rumus_logic_1.rumus.RumusPersegiPanjang(8, 2)).toBe(16);
});
test('Rumus Luas Segitiga 2', function () {
    expect(rumus_logic_1.rumus.RumusLuasSegitiga(2, 6)).toBe(6);
});
//# sourceMappingURL=scenario2.test.js.map