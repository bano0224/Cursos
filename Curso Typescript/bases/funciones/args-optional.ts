(() => {

    const fullName = ( firstName:string, lastName?:string ): string => {

        //poniendo un signo de ? en el argumento hacemos que el parámetro no sea obligatorio
        return `${firstName} ${lastName || "no lastName"}` 
    }

    const name = fullName('Tony');

    console.log({name})

})()