(() => {

    function callBatman(): void {
        // si yo se que mi función no va a retornar nada debo ponerle
        //el tipo de valor void
    }

    const callSuperman = (): void => {
        
    }

    const a = callBatman() // acá podemos ver que a devuelve un tipo de valor
    //void, es decir que devuelve un undefined, o que está vacío
    console.log(a)
})();