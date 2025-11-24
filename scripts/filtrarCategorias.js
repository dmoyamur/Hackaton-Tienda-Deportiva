import { mostrarProductos } from './mostrarProductos.js'

export const filtrarCategoria = (productos, categoria) => {
  if (categoria === 'Todas') {
    mostrarProductos(productos)
    return
  }

  const filtrados = productos.filter(p =>
    p.categoria.toLowerCase().includes(categoria.toLowerCase())
  )

  mostrarProductos(filtrados)
}
