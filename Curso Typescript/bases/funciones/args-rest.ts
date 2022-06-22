(() => {

    const fullName = ( firstName: string, ...restArgs: string[] ): string => {
        // con el "Restargs" nosotros le vamos a estar diciendo a typescript que puede recibir
        //cualquier otra cantidad de parámetros y que estos van a ser strings
        return `${firstName} ${ restArgs.join(' ')}`
    }

    const superman = fullName('Clark', 'Joseph', 'Kent');

})();