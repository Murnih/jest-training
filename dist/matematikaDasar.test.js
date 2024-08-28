"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Matematika_1 = require("./logic/Matematika");
describe("Math functions", function () {
    it("should add two numbers correctly", function () {
        expect(Matematika_1.math.RumusPenambahan(1, 2)).toEqual(3);
    });
    it("should minus two numbers correctly", function () {
        expect(Matematika_1.math.RumusPengurangan(8, 5)).toEqual(3);
    });
    it("should divide two numbers correctly", function () {
        expect(Matematika_1.math.RumusPembagian(8, 2)).toEqual(4);
    });
    it("should time two numbers correctly", function () {
        expect(Matematika_1.math.RumusPerkalian(7, 8)).toEqual(56);
    });
});
//# sourceMappingURL=matematikaDasar.test.js.map