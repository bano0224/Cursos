(() => {

    let avenger: any = 123;
    let exists;
    let power: string;

    avenger = 'Dr Strange';
    console.log( avenger.charAt(0))

    console.log( (avenger as string).charAt(0)) // con esto le podemos decir que lo trate como un string
    console.log( (<number>avenger).toFixed(2)) // esta es otra forma de castear

    avenger = 150.35748362;
    console.log( avenger.toFixed(2))

})();