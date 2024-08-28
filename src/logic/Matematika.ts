/**
 * name
 */
class Matematika{

    public RumusPenambahan(a:number, b:number){
        console.log('coba test print'+a);
        return (a + b);
    }

    public RumusPengurangan(a:number, b:number){
        return (a - b);
    }

    public RumusPembagian(a:number, b:number){
        return (a / b);
    }

    public RumusPerkalian(a:number, b:number){
        return (a * b);
    }

}

export const math = new Matematika();
