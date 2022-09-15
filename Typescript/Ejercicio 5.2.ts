class Person {
    constructor(public name: string, public age: number) {
    }
}

const jane: Person = new Person('Juan', 31);

console.log('[Ejercicio 5.2]', `El nombre de la nueva persona es ${jane.name}.`);