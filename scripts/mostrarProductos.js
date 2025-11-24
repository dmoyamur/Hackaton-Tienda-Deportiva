import { agregarAlCarrito } from './agregarCarrito.js'

export const mostrarProductos = lista => {
  const contenedor = document.getElementById('productos-container')
  contenedor.innerHTML = ''

  lista.map(prod => {
    contenedor.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card" style="width: 18rem;">
          <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">
          <div class="card-body">
            <h5 class="card-title">${prod.nombre}</h5>
            <p class="card-text">${prod.descripcion}</p>
            <p class="card-text">${prod.categoria}</p>
            <p class="card-text">$ ${prod.precio}</p>
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
    `
  })
  const btnCarrito = document.querySelectorAll('.agregar-carrito')

  btnCarrito.forEach(btn => {
    btn.addEventListener('click', (e) => {

    //   const boton = e.currentTarget;  
    const id = parseInt(boton.dataset.id);

    console.log('desde la llamada o:', id );

    const prod = lista.find(p => p.id === id);
    console.log('Producto filtrdo', prod);

    if (!prod) {
      console.error("No se encontró el producto con ese ID");
      return;
    }

    agregarAlCarrito(prod);
  });
  })
}
