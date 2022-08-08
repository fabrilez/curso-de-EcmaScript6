//Default params y Concatenacion
//Forma en la cual debiamos hacer para establecer variables por defecto antes de ES6

function newFunction(name, age, contry){
    var name = name || 'oscar';
    var age = age || 32;
    var contry = contry || 'MX'
    console.log(name, age, contry);
}

//Esta es la forma que podemos hacer con ES6
function newFunction2(name ='oscar', age = 32, contry = 'MX') {
    console.log(name, age, contry);
}

newFunction2();
newFunction2('Ricardo', '23', 'CO');

//Templates literals
//de esta manera debiamos concatenar los strings para que salgan con espacios,

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;