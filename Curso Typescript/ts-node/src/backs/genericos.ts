/* import { Hero as SuperHero } from "./classes/Hero"; */
/* import * as HeroClasses from './classes/Hero';
import powers, { Power } from './data/power'; */

import { genericFunction, genericFunctionArrow, printObject } from "../generics/generics";
import { Villain, Hero } from "../interfaces";

/* const ironman = new SuperHero('Ironman', 1, 55) */
/* const ironman = new HeroClasses.Hero('Ironman', 1, 55)

console.log(ironman) */

printObject( 123 )
printObject( new Date() )
printObject( {a:1, b:2, c:3} )
printObject( [1,2,3,4,5,6,7,8] )
printObject( 'Hola Mundo' )

const name: string = 'Albano'

/* console.log( genericFunction(3.1416).toFixed(2) )
//las funciones genéricas permiten que Typescript identifique que tipo de dato es el que estamos tratando
console.log( genericFunction(name).toUpperCase() )
console.log( genericFunctionArrow( new Date()).getDate ) */

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log( genericFunctionArrow<Hero>(deadpool).realName )



