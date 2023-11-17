/* 
OPERADORES DE COMPARACION 

mayor que , menor que: x < y ; x < y
mayor o igual que , menor o igual que : x <= y ; x <= y
igual: x == y 
diferente de: !=

Al utilizar estos operadores tengo como resultado un 
valor booleano.
*/

console.log( 2 >= 1)
console.log( 4 != 0)
console.log( 4 != 4)
console.log( 0 == '')
console.log( 0 == ' ')
// comparacion sin cambiar el tipo 
//  int === caracter
console.log( 0 === '') 

console.log( 'a' > 'c')
console.log( 'a' < 'c')
console.log( 'juan' < 'john')
console.log( 'juan' > 'john')
console.log('glee' > 'glow')

console.log( true == 1) 
console.log( false == 0) 
console.log( true === 1) 

let a = 0;
console.log(Boolean(a));

let b ='0';
console.log(Boolean(b));

console.log( a == b);
console.log( a === b);

console.log(undefined == null)
console.log(undefined === null)

console.log(NaN == NaN)
console.log(NaN === NaN)


console.log('hola'.length)
console.log('Mundo'.length)
console.log('hola'.length == 'Mundo'.length)
console.log('hola'.length <= 'Mundo'.length)
console.log('hola'.length >= 'Mundo'.length)
console.log('hola'.length != 'Mundo'.length)
console.log('hola'.length < 'Mundo'.length)

// && OPERADOR and 
const check = 4 > 3 && 10 > 5;
console.log(check)

const check2 = 4 < 3 && 10 > 5;
console.log(check2)

const check3 = 4 > 3 && 10 < 5;
console.log(check3 )


//  || OPERADOR and 
const check4 = 4 > 3 || 10 > 5;
console.log(check4)

const check5 = 4 < 3 || 10 > 5;
console.log(check5)

const check6 = 4 > 3 || 10 < 5;
console.log(check6 )


console.log()
console.log()
console.log()














