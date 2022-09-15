interface EsquemaUsuario {
    readonly id: number;
    nombre: string;
}

class Usuario implements EsquemaUsuario {
    constructor(public nombre: string, readonly id: number) { }
}

const usuario = new Usuario('Perro', 1);

console.log(usuario.id); // legible

usuario.nombre = 'Harold'; // asignable
usuario.id = 5; // no asignable

console.log('[Ejercicio 2.4]', `Usuario:`, usuario)