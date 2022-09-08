const entero:Number = 6;
const decimal:Number = 6.66;
const hexadecimal:Number = 0xf00d;
const binario:Number = 0b1010011010;
const octal:Number = 0o744;
const ceroNegativo:Number = -0;
const enRealiadadNumero:Number = NaN;
const mayorNumero:Number = Number.MAX_VALUE;
const elNumeroMasGrande:Number = Infinity;
const miembros: Number[] = [
entero,
decimal,
hexadecimal,
binario,
octal,
ceroNegativo,
enRealiadadNumero,
mayorNumero,
elNumeroMasGrande
];

miembros[0] = +'12345';

console.log('[Ejercicio 1.4]', miembros);