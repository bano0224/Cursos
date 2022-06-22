(() => {

    const fullName = ( firstName:string, lastName?:string, upper:boolean = false ): string => {

        //no se puede poner un parámetro obligatorio después de un opcional, los argumentos 
        //opcionales van al final
        if( upper ) {
            return `${firstName} ${lastName || "no lastName"}`.toLocaleUpperCase(); 
        } else {
            return `${firstName} ${lastName || "no lastName"}`
        }
    }

    const name = fullName('Tony');

    console.log({name})

})()