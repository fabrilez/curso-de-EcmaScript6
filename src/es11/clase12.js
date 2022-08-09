// bigInt 2 a la 53

const bigNumber = 9007199254740991n;

const anotherBigNumber = BigInt(9007199254740991);

console.log(bigNumber);
console.log(anotherBigNumber);

//metodo allSettLed para promesas, esta el metodo all que esta rechaza todo cuando una de las promesas sean rechazadas. allSettLed va a ejecutar todas las promesas se rechacen algunas o no

const promise1 = new Promise((resolve, reject) => reject('reject'))
const promise2 = new Promise((resolve, reject) => resolve('resolve'))
const promise3 = new Promise((resolve, reject) => resolve('resolve1'))

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

//global this

console.log(globalThis);

//operador nulo, es nulo este valor ?? entonces ejecuta esto 
const foo = null ?? 'default string';
console.log(foo);

const usuario1 = {}
const nombre1 = usuario1.name ?? "Andres"

const usuario2 = {name: "Juan"}
const nombre2 = usuario2.name ?? "Andres"

console.log(nombre1) // 'Andres' 
console.log(nombre2) // 'Juan'

//optional chaining

const user = {};

console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log(`email`);

}else {
    console.log(`fail`)
}

