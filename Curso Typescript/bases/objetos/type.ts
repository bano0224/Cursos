(() => {

    type Hero = {
        //el type es una estructura que existe solo en typescript y sirve para poner reglas
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name;
        }
    }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 40,
        powers: ['Super velocidad'],
        getName() {
            return this.name;
        }
    }
    
})();