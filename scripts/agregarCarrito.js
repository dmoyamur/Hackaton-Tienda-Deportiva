export let carrito = JSON.parse(localStorage.getItem("carritoCompra")) || [];

export const agregarAlCarrito = (producto) => {
  console.log("ingrese al ca", producto)
  carrito?.push(producto);
  console.log("carrito", carrito)
  localStorage.setItem("carritoCompra", JSON.stringify(carrito));

  Swal.fire({
    title: "Producto agregado",
    text: `${producto.nombre} fue agregado al carrito`,
    icon: "success",
    timer: 1500,
    showConfirmButton: false,
  });
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
      <div class="d-flex align-items-center gap-2">
        <img 
          src="${item.imagen}" 
          style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;"
        >
        <div>
        <div>
          <strong>${item.nombre}</strong><br>
          <small>$${item.precio}</small>
        </div>
        <button class="btn btn-danger btn-sm eliminar-item" data-id="${item.id}">
          Eliminar
        </button>
      </div>
    `;
  });
};

export const eliminarDelCarrito = (id) => {
  carrito = carrito.filter((item) => item.id != id);
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
