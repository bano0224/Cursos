(() => {

    let nada: (boolean | undefined) = undefined;
    //si queremos que sea menos restrictivo con el undefined, en ts.config podemos configurar la
    //propiedad stricNullChecks en false
    console.log(nada)

})();