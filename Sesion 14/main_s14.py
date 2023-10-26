"""	Crea una clase "Figura" que tenga un método para calcular el área. Luego, crea clases 
Cuadrado, Rectángulo, Triángulo y Círculo, que hereden de la clase "Figura" y utilicen 
la función para calcular el área de cada figura. Crea un archivo para el módulo y un archivo 
principal donde se ejecute cada una de las clases y se calcule su área correspondiente."""


import modulo_area as ma

cuadrado = ma.Cuadrado(4)
print('EL area de un cuadrado es :', cuadrado.calcular_area())

rectangulo = ma.Rectangulo(5, 4)

print(f'El area de un Rectangulo es: {rectangulo.calcular_area() : .1f}')


triangulo = ma.Triangulo(5, 4)
print('El area de un triangulo es : ', triangulo.calcular_area())

circulo = ma.Circulo(4)

print(f'EL area del circulo es : {circulo.calcular_area(): .2f}')
