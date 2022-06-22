(() => {

    /* const numbers: (number | string | boolean)[] = [1, 2, '3', 4, 5] */
    const numbers: number[] = [1, 2, 3, 4, 5] //cuando vemos los corchetes, eso puede indicar que es un arregloo bien una tupla

    numbers.push(11)

    const villians = ['Omega rojo', 'Dormammu', 'Duende verde']

    villians.forEach(v => v.toLocaleUpperCase())

})();