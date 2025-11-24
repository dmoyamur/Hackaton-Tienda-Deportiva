import { agregarAlCarrito, mostrarCarrito, eliminarDelCarrito, carrito } from "./agregarCarrito.js";
import { productos } from "../utils/dataProducts.js";

document.addEventListener("click", (e) => {  
  
  if (e.target.classList.contains("agregar-carrito")) {
    const id = e.target.dataset.id;
    const prod = productos.find((p) => p.id == id);
    agregarAlCarrito(prod);
    mostrarCarrito();
  }

  
  if (e.target.classList.contains("eliminar-item")) {
    const id = e.target.dataset.id;

    Swal.fire({
      title: "¿Eliminar producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarDelCarrito(id);
        mostrarCarrito();
      }
    });
  }
});


document.addEventListener("click", (e) => {
  if (e.target.id === "btnFinalizarCompra") {
    if (carrito.length === 0) {
      Swal.fire({
        icon: "info",
        title: "Carrito vacío",
        text: "Agrega productos para continuar",
      });
      return;
    }

    Swal.fire({
      title: "¿Confirmar compra?",
      text: `Total de artículos: ${carrito.length}`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Comprar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("carrito");
        carrito.length = 0;
        mostrarCarrito();
        Swal.fire("¡Compra realizada!", "Gracias por tu compra", "success");
      }
    });
  }
});


document.getElementById("modalCarrito").addEventListener("shown.bs.modal", mostrarCarrito);
