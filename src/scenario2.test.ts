import { rumus } from "./logic/rumus.logic";

test('Rumus Luas Persegi 2', () => {
    expect(rumus.RumusLuasPersegi(4)).toBe(16);
})

test('Rumus Luas Persegi Panjang 2',()=>{
    expect(rumus.RumusPersegiPanjang(8,2)).toBe(16);
})

test('Rumus Luas Segitiga 2',()=>{
    expect(rumus.RumusLuasSegitiga(2,6)).toBe(6);
})

