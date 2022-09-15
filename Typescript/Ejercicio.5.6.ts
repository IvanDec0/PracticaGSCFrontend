class Student {
    
    public static school: string = 'Harry Herpson High School';

    constructor(private name: string) { };

    introduction(): void {
        console.log('[Ejercicio 5.6]', `Hola, mi nombre es ${this.name} y asisto a ${Student.school}`);
    }
}

const student = new Student('Morty');
console.log(Student.school);
student.introduction();