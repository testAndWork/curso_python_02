"""
Modulo que contiene las funciones para manejar software de 
control de inventario
"""


class Producto:
    """
    Clase abstracta que representa un producto en un inventario.

    Atributos:
            nombre (str)  : Nombre del producto.
            precio (float): Precio del producto.
            cantidad (int): Cantidad de unidades del producto en el inventario.
    """

    def __init__(self, nombre, precio, cantidad):
        self.nombre = nombre
        self.precio = precio
        self.cantidad = cantidad


class ProductoFisico(Producto):
    """
        Clase abstracta derivada de `Producto` que representa un producto físico.

        Atributos:
            peso (float)      : Peso del producto en kilogramos.
            dimensiones(tuple): dimensiones del producto en centimetros.(alto , ancho, profundidad)
    """

    def __init__(self, nombre, precio, cantidad, peso, dimensiones):
        super().__init__(nombre, precio, cantidad)
        self.peso = peso
        self.dimensiones = dimensiones


class ProductoDigital(Producto):
    """
        Clase abstracta derivada de `Producto` que representa un producto digital.

        Atributos:
            tamanio (int): Tamano del producto en megabytes
    """

    def __init__(self, nombre, precio, cantidad, tamanio):
        super().__init__(nombre, precio, cantidad)
        self.tamanio = tamanio


class Inventario:
    """
        Clase  que representa un inventario de productos.

        Atributos:
            productos (lista): Lista de productos en el inventario. 
    """

    def __init__(self):
        self.productos = []

    def agregar_producto(self, producto):
        """
        Agregar un producto al inventario.

        Atributo:
            producto(str): Nombre del producto a agregar.
        """
        self.productos.append(producto)

    def actualizar_cantidad_producto(self, nombre, cantidad):
        """
        Actualizar la cantidad de productos en el inventario.

        Atributos: 
            nombre(str)  : nombre del producto a actualizar
            cantidad(int): cantidad del producto a actualizar
        """
        producto = self.buscar_producto(nombre)
        if producto is not None:
            producto.cantidad = cantidad

    def eliminar_producto(self, nombre):
        """
        Elimina el  producto en el inventario.

        Atributos: 
            nombre(str)  : nombre del producto a actualizar
        """
        producto = self.buscar_producto(nombre)
        if producto is not None:
            producto.remove(nombre)

    def buscar_producto(self, nombre):
        """
        Busca el producto en  el inventario por nombre.

       Atributos: 
           producto(str)  : nombre del producto a buscar
       """
        for producto in self.productos:
            if producto.nombre == nombre:
                return producto

        return None

    def listar_productos(self, inventario):
        """
        Busca el producto en  el inventario por nombre.

        Atributos: 
            producto(str)  : nombre del producto a buscar
        """

        for producto in inventario.productos:
            print(producto.nombre)
            print(producto.cantidad)
    #    for producto in inventario.productos:
