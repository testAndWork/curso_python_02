"""_summary_
        Este módulo contiene funciones para gestiones de libros 
        en el inventario de la biblioteca.
        Funciones que contiene el módulo:
       
     1- Agregar libro al inventario de biblioteca
     2- Mostrar libros en inventario de biblioteca
     3- BUscar libros en el inventario de biblioteca
     4- Borrar un libro 
     5 salir del sistema
 """


libro_lst = []


def add_book(title, author, date):
    """_summary_
    Esta función agrega un libro al inventario

    Args:
        title (_str_): _Variable que guarda el título del libro_
        author (_str_): __Variable que guarda el autor del libro_
        date (_str_): __Variable que guarda la fecha de publicación del libro_
    """
    libro_lst.append({
        'Titulo': title,
        'Autor': author,
        'Fecha': date
    })


def show_books():
    """_summary_
        Función para mostrar todos los libros del inventario.
    """
    for libros in libro_lst:
        print(
            f" Titulo: {libros['Titulo']}, Autor: {libros['Autor']}, Fecha de publicación: {libros['Fecha']}"
        )

# para opcion de busquedas "caracteristica a buscar?"
# "bandera o mensaje que la busqueda fue exitosa"


def search_book(bookTitle):
    """_summary_

    Args:
        bookTitle (_str_): _VAriable que se utiliza para buscar un libro 
                            por titulo_
    """
    success = False
    for libro in libro_lst:
        if bookTitle.lower() in libro['Titulo'].lower():
            print(
                f" Titulo: {libro['Titulo']}, Autor: {libro['Autor']}, Fecha de publicación: {libro['Fecha']}"
            )
            success = True
            break
    if not success:
        print('Libro no encontrado')


def delete_book(bookTitle):
    """_summary_

    Args:
        bookTitle (_str_): _VAriable que se utiliza para buscar un libro 
                            por titulo_
    """
    success = False
    for libro in libro_lst:
        if bookTitle.lower() in libro['Titulo'].lower():
            print(
                f'\n Libro encontrado, el libro {bookTitle} se esta eliminando')
            print(
                f" Titulo: {libro['Titulo']}, Autor: {libro['Autor']}, Fecha de publicación: {libro['Fecha']}"
            )
            libro_lst.remove(libro)
            success = True
            break
    if not success:
        print('Libro no encontrado')
