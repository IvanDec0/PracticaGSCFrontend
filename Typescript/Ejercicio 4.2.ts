function padLeft(value: string, padding: number | string): (string) {
// si padding es un numero, return `${Array(padding + 1).join(' ')}${value}`
// si padding es una cadena, return padding + value
if (typeof(padding) === "number") {
    return `${Array(padding + 1).join(' ')}${value}`
}
else{
    return padding + value
}
}

console.log('[Ejercicio 4.2]', `
${padLeft('', 0)}
${padLeft('', '')}
${padLeft('', '')}
${padLeft('', '')}
${padLeft('', '')}
`);