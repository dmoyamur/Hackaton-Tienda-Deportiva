export const mostrarProductos = (lista) => {
  const contenedor = document.getElementById("productos-container");
  contenedor.innerHTML = "";

  lista.map((prod) => {
    contenedor.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card" style="width: 20rem; height: 40rem">
          <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">
          <div class="card-body">
            <h5 class="card-title">${prod.nombre}</h5>
            <p class="card-text">${prod.descripcion}</p>
            <p class="card-text">${prod.categoria}</p>
            <p class="card-text precio">$ ${prod.precio}</p>
             <!-- Botón para agregar al carrito -->
            <button 
              class="btn btn-primary agregar-carrito" 
              data-id="${prod.id}" 
              data-bs-toggle="modal" 
              data-bs-target="#modalCarrito">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    `;
  });
};