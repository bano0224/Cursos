(() => {

    type Hero = {
        //el type es una estructura que existe solo en typescript y sirve para poner reglas
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let myCustomVariable: (string | number | Hero) = 'Fernando';
})();