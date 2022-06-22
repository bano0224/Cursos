(() => {

    abstract class Mutante {
        constructor( public name: string,
            public realName: string ) {
            

        }
    }

    class Xmen extends Mutante {

        salvarMundo() {
            return 'Salvar el mundo'
        }
    }
    class Villan extends Mutante {

        conquistarMundo() {
            return 'Conquistar el mundo'
        }
    }

    const wolverine: Xmen = new Xmen('Wolverine', 'Logan')
    const magneto: Villan = new Villan('Magneto', 'Magnus')

    const printName = ( character: Mutante ) => {
        console.log( character.realName );
    }

    printName( wolverine )

})();