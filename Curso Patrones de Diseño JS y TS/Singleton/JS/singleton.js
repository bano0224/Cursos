//Los patrones de diseño pueden ser creacionales, de estructura o de comportamiento

class Singleton {
    constructor() {

        this.random = Math.random();

        if( Singleton.instance ) {
            //Si ya existe la clase creada llamada Singleton, devolvela
            return Singleton.instance;
        }
        //si no existe la clase llamada Singleton, creala
        Singleton.instance = this;
    }
}

const singleton = new Singleton();
const singleton2 = new Singleton()

/* console.log(singleton.random)
console.log(singleton2.random)
console.log(singleton === singleton2) */
//esto devuelve true debido a que en singleton2 no crea la clase nuevamente, sino que devuelve la que ya existe en ese espacio de memoria

class WeekDays {

    daysEs = [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo"
    ]

    daysEn = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]

    constructor(lang) {
        this.lang = lang;

        if(WeekDays.instance) {
            return WeekDays.instance;
        }

        WeekDays.instance = this;
    }

    getDays () {
        return this.lang === "es" ? this.daysEs : this.daysEn;
    }
}

const weekDays = new WeekDays("en");
const weekDays2 = new WeekDays();
console.log(weekDays.getDays());
console.log(weekDays.getDays());