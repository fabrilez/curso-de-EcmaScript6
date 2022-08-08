//LET y CONST, multilinea, Spread Operator y Desestructuracion.

//Para imprimir un string con salto de linea anteriormente debiamos hacer algo como esto

var lorem = "Frase inicial de ejemplo \nsegunda frase de multilinea";
//utilizando `` podemos simplemente escribir y dar un salto de linea dentro para que se refleje de esa manera.
let lorem2 = `Otra frase mas epica con ES6
Con salto de linea incluido`;

console.log(lorem);
console.log(lorem2);

//Desestructuracion antes de ES6

let person = {
    name: "Fabrizio",
    age: 21,
    country: 'PY'
}
console.log(person.name, person.age);

//de esta forma se puede hacer despues de ES6

let { name, age, country } = person;
console.log(name, age, country);

//con ES6 podemos cambiar el nombre de las propiedades de un objeto luego de su inicializacion incluso. En este ejemplo tenemos el const usuario que tiene las propiades nombre, edad y plataforma

const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

//aca volvemos a desestructur el objeto y a su vez cambiando el nombre de las propiedades del objeto usuario

// const { nombre: name, edad: age, plataforma: platform } = usuario

// console.log(name)  // 'Andres' 
// console.log(age)  // 23
// console.log(platform)  // 'Platzi'

// console.log(nombre)  //


//el spread operator nos permite "concatenar" elementos de un arreglo, dentro de otro

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];
console.log(education);

//let, var y const
//Diferencias claves: let y const tienen un scope de bloque, mientras var es global. Const es el tipo de variable que no se puede ni re-inicializar ni re-declarar, en el caso de LET se puede re-inicializar pero no re-declarar, y con VAR podes hacer ambos.

//inicializacion y declaracion
var color = "red";
let calle = "avda santisima"
// const ciudad = "Asuncion"
//re-inicializacion
color = "yellow"
//re-declaracion 
var color = "blue"
//re-declarando
// let calle = "Calle 2"
//re-inicializando
calle = "Nueva re-inicializacion para LET"
//re-declarando
const ciudad = "San Antonio"
//re-inicializando
ciudad = "Concepcion"

//El propio editor de visual studio nos muestra un error subrayando las variables de LET Y CONST debido a que no se pueden re-declarar, en el caso de CONST no se puede tampoco re-inicializar.

//otra particular diferencia es que CONST y LET tienen scope de bloque, mientras que var es global, a menos que se inicialice dentro de una funcion.