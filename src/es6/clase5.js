//Clases, Modulos y Generadores

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB
    }
}

const calc = new calculator();

console.log(calc.sum(2, 2))

//import y export
import { hello } from './module.js';

hello();

//generadores

function* helloWorld(){
    if(true){
        yield 'Hello, '
    }
    if (true) {
        yield 'World'
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

//el algoritmo fibonacci esta hecho con generadores
