//niveles en array 

let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2)) //el valor de esta propiedad es la profundidad del array

let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value, value *2]));

//trimStart y trimEnd

let hello = '     hello World'
console.log(hello);
console.log(hello.trimStart());

let hola = '  hola mundo   '
console.log(hola);
console.log(hola.trimEnd());

//en es10 no es obligatorio ponerle como evalacion a catch el error
try {
    
} catch {
    error
}

//convertir arreglos en objetos con object.fromentries
let entries = ["name", "Oscar", ["age", 34]];
console.log(Object.fromEntries(entries));

let simbolo1 = `My Symbol`;
let simbolo2 = Symbol(simbolo1);
console.log(simbolo2.description);


