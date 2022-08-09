//operador de reposo

const obj = {
    name: "Fabrizio",
    age: 21,
    country: "PY"
}

let { country, ...all } = obj;
console.log(all);

//elemento de propagacion

const obj2 = {
    name: "Fabrizio",
    age: 21
}
//Unimos las propiedades del objeto con ... 
const obj3 = {
    ...obj2,
    country: "PY"
}

//caracteristica Promise.Finally

const newFuncion = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Hello World"), 3000)
            : reject(new Error('Test Error'))
    })
}

newFuncion()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))


//regexData, como agruparlos en bloques

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3];

console.log(year, month, day)

