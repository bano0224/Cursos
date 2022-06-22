(() => {

    let flash: { name: string, age: number, powers: string[], getName?:() => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name;
        }
    }

    /* flash = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super fuerza'],
        getNombre() {
            return this.name;
        }

        //en este caso me arroja error ya que yo no definí esa propiedad con anterioridad
    }
 */

    let superman: { name: string, age: number, powers: string[], getName?:() => string } = {
        name: 'Clark Kent',
        age: 40,
        powers: ['Super velocidad'],
        getName() {
            return this.name;
        }
    }
    
})();