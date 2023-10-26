"""
Módulo 
    Geométricas 
        Figuras 
        """

import math


# Clase Padre para calcular Areas de figuras geometricas.

class Figura:

    def calcular_area(self):
        pass


# Clase para calcular el área de un cuadrado
class Cuadrado(Figura):
    def __init__(self, lado):
        self.lado = lado

    def calcular_area(self):
        return self.lado*self.lado

# Clase para calcular el área de un rectangulo


class Rectangulo(Figura):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def calcular_area(self):
        return self.base * self.altura

# Clase para calcular el área de un triangulo


class Triangulo(Figura):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def calcular_area(self):
        return self.base * self.altura/2

# Clase para calcular el área de un circulo


class Circulo(Figura):
    def __init__(self, radio):
        self.radio = radio

    def calcular_area(self):
        return math.pi*self.radio**2
