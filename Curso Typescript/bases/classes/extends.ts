(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ) {
            console.log('Constructor Avenger llamado')
        }
        //si coloco el método como protected en lugar de private, es como que sigue siendo privado,
        //pero puedo acceder a él desde las clases que extiendan de la clase padre
        protected getFullName() {
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger {
        constructor( name: string, realName: string, public isMutant: boolean ) {
            //si decido ponerle un constructor a Xmen si o si debo llamar al super pa que no se queje
            super( name, realName )
        }

        getFullNameDesdeXmen () {
            console.log( super.getFullName() )
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true)
    //al ser una instancia de la clase Xmen y esta extender de Avenger si o si le tengo que 
    //pasar los dos parámetros que tiene la clase Avenger en su constructor
    

})()