//Arrows Functions, Promesas y parametros de objetos

//es5 necesitabamos definir el nombre del parametro antes de agregarle un valor. 
let name = 'Fabrizio';
let age = "21";

ob1 = { name: name, age:age }

//con es6 podemos hacerlo asi, sin especificar el nombre de la propiedad

obj2 = { name, age };
console.log(obj2);

//ARROW FUNCTIONS

//antes de su adision a javascript, no podiamos usar arrows functions para pasar funciones anonimas, por ejemplo:

const names = [
    {name: "Fabrizio", age: 21},
    {name: "Sofia", age: 16},
    {name: "Liti", age: 30},
    {name: "Fabiola", age: 28}
]

let listOfNames = names.map(function (item){
    console.log(item.name);
});

//de esta manera podemos reemplazarlo y utilizar arrows functions

let listOfNames2 = names.map(item => console.log(item.name));

//este es cuando queremos recibir 2 parametros
// let listOfNames3 = (names, age) => {
//     ...
// }

//este template es cuando solo queremos recibir un paramento
// const listOfNames4 = name => {
//     ...
// }

const square = num => num * num;

//Tenemos otra novedad con el this, las funciones flechas heredan el this del scope del bloque en el que son declaradas. A diferencia de las funciones regulares donde el this tiene el scope de la función. Ejemplo.

{
    this.a = 'Hola';
    
    const fun1 = () => {
        console.log(this.a) // this.a es "Hola"
    }

    const fun2 = function() {
        console.log(this.a); // this.a es undefined
    }

    fun1(); // Output: Hola
    fun2(); // Output: undefined
}

//promises o promesas, estos nos ayudan a trabajar el asincronismo, debido a que Javascript no es un lenguaje que ejecute varios elementos a la vez, tambien ayuda a resolver el problema con los callbacks 

//declarando e inicializando la promesa

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hello!');
        } else {
            reject('upss!');
        }
    });
}

//ejectandolo

helloPromise()
    .then(response => console.log(response))
    //podemos anidar tantos then como queramos en caso de necesitarlo
    //.then(() => console.log('hola'))
    .catch(error => console.log(error));