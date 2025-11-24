let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

export const agregarAlCarrito = (producto) => {
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

export const mostrarCarrito = () => {
  const contenedor = document.getElementById("carrito-body");
  contenedor.innerHTML = "";

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p>El carrito está vacío.</p>";
    return;
  }

  carrito.forEach((item) => {
    contenedor.innerHTML += `
      <div class="d-flex justify-content-between align-items-center border-bottom py-2">
        <div>
          <strong>${item.nombre}</strong><br>
          <small>$${item.precio}</small>
        </div>
        <button class="btn btn-danger btn-sm eliminar-item" data-id="${item.id}">Eliminar</button>
      </div>
    `;
  });
};

// Eliminar producto del carrito
export const eliminarDelCarrito = (id) => {
  carrito = carrito.filter((item) => item.id != id);
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
