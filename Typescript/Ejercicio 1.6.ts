const elementoInventario:Array<string | number> = ['tuerca', 11];

// despues lo desestructuramos
const [nombre, cantidad] = elementoInventario;

const mensaje:string = agregarInventario(nombre, cantidad); // Al borrar y escribir devuelta la coma
 // se arregla el error, no logre encontrar porque sucede

console.log('[Ejercicio 1.6]', mensaje);

function agregarInventario(nombre: string, cantidad: number): string {
return `Se agregaron ${cantidad} ${nombre}s al inventario.`;
}