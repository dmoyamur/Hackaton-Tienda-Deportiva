import "./eventosCarrito.js"; 
import { productos } from "../utils/dataProducts.js";
import { mostrarProductos } from "./mostrarProductos.js";
import { filtrarCategoria } from "./filtrarCategorias.js";

document.addEventListener("DOMContentLoaded", () => {
  mostrarProductos(productos);

  const tabs = document.querySelectorAll("#categorias-tabs .nav-link");
  
  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();

      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const categoria = tab.dataset.category;
      filtrarCategoria(productos, categoria);
    });
  });
});



