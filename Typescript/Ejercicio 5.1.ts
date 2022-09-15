class MC {
    greet(event: string = 'party'): string {
        return `Bienvenido al ${event}`;
    }
}

const mc: MC = new MC();
console.log('[Ejercicio 5.1]', mc.greet('espectaculo'));