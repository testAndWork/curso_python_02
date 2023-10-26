
import modulo_inventario as mi


inventario = mi.Inventario()
producto_fisico = mi.ProductoFisico('caja', 10, 4, 20, (4, 5, 5))
prododucto_digital = mi.ProductoDigital('Foto', 100, 10, 40)

# Agregar productos a inventarios

inventario.agregar_producto(producto_fisico)
inventario.agregar_producto(prododucto_digital)


# actualizar productos
inventario.actualizar_cantidad_producto('caja', 20)
# mostrar Productos
for producto in inventario.productos:
    print(producto.nombre)
    print(producto.cantidad)


inventario.listar_productos(inventario)
