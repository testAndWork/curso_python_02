

// FUNCIONES

function numCuadrado( ){
    let n =3
    console.log('El número al cuadarado es: ')
    console.log(n**2)
}

numCuadrado()

function numCuadrado2(n){
    console.log('El número al cuadrado es: ', n**2)
}

function numC(n){
    return n**2
}
numCuadrado2(5)
numCuadrado2(3)
mult = (numC(2) * numC(3))
console.log('la multipliucacion de los cuadrados es: ',mult)

let cuadrado = numC(6)
console.log(cuadrado)

function printArray(arr){
    console.log(arr)
}

const animeName = ['Nami','Luffy','Zoro','Chopper','Garp' ,'Robin']

printArray(animeName)

function printOfNames(arr){
    for(nam of arr){
        console.log('El nombre es: ', nam)
    }
}

printOfNames(animeName)

// FUNCIONES ANONIMAS

const calculoAnonima = function(){
    console.log('Hola soy una funciona anónima')
}

calculoAnonima()

const calculoArea = function(base, altura){
    return base*altura
}
console.log('el área es : ',calculoArea(4,5))

const numPositivo = function(num){
    if(num > 0){
        console.log('El numero es positivo')
    }
}

numPositivo(-4)
numPositivo(4)


str1 = 'hola'
str2 = 'mundo'

const concat = function(a,b){
    return a + ' ' + b
}

frase = concat(str1,str2)
console.log(frase)

// AUTOINVOCANDO FUNCIONES

let cuadro = (function(n){
    console.log(n*n)
})(4)


//FUNCIONES FLECHAS
const power = n => n**2

console.log('Las potencia de 4 es: ',power(4))

const printFullName = ( fname, lname) => { 
    return `${fname} ${lname}`
}

console.log( printFullName('Ciudad','Gótica'))

const esPar = numero => numero% 2 ==0

console.log('El numero 8 es par? ',esPar(8))
console.log('El numero 0 es par? ',esPar(0))
console.log('El numero 5 es par? ',esPar(5))


const longitudCadena = str => str.length

console.log(longitudCadena('hola mundo'))
