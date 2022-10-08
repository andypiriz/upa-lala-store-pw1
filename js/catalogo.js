let selectCategorias = document.getElementById("categorias");

// ---------- Cargar categorías de productos en el select
function cargarCategorias() {
    let categorias = [];

    categorias.push("Todos los productos");

    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];

        if (!categorias.includes(producto.categoria)) {
            categorias.push(producto.categoria);
        }

    }
    for (let i = 0; i < categorias.length; i++) {
        const categoria = categorias[i];

        let nuevoOption = document.createElement("option");
        nuevoOption.value = categoria;
        nuevoOption.innerHTML = categoria;

        selectCategorias.append(nuevoOption);
    }
}
cargarCategorias();

// ---------- Mostrar productos de una lista
function mostrarProductos(lista) {
    let divProductos = document.getElementById("catalogo-productos");
    divProductos.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {
        const productoLista = lista[i];

        let linkProducto = document.createElement("a");
        linkProducto.style.textDecoration = "none";
        linkProducto.style.color = "black";
        linkProducto.setAttribute("href", `../paginas/detalle.html?id=${productoLista.id}`);

        //----------------------------------------------
        let cardProducto = document.createElement("article");
        cardProducto.classList.add("card-producto");

        //----------------------------------------------
        let imgProducto = document.createElement("img");
        imgProducto.setAttribute("src", `../imgs/${productoLista.imagen[0]}`);
        cardProducto.append(imgProducto);

        //----------------------------------------------
        let btnsCardProducto = document.createElement("div");
        btnsCardProducto.classList.add("btn-card-container");

        let carritoBtn = document.createElement("a");
        carritoBtn.classList.add("btn-card");
        let iconoCarrito = document.createElement("img");
        iconoCarrito.setAttribute("src", "../imgs/agregar-a-carrito.svg");
        carritoBtn.append(iconoCarrito);
        btnsCardProducto.append(carritoBtn);

        let favoritoBtn = document.createElement("a");
        favoritoBtn.classList.add("btn-card");
        let iconoFavorito = document.createElement("img");
        iconoFavorito.setAttribute("src", "../imgs/agregar-a-favoritos.svg");
        favoritoBtn.append(iconoFavorito);
        btnsCardProducto.append(favoritoBtn);


        cardProducto.append(btnsCardProducto);

        //----------------------------------------------
        let divPrecio = document.createElement("div");
        divPrecio.classList.add("precio-producto");

        let nombreProducto = document.createElement("h4");
        nombreProducto.innerHTML = `${productoLista.nombre}`;
        divPrecio.append(nombreProducto);

        let precioProducto = document.createElement("p");
        precioProducto.style.fontWeight = "bold";
        precioProducto.innerHTML = `$${productoLista.precio}`;
        divPrecio.append(precioProducto);

        //----------------------------------------------
        cardProducto.append(divPrecio);
        linkProducto.append(cardProducto);

        divProductos.classList.add("catalogo-productos");
        divProductos.append(linkProducto);

    }

    if (lista.length === 0) {
        let parrafo = document.createElement("P");
        parrafo.innerHTML = "No se encontró ningún producto";
        divProductos.append(parrafo);

    }
}
mostrarProductos(productos);


/********** FILTROS **********/

// ---------- 1-Filtrar por categorías del select
function filtrarPorCategoria() {
    let categoriaSeleccionada = selectCategorias.value;

    let productosFiltrados = [];

    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];

        if (producto.categoria === categoriaSeleccionada || categoriaSeleccionada === "Todos los productos") {
            productosFiltrados.push(producto);
        }

    }
    mostrarProductos(productosFiltrados);

}
selectCategorias.addEventListener("change", filtrarPorCategoria);

// ---------- 2-Filtrar por precio
let minimoInput = document.getElementById("precio-minimo");
let maximoInput = document.getElementById("precio-maximo");


function filtrarPorPrecio() {
    let minimoValue = minimoInput.value;
    let maximoValue = maximoInput.value;

    let minimo = parseInt(minimoValue);
    if (isNaN(minimo)) {
        minimo = 0;
    }

    let maximo = parseInt(maximoValue);
    if (isNaN(maximo)) {
        maximo = Number.MAX_VALUE;
    }

    let productosFiltrados = [];

    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];

        if (producto.precio >= minimo && producto.precio <= maximo) {
            productosFiltrados.push(producto);
        }

    }

    mostrarProductos(productosFiltrados);
}

// Eventos de los inputs Min-Max
let inputsPrecio = document.querySelectorAll("div#filtrado-precio  input");
inputsPrecio.forEach((input) => {
    input.addEventListener("change", filtrarPorPrecio);
    input.addEventListener("keyup", filtrarPorPrecio);
});

// ---------- 3-Filtrar por estado del producto (Imágenes)
function filtrarPorEstado(evento) {
    let imgSeleccionada = evento.target;
    let estadoSeleccionado = imgSeleccionada.title;

    let productosFiltrados = [];

    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];

        if (producto.estado === estadoSeleccionado || estadoSeleccionado === "Todos los productos") {
            productosFiltrados.push(producto);
        }

    }
    mostrarProductos(productosFiltrados);
}

// Eventos en imágenes 
let imgsEstado = document.querySelectorAll("#filtrado-estado img");


for (let i = 0; i < imgsEstado.length; i++) {
    imgsEstado[i].addEventListener("click", filtrarPorEstado);
}


// ---------- 4-Filtrar según buscador
function buscarProductos() {
    let textoIngresado = document.getElementById("input-buscar").value;
    textoIngresado.toLowerCase();

    let productoEncontrado = [];

    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];

        if (
            producto.nombre.toLowerCase().includes(textoIngresado) ||
            producto.descripcion.toLowerCase().includes(textoIngresado) ||
            producto.categoria.toLowerCase().includes(textoIngresado)
        ) {
            productoEncontrado.push(producto);
        }
    }


    mostrarProductos(productoEncontrado);
}
// Evento buscador
let inputBuscar = document.getElementById("input-buscar");
inputBuscar.addEventListener("keyup", buscarProductos);