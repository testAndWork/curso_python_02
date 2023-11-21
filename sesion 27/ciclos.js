
// CICLO FOR
// for(desde ; condicion  ; incremento){  }

console.log('ejemplo de ciclo for con incremento')

console.log('ciclo for i<5 ')
for(let i  =0; i < 5 ; i++){
    console.log(i)
}

console.log('ciclo for i<=5 ')
for(let i  =0; i <=  5 ; i++){
    console.log(i)
}


console.log('Ejemplo de ciclo for con decremento')

console.log('ciclo for i>0')
for(let i  = 5; i > 0 ; i--){
    console.log(i)
}

console.log('ciclo for i>=0 ')
for(let i = 5; i >= 0 ; i--){
    console.log(i)
}


for(let i = 0 ; i <= 10 ; i++){
    console.log(`${i} X ${i} = ${i*i}`)
}

//Recorrer arreglos con un cilo FOR

console.log('\n \nArreglos en un ciclo FOR\n')
let names =  [ 'gato', 'perro', 'loro', 'pez', 'ave', 'dinosaurio']

for(let i=0 ; i < names.length ;i++){
    console.log(names[i])
}

console.log('calculando una suma a patir de un vector')
const number = [1,2,3,4,5,6,7,8]

let suma = 0

for(let i = 0 ; i< number.length ;i++){
    suma = suma + number[i]
}

console.log('la suma es:', suma)
console.log('el promedio es:', suma/number.length)

const namesUpper = []

for(let i = 0; i < names.length;i++){
    namesUpper.push(names[i].toUpperCase())
}

console.log(namesUpper)

// CICLO WHILE 
let i = 0

while(i <= 5){
    console.log(i)
    i++
}

console.log(i)
i = 0

while(i < namesUpper.length ){
    console.log(namesUpper[i])
    i++
}

//DO WHILE

i = 0

do {
    console.log('do while',namesUpper[i])
    i++
} while(i <= 5)

i = 0

do {
    console.log(i)
    i++
} while(i <= 5)

i = 0

do {
    console.log('do while',namesUpper[i])
    i++
} while(i < namesUpper.length)

// CICLO FOR OF
console.log('recorriendo con un FOR OF')
const numbers = [1,2,3,4,5,6,7,8,9]

for(const it of numbers){
    console.log(it)
}

const animeName = ['Nami','Luffy','Zoro','Chopper','Garp' ,'Robin']

for(const nombre of animeName){
    console.log('El nombre es : ',nombre)
}

console.log('-------  Ejemplo de búsqueda uso beak -------')

for(const nombre of animeName){
    console.log('El nombre es : ',nombre)
    if(nombre == 'Zoro'){ 
        console.log('Hemos encontado El nombre e: ',nombre)
        break
    }
}

console.log('-------  Ejemplo de búsqueda uso continue -------')

for(const nombre of animeName){
    console.log('El nombre es : ',nombre)
    if(nombre == 'Zoro'){ 
        console.log('Hemos encontado El nombre e: ',nombre)
        continue
    }
}

