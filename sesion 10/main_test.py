# LIBRERIAS EN PYTHON
"""
Libreria.py
            --> __init__.py   ver 3.6 ya no es necesario , pero se usa como buena práctica
            --> modulo1.py
            --> modulo2.py
            .
            .
            .
            --> moduloN.py

Ejercico Práctico:

Esta sistema se ha desarrollado para automatizar los procesos 
en una biblioteca ; contiene las funciones basicas para llevar 
el control de el  usuario
Funciones para que el Book keeper sobre el inventario :
    1- Agregar libro al inventario de biblioteca
    2- Mostrar libros en inventario de biblioteca
    3- BUscar libros en el inventario de biblioteca
    4- Borrar un libro 
    5 salir del sistema
    
Funciones para que el Book keeper sobre el usuario :
    1- Agregar usuario (Nombre, Apellido , ID, Prestamo de libro)
    2- Modificar datos de usuario
    2- Buscar  si el usuario existe
    3- Buscar que libros tiene el usuario
    4- Borrar libros Para el usuario 
    5- Salir del sistemas
"""

import gestionbib.invbib as inv

print('Bienvenidos al sistema Bibliotecario\n')

while True:
    print('Digite la opción a utilizar:')
    print('1- Agregar libro')
    print('2- Mostrar libro')
    print('3- Buscar libros')
    print('4- Borrar Libro')
    print('0- Salir del Sistema')

    opt = int(input('Ingrese el número de la opción: '))

    if opt == 0:
        print('\n Gracias por usar el sistema.')
        break
    elif opt == 1:
        title = input('Ingrese el título del libro a guardar: ')
        author = input('Ingrese el autor del libro a guardar: ')
        date = input('Ingrese la fecha del libro a guardar: ')

        inv.add_book(title, author, date)

    elif opt == 2:
        print('\nLos libros a motrar son:')
        inv.show_books()
        print('\n\n')

    elif opt == 3:
        search = input('digite el libro a buscar: ')
        inv.search_book(search)

    elif opt == 4:
        pass

    else:
        pass
