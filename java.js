// 📌 Lista de productos
const products = [
  {
    name: 'Bota Shadow Elite 3 Fg',
    price: 229.99,
    image:
      'https://www.futbolemotion.com/imagesarticulos/263562/medianas/bota-under-armour-shadow-elite-3-fg-grey-0.webp'
  },
  {
    name: 'Bota Furon Elite FG V8',
    price: 229.99,
    image:
      'https://www.futbolemotion.com/imagesarticulos/245054/medianas/bota-new-balance-furon-elite-fg-v8-first-edition-blanco-0.webp'
  },
  {
    name: 'Bota F50+ FG',
    price: 299.99,
    image:
      'https://www.futbolemotion.com/imagesarticulos/243547/medianas/bota-adidas-f50-fg-lucid-pink-lucid-lemon-blue-fusion-0.webp'
  },
  {
    name: 'Bota Copa Pure III Elite LL FG',
    price: 249.99,
    image:
      'https://www.futbolemotion.com/imagesarticulos/248311/medianas/bota-adidas-copa-pure-iii-elite-ll-fg-lucid-lemon-lucid-lemon-core-black-0.webp'
  },
  {
    name: 'Bota Predator Elite L FG',
    price: 259.99,
    image:
      'https://www.futbolemotion.com/imagesarticulos/248298/medianas/bota-adidas-predator-elite-l-fg-lucid-lemon-lucid-pink-blue-fusion-0.webp'
  },
  {
    name: 'Guantes Zero Elite',
    price: 119.99,
    image:
      'https://www.futbolemotion.com/imagesarticulos/254688/medianas/guantes-sp-futbol-zero-elite-chr-negro-cian-0.webp'
  },
  {
    name: 'Guantes Earhart Elite',
    price: 119.99,
    image:
      'https://www.futbolemotion.com/imagesarticulos/254695/medianas/guantes-sp-futbol-earhart-elite-chr-morado-fucsia-0.webp'
  },
  {
    name: 'Zapatilla Lunar Gato II',
    price: 89.99,
    image:
      'https://www.futbolemotion.com/imagesarticulos/244934/medianas/zapatilla-nike-nike-lunargato-ii-football-grey-lt-photo-blue-0.webp'
  },
  {
    name: 'Booa Mercurial Vapor 1 SE FG',
    price: 279.99,
    image:
      'https://www.futbolemotion.com/imagesarticulos/244998/medianas/bota-nike-mercurial-vapor-1-rgn-se-fg-dk-cinder-maize-0.webp'
  },
  {
    name: 'Bota Tiempo Legend 10 Elite FG',
    price: 249.99,
    image:
      'https://www.futbolemotion.com/imagesarticulos/244929/medianas/bota-nike-tiempo-legend-10-elite-fg-hot-lava-white-0.webp'
  }
]

// 📌 Función para generar productos dinámicamente
function renderizarProductos() {
  const productosContainer = document.getElementById('productos-container')
  productosContainer.innerHTML = '' // Limpiar antes de insertar

  products.forEach((producto) => {
    // Crear el contenedor para cada producto
    const productoElement = document.createElement('div')
    productoElement.classList.add('producto')

    // Agregar contenido al producto
    productoElement.innerHTML = `
      <img src="${producto.image}" alt="${producto.name}">
      <h3>${producto.name}</h3>
      <p class="price">$${producto.price.toFixed(2)}</p>
      <button>Comprar</button>
    `

    // Añadir el contenedor del producto a la sección de productos
    productosContainer.appendChild(productoElement)
  })
}

// 🔥 Ejecutar la función cuando el contenido de la página esté cargado
document.addEventListener('DOMContentLoaded', renderizarProductos)
