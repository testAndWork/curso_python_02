
// ARREGLOS EN JS

let arreglo_1 = new Array()

arreglo_1 = ['hola', 'mundo']

console.log(arreglo_1)

let arreglo_2 = []

arreglo_2 = [1,2,3,4,5]

console.log(arreglo_2)

arreglo_3 = ['m','a','b','s','d','r','e']

console.log(arreglo_3)

console.log('Posicion 0 = ', arreglo_3[0])
console.log('Posicion 1 = ', arreglo_3[1] )
console.log('Posicion 2 = ', arreglo_3[2] )
console.log('Posicion 5 = ', arreglo_3[5] )

console.log('el tamaño del arreglo es = ', arreglo_3.length)

// un arreglo puede tener todo tipo de elementos

let tiposTodos = [ 23, 23.456, true, 'Hola Mundo', {name: 'Luffy', job: 'Piracy'}, function(){console.log('holaaaa')},5  ]

console.log(tiposTodos[0])
console.log(tiposTodos[2])
console.log(tiposTodos[3])
console.log(tiposTodos[4])
console.log(tiposTodos[4].job)
console.log(tiposTodos[4].name)
console.log(tiposTodos)

tiposTodos[5]()
console.log(tiposTodos[6]= 7)

const mySet1 = new Set();
mySet1.add(1); // Set [ 1 ]
mySet1.add(5); // Set [ 1, 5 ]
mySet1.add(5); // Set [ 1, 5 ]
mySet1.add("algún texto"); // Set [ 1, 5, 'algún texto' ]

console.log(mySet1)


let arrayEx1 = ['Hola', 'Mundo', 'que', 'tal ']

//METODO POP

console.log(arrayEx1.pop())
console.log(arrayEx1)

//METODO PUSH
console.log(arrayEx1.push('NO SE '))
console.log(arrayEx1)

// shift
console.log(arrayEx1.shift())
console.log(arrayEx1)

// unshift
console.log(arrayEx1.unshift('esto', 'es'))
console.log(arrayEx1)


console.log(arrayEx1.push('Mi', 'Nombre'))
console.log(arrayEx1.unshift('mi', 'apellido'))
console.log(arrayEx1)


let arr1 = [1, 2, 3, 4, 5, 6]
console.log(arr1)
console.log(arr1.length)

arr1.length = 4

console.log(arr1)


let matrix = [
    [ 1, 2, 3  ],
    [ 4, 5, 6],
    [ 7, 8, 9]
]

console.log(matrix)
console.log(matrix[1][1])
console.log(matrix[1][3])

matrix.push(4,5,6,7)
console.log(matrix)

arr1.push(4,5,6,7)

console.log(arr1)

// HACINEDO SLICING

arrSlice = arr1.slice(1)
console.log(arrSlice)

arrSlice = arr1.slice(1,4)
console.log(arrSlice)

//VERIFICAR QUE INCLUYE CIERTOS VALORES
console.log(arr1.includes(3))

console.log(arr1.includes(10))

console.log(arr1.includes(4))

//SABER EL INDICE DE LOS VALORES

console.log(arr1)

console.log(arr1.indexOf(3))
console.log(arr1.indexOf(4))
console.log(arr1.indexOf(7))
console.log(arr1.indexOf(10))

// Crear arreglos estaticos

const arrayStatic = Array()

console.log(arrayStatic)
console.log(arrayStatic.push('hola fin'))
console.log(arrayStatic.unshift('hola ini'))
console.log(arrayStatic.push('hola fin'))
console.log(arrayStatic.unshift('hola ini'))

const arrayStatic1 = Array(6).fill('value')
console.log(arrayStatic1)

const arrayStatic2 = Array(10).fill(1)
console.log(arrayStatic2)

//concatenandolos

const arrayStatic3 = arrayStatic2.concat(arrayStatic1)
console.log(arrayStatic3)

const numbers = arrayStatic2.toString()
console.log(numbers)

delete arrayStatic1
console.log(arrayStatic1)

function nombre(){
    
}




