function agregarAlCarro(cartItem: CartItem) {
   console.log('[Ejercicio 2.1]', `Agregando "${cartItem.titulo}" al carro de compras.`);
   }
  
   agregarAlCarro({ id: 1, titulo: 'Zapatos de cuero' });
  
   interface CartItem{
      id: number,
      titulo: string,
      idVariante?: number
   }