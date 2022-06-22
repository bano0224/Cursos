

export const printObject = ( argument: any ) => {
    console.log(argument)
}

export function genericFunction<T>( argument: T ):T {
    //con la T le voy a estar diciendo que va a recibir un tipo de dato genérico
    return argument;
}

export const genericFunctionArrow = <T>( argument: T ) => argument;