import { math } from "./logic/Matematika";

describe("Math functions", () => {
    it("should add two numbers correctly", () => {
        expect(math.RumusPenambahan(1, 2)).toEqual(3);
    });

    it("should minus two numbers correctly", () => {
      expect(math.RumusPengurangan(8, 5)).toEqual(3);
    });

    it("should divide two numbers correctly", () => {
      expect(math.RumusPembagian(8, 2)).toEqual(4);
    });

    it("should time two numbers correctly", () => {
      expect(math.RumusPerkalian(7, 8)).toEqual(56);
    });

    // Contoh
});



