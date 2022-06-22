(() => {

    class Avenger {

        // al declararla como private, solo voy a tener acceso a ella dentro de la clase
        private name: string;
        public team: string;
        public realName?: string;

        //static es solo posible acceder a ella mencionando a la clase
        //por ej Avenger.avgAge
        static avgAge: number = 35

        constructor( name: string, team: string, realName?: string) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }

    }
    
    const antman: Avenger = new Avenger('Antman', 'Capitán');
})()