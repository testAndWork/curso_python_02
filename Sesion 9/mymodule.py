"""_
summary_
    modulo super bueno
    que hace muchas cosas que no hacen los otros modulkos
"""


def saludar():
    """_summary_
            esta funcion saluda a la gente , norecibe
            ningun parametro y ya 
    """
    print('Un saludo desde la función')


def sumar(num1, num2):
    """_summary_

    Args:
        num1 (_float_): _primer valor para realizar la suma_
        num2 (_float_): _segundo valor para realizar la suma_

    Returns:
        _type_: _obtenemos la suma de dos numero_
    """
    return num1 + num2


def multiplicar(a, b):
    """_summary_

    Args:
        a (_float_): _variable que guarda el primer numero a multiplicar_
        b (_float_): _variable que guarda el segundo numero a multiplicar_

    Returns:
        _float_: _la multiplicacionde dos numeros_
    """
    return a * b


def test_func(*valor):
    """_summary_
    """
    for it in valor:
        print('Imprimir lo que sea de: ', it)
