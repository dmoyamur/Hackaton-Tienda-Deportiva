export let carrito = JSON.parse(localStorage.getItem("carritoCompra")) || [];

export const agregarAlCarrito = (producto) => {
  console.log("ingrese al ca", producto);
  console.log("carrito", carrito);

  const existe = carrito.find((item) => item.id === producto.id);

  if (existe) {
    existe.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

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
  const totalContenedor = document.getElementById("carrito-total");

  let total = 0;

  contenedor.innerHTML = "";

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p>El carrito está vacío.</p>";
    if (totalContenedor) totalContenedor.textContent = "";
    return;
  }

  
  carrito.forEach((item) => {
    const subtotal = item.precio * item.cantidad;
    total += subtotal;

    contenedor.innerHTML += `
      <div class="d-flex justify-content-between align-items-center border-bottom py-2">

        <div class="d-flex align-items-center gap-2">
          <img 
            src="${item.imagen}" 
            style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;"
          >
          <div>
            <strong>${item.nombre}</strong><br>
            <small>$${item.precio} x ${item.cantidad}</small><br>
            <strong>Subtotal: $${subtotal}</strong>
          </div>
        </div>

        <button class="btn btn-danger btn-sm eliminar-item" data-id="${item.id}">
          Eliminar
        </button>
      </div>
    `;
      
   
  });

  totalContenedor.innerHTML = `Total a pagar: $${total}`;
};

export const eliminarDelCarrito = (id) => {
  carrito = carrito.filter((item) => item.id != id);
 localStorage.setItem("carritoCompra", JSON.stringify(carrito));
};
