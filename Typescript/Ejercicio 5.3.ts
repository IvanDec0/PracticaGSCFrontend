class Employee {
    constructor(public title: string, public salary: number) {
    }
}

const employee: Employee = new Employee('Ingeniero', 100000);

console.log('[Ejercicio 5.3]', `El titulo del nuevo empleado es ${employee.title} 
y gana $ ${employee.salary}.`);