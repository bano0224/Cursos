(() => {

    class Avenger {

        // al declararla como private, solo voy a tener acceso a ella dentro de la clase
        //private name: string;
        //private team: string;
        //public realName?: string;

        //static es solo posible acceder a ella mencionando a la clase
        //por ej Avenger.avgAge
        static avgAge: number = 35
        static getAvgAge () {
            return this.name;
            //si pongo this.name y llamo a este método estático me va a devolver el nombre de la clase
        }

        constructor( private name: string, private team: string, public realName?: string ) {
        }

        bio() {
            return `${this.name}  (${this.team})`
        }

    }
    
    const antman: Avenger = new Avenger('Antman', 'Capitán');
})()