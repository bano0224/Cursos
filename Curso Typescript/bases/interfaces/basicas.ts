(() => {

    //al día de la fecha se comportan muy parecido a los tipos, solo que los tipos
    // llevan el igual después del nombre. La única diferencia es que los tipos no son
    // extendibles y las clases si
    interface Hero {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

})();