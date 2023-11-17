console.log('hola mundo')

console.log('prueba');


/* Términos Uniario , Binario */

let var1 = 1;

var1 = -var1; // Aplicando la negación unaria.

console.log(var1);

let x = 2, y = 3;

console.log('Resultado es: ',y-x);  // operacion binaria 

/* Operadores Matemáticos 

Suma : +
Resta: -
Multiplicación: *
División: /
Resto: %
Potenciación: **
*/

let numOne = 4
let numTwo = 6

let sum = numOne + numTwo 
console.log(sum)

let diff = numOne - numTwo 

console.log(diff)

let mult = numOne * numTwo 
console.log(mult)

let  remainder = numOne % numTwo

console.log(remainder)

let powerof = numOne ** numTwo
console.log(powerof)

console.log(4 ** 2 - 4 ** (1/2) )

/* CALCULANDO EL AREA DE UN CIRCULO */

const PI = 3.14
let radius  = 100

//fórmula para calcular el area  

const areaCircle = PI * radius ** 2
console.log(areaCircle)

console.log(`El valor del área del Círculo es ${areaCircle}` )

/* CONCATENACION DE CADENAS CON EL 
    OPERADOR BINARIO +  */

let str = 'my' + ' '+'string'
console.log(str)

console.log(2 + 2 + '1')

/* CONVERSION NUMERICA, CON 
EL OPERADOR UNARIO + */

let z = 1 , w = -2;
console.log(z + w);

let zz = '1', ww = '-2';
let suma = zz + ww
console.log(suma)
console.log(typeof suma)

console.log('Resultado de suma:',+zz + +ww)

/* Jerarquia de operadores  */


let compute = 2 ** 2 + 1 - 5 * 3;
console.log(`El resultado del orden de operacion es:  ${compute}`);

let a =2, b = 3;
let task = 3 - 4 *(a = b +1);
console.log(task)

let n1, n2, n3;
n1 = n2 = n3 = 3 + 4;
console.log(n1, n2 , n3);

/* MODIFICACIONES ON THE GO */

let n = 3
n = n + 5
n = n * 2
n += 5
n *= 2

console.log(n)

let num1 = 2;
num1  *= 3 + 5

console.log(num1)

let num2 = 2;
num2  -= 3 + 5

console.log(num2)

/* Incremento/decremento */

// tilizandolo como sufijo
let  counter = 4;
counter++;
console.log(counter);

counter--;
console.log(counter);

// Utilizandolo como prefijo
++counter;
console.log( counter);

--counter;
console.log(counter);

let aumento = ++counter;
console.log(aumento);


aumento = counter++;
console.log(aumento + 1);

 // fijarse en la notacion sufijo y prefijo
 // ya que tiene priorida en la asignación
console.log(aumento++ * 3); 

console.log(++aumento * 3);


// UTILIZANDO EL OPERADOR ,

let num3 = (1 + 2, 3 + 4 , 5 + 6);
console.log(num3)

/*
num3 = 3
num3 = 7 
num3 = 11 este es el ultimo valor asignado.
*/


















