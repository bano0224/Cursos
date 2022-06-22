// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface Vehiculo {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void
}
const conducirBatimovil = ( auto: Vehiculo ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil: Vehiculo = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Villano {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Villano ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface CiudadDeHeroes {
  (ciudadanos: string[]): number
}

const ciudadGotica: CiudadDeHeroes = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface Ciudadano {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: boolean;
  imprimirBio(): void
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Ciudadano {
  public nombre: string;
  public edad: number;
  public sexo: string;
  public estadoCivil: boolean;
  imprimirBio() {
    
  }

}