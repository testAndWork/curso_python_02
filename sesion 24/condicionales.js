/*  CONDICIONALES EN JS*/

// SENTENCIA IF

let num  = 3;

if(num <  4 ){
    console.log('Felicidades COndicional')
}

// SENTENCIA ELSE
num = -5

if (num > 0){
    console.log('es un numero positivo')
}
else {
    console.log('es un numero negativo')
}

// SENTENCIA ELSE IF 
num = 0

if (num > 0){
    console.log('es un numero positivo')
}
else if (num == 0){
    console.log('el numero es cero')
}
else if (num < 0){
    console.log('El numero es negativo')
}
else {
    console.log('no es un numero')
}

// SENTENCIAS SWITCH

let dayUserInput = prompt('que dia de la semana es hoy?')

let day = dayUserInput.toLowerCase()

switch(day){
    case 'lunes': 
        console.log('Hoy es día Lunes!!!')
        break
    case 'martes': 
        console.log('Hoy es día Martes!!!')
        break
    case 'miercoles': 
        console.log('Hoy es día Miércoles!!!')
        break
    case 'jueves': 
        console.log('Hoy es día Jueves!!!')
        break
    case 'viernes': 
        console.log('Hoy es día Viernes!!!')
        break
    case 'sabado': 
        console.log('Hoy es día Sábado!!!')
        break
    case 'domingo': 
        console.log('Hoy es día Domingo!!!')
        break
    default:
        console.log('Estás seguro que es un dia de la semana?')
}

//OPERADOR TERNARIO
// sintaxis:
// let result = condition ? value 1: value2

let accesAllowed;
let age = prompt('Que edad tienes? ')

if (age >=18 ){
  accesAllowed = true;
} else{
  accesAllowed = false;
}
alert(accesAllowed)

age = prompt('Que edad tienes? ')
let accessGranted = (age >=18) ? true : false;
console.log(accessGranted)