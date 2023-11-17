function determinarRangoNum(){

    let num = prompt('Digita el numero par ver su signo')

    num = parseInt(num)

    if (num > 0){
        alert('es un numero positivo')
    }
    else if (num == 0){
        alert('el numero es cero')
    }
    else if (num < 0){
        alert('El numero es negativo')
    }
    else {
        alert('no es un numero')
    }
}