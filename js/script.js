// Imágenes carrusel
const imagenes = ["imgs/portada.jpg", "imgs/portada2.jpg", "imgs/portada3.jpg"];


// ---------- Carrusel Hero section
let i = 0;
let imgs = document.getElementById("carrusel-imgs");

mostrarCarrusel();

// ---------- Mostrar las imágenes en el carrusel
function mostrarCarrusel() {
    imgs.setAttribute("src", imagenes[i]);

    if (i === imagenes.length) {
        i = 0;
    } else if (i < 0) {
        i = imagenes.length - 1;
    }
    imgs.setAttribute("src", imagenes[i]);
}

// Mostrar foto previa
function mostarPrevio() {
    i--;
    mostrarCarrusel();
}

// Mostrar siguiente foto
function mostarSiguiente() {
    i++;
    mostrarCarrusel();
}

// Eventos botones previo-siguiente
let previoBtn = document.querySelector(".previo-btn");
previoBtn.addEventListener("click", mostarPrevio);

let siguienteBtn = document.querySelector(".siguiente-btn");
siguienteBtn.addEventListener("click", mostarSiguiente);


//------------ Fecha Actual en el Footer
function fechaActual() {
    setInterval(() => {
        let fecha = new Date();
        let opciones = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        let fechaString = fecha.toLocaleDateString('es-ES', opciones);
        let horaString = fecha.toLocaleTimeString('en-US');
        let fechaCompleta = `${fechaString}, ${horaString}`;


        let parrafoFecha = document.getElementById("fecha-actual");
        parrafoFecha.innerHTML = fechaCompleta;
        parrafoFecha.classList.add("texto-chico");

    }, 1000);
}
fechaActual();