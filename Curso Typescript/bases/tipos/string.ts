(() => {

    const batman: string = 'Batman';
    const linternaVerde: string = 'Linterna Verde';
    const volcanNegro: string = `Héore: Volcán Negro`;

    console.log(` I'm ${ batman }`);

    console.log( batman[10]?.toUpperCase() || 'No está presente');

})();