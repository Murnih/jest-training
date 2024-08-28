class RumusBangunDatar{

    public RumusLuasPersegi(sisi:number){
        console.log('Masuk', sisi);
        return sisi*sisi;
    }

    public RumusPersegiPanjang(panjang:number, lebar:number){
        return panjang*lebar;
    }

    public RumusLuasSegitiga(alas:number, tinggi:number){
        return (alas*tinggi)/2;
    }
}

export const rumus = new RumusBangunDatar();