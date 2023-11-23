const formulario = document.getElementById('formulario');
const tabla = document.getElementById('tabla');
const botonAgregar = document.getElementById('agregar');
const botonExportarCSV = document.getElementById('exportarCSV'); // Botón de exportación

const productos = []; // Almacenar los datos de los productos

botonAgregar.addEventListener('click', () => {
  // Obtener los valores ingresados por el usuario
  const id = document.getElementById('id').value;
  const producto = document.getElementById('producto').value;
  const descripcion = document.getElementById('descripcion').value;
  const precio = document.getElementById('precio').value;
  const cantidad = document.getElementById('cantidad').value; // Nuevo campo

  // Crear una nueva fila en la tabla
  const nuevaFila = tabla.insertRow(-1);

  // Insertar celdas en la nueva fila
  const celdaId = nuevaFila.insertCell(0);
  const celdaProducto = nuevaFila.insertCell(1);
  const celdaDescripcion = nuevaFila.insertCell(2);
  const celdaPrecio = nuevaFila.insertCell(3);
  const celdaCantidad = nuevaFila.insertCell(4); // Nueva celda

  // Agregar los valores a las celdas
  celdaId.innerHTML = id;
  celdaProducto.innerHTML = producto;
  celdaDescripcion.innerHTML = descripcion;
  celdaPrecio.innerHTML = precio;
  celdaCantidad.innerHTML = cantidad; // Mostrar la cantidad

  // Limpiar los campos del formulario
  document.getElementById('id').value = '';
  document.getElementById('producto').value = '';
  document.getElementById('descripcion').value = '';
  document.getElementById('precio').value = '';
  document.getElementById('cantidad').value = ''; // Limpiar el campo de cantidad

  // Agregar el producto a la lista de productos
  productos.push([id, producto, descripcion, precio, cantidad]);
});

botonExportarCSV.addEventListener('click', () => {
  // Crear el contenido del archivo CSV
  let csvContent = "ID,Producto,Descripción,precio Unitario,Cantidad\n";

  productos.forEach((producto) => {
    csvContent += producto.join(",") + "\n";
  });

  // Crear un objeto Blob para el contenido CSV
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

  // Crear un enlace para descargar el archivo CSV
  const link = document.createElement("a");
  if (link.download !== undefined) { // Verificar si el navegador admite la descarga de archivos
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "productos.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    alert("Lo siento, tu navegador no admite la descarga de archivos.");
  }
});
