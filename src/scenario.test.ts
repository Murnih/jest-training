import { rumus } from "./logic/rumus.logic";

test('Rumus Luas Persegi', () => {
    expect(rumus.RumusLuasPersegi(4)).toBe(16);
})

test('Rumus Luas Persegi Panjang',()=>{
    expect(rumus.RumusPersegiPanjang(8,2)).toBe(16);
})

test('Rumus Luas Segitiga',()=>{
    expect(rumus.RumusLuasSegitiga(2,6)).toBe(6);
})

