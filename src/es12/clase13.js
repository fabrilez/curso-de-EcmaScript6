//caracteristicas de 2021

//diferencia entre replace old y actual 

const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";

const replacedString = string.replace('JavaScript', 'Python')

console.log(replacedString);

//desde es12 

const replacedString2 = string.replaceAll('JavaScript', 'Python');
console.log(replacedString2);

//metodos privados para las clases, getter y iters 

class message {
    #show(val){ //se le pone el hasgtag para indicar que es un metodo privado
        console.log(val)
    }
    // get #add(val){
        
    // }
}

const message1 = new message();
message1.show("Hola")

const promise1 = new Promise((resolve, reject) => reject('1'));
const promise2 = new Promise((resolve, reject) => resolve('2'));
const promise3 = new Promise((resolve, reject) => resolve('3'));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response))

//weakref

class anyClass {
    constructor(element){
        this.ref = new WeakRef(element)
    }
}

//operadores logico

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);
console.log(isTrue ||= isFalse);
console.log(isTrue ??= isFalse);
