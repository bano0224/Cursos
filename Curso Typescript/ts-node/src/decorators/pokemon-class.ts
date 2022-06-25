
function printToConsole(constructor: Function) {
    console.log(constructor)
}

const printToConsoleConditional = ( print: boolean = false): Function => {
    if( print ) {
        return printToConsole;
    } else {
        return () => {}
    }
}

const bloquearPrototipo = function( constructor: Function ) {
    Object.seal( constructor )
    Object.seal( constructor.prototype )
}

//Este decorador se utiliza para limitar el id que le puedo pasar. Es un factory decorator
function CheckValidPokemon() {
    //descriptor solo puede ser obtenido en caso que el decorador se aplique a un método
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        
        //se va a disparar con los argumentos de la función con la que se esté llamando
        const originalMethod = descriptor.value;
        descriptor.value = ( id: number ) => {
            if( id < 1 || id > 800) {
                return console.error(' El id del pokemon debe estar entre 1 y 800')
            } else {
                return originalMethod(id)
            }
        }
    }
}

//Este decorador es para que una propiedad declarada como pública no pueda ser modificada
function readOnly( isWritable: boolean = true ): Function {
    return function( target: any, propertyKey: string) {

        //si no le pongo nada a este descriptor voy a estar bloqueando todo a lo que s ele aplique
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this)
                return 'Albano'
            },
            set( this, val ) {
                //console.log( this, val )
                Object.defineProperty( this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }
        return descriptor;
    }
}

/* @bloquearPrototipo */
/* @printToConsoleConditional( true ) */
export class Pokemon {

    @readOnly( false )
    public publicApi: string = 'https://pokeapi.co';


    constructor(
        public name: string
    ) {
        
    }
    @CheckValidPokemon()
    savePokemonToDb( id: number ) {
        console.log(`Pokemon guardado en la base de datos ${ id }`)
    }
}