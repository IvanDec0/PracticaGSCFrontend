abstract class Animal {
    constructor(private name: string) { }

    move(meters: number) {
        console.log(`${this.name} se movio ${meters}m.`);
    }
}

class Snake extends Animal {
    
    move(meters: number = 5) {
        console.log('Deslizandose...');
        super.move(meters);
    }
}

class Pony extends Animal{
    move(meters: number = 60) {
        console.log('Galopando...');
        super.move(meters);
    }
}

// La clase Animal no debe ser instanciable.
// Eliminar o comentar una vez que se logra el error deseado.
//const andrew = new Animal("Andrew el Animal");
//andrew.move(5);

const sammy = new Snake("Sammy la serpiente");
sammy.move();
//console.log(sammy.name); // debe devolver error

const pokey = new Pony("Pokey el pony");
pokey.move(34);
//console.log(pokey.name); // Should devolver error