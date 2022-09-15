class Persona implements IPersona {

    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
    }
   
    const juan = new Persona('Juan', 31);
   
    console.log('[Ejercicio 2.2]', `${juan.nombre} tiene ${juan.edad} anios.`);
   
    interface IPersona{
       nombre: string,
       edad: number
    }