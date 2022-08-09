//metodo entries para ver como esta estructurado una matriz/objeto en forma de array

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data)
console.log(entries);
//antes de es8 habia que convertir un objeto a un array antes de poder utilizar metodos como length para poder hacer validaciones, con el metodo entries es mucho mas facil esta tarea
console.log(entries.length);

//values

const values = Object.values(data);
console.log(values);
console.log(values.length)


const string = 'hello';
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, ' -----'))

//si dejamos la coma al final de la ultima propiedad y valor de un objeto establecemos que pueden ir mas propiedades como tambien que no
const obj = {
    name: 'Fabrizio',
}