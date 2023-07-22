// Array que almacenará los productos del carrito
const carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(nombreProducto, precioProducto) {
  // Buscamos si el producto ya está en el carrito
  const productoExistente = carrito.find((producto) => producto.nombre === nombreProducto);

  if (productoExistente) {
    // Si el producto ya existe en el carrito, aumentamos su cantidad
    productoExistente.cantidad++;
  } else {
    // Si el producto no existe en el carrito, lo agregamos
    carrito.push({ nombre: nombreProducto, precio: precioProducto, cantidad: 1 });
  }

  // Actualizamos la tabla del carrito
  mostrarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(nombreProducto) {
  // Filtramos los productos diferentes al que queremos eliminar
  carrito = carrito.filter((producto) => producto.nombre !== nombreProducto);

  // Actualizamos la tabla del carrito
  mostrarCarrito();
}

// Función para mostrar el carrito en la tabla
function mostrarCarrito() {
  const tablaCarrito = document.querySelector("tbody");
  tablaCarrito.innerHTML = ""; // Limpiamos la tabla antes de actualizarla

  let total = 0;

  carrito.forEach((producto) => {
    const subtotal = producto.precio * producto.cantidad;
    total += subtotal;

    tablaCarrito.innerHTML += `
      <tr>
        <td>${producto.nombre}</td>
        <td>${producto.precio.toFixed(2)}</td>
        <td>${producto.cantidad}</td>
        <td>${subtotal.toFixed(2)}</td>
        <td>
          <button class="btn btn-danger" onclick="eliminarDelCarrito('${producto.nombre}')">Eliminar</button>
        </td>
      </tr>
    `;
  });

  // Actualizamos el total en la página
  const totalElement = document.getElementById("total");
  totalElement.textContent = total.toFixed(2);
}

// Función para inicializar la página
function inicializarPagina() {
  mostrarCarrito();
}

// Llamamos a la función para inicializar la página
inicializarPagina();
