const formulario = document.getElementById("formulario-contacto");
const inputs = document.querySelectorAll("#formulario-contacto input");
const btnEnvio = document.getElementById("btn-envio");
const msjError = document.getElementById("mensaje-error");

// ------------ Validar Nombre
function validarNombre() {

    let errorNombre = document.getElementById("error-nombre");

    const nombre = formulario.nombre.value;

    if (nombre.length < 3) {
        errorNombre.innerHTML = "El nombre debe tener más de 2 dígitos";
    } else {
        errorNombre.innerHTML = "";
    }
}

let inputNombre = formulario.nombre;
inputNombre.addEventListener("keyup", validarNombre);
inputNombre.addEventListener("blur", validarNombre);

// ----------- Validar Correo
function validarCorreo() {
    let errorCorreo = document.getElementById("error-correo");

    const correo = formulario.correo.value;

    if (!correo.includes("@")) {
        errorCorreo.innerHTML = "El correo debe incluir un @";
    } else if (!correo.includes(".com")) {
        errorCorreo.innerHTML = "El correo debe incluir un .com";
    } else {
        errorCorreo.innerHTML = "";
    }
}

let inputCorreo = formulario.correo;
inputCorreo.addEventListener("keyup", validarCorreo);
inputCorreo.addEventListener("blur", validarCorreo);


// ---------- Validar Teléfono
function validarTelefono() {
    let errorTelefono = document.getElementById("error-telefono");

    const telefono = formulario.telefono.value;

    if (telefono.length < 8) {
        errorTelefono.innerHTML = "El teléfono no puede tener menos de 8 dígitos";
    } else {
        errorTelefono.innerHTML = "";
    }
}

let inputTelefono = formulario.telefono;
inputTelefono.addEventListener("keyup", validarTelefono);
inputTelefono.addEventListener("blur", validarTelefono);

// ---------- Validar Text Area
function validarMensaje() {
    let errorMensaje = document.getElementById("error-mensaje");

    const mensaje = formulario.mensaje.value;

    if (!mensaje) {
        errorMensaje.innerHTML = "Debe escribir un mensaje";
    } else {
        errorMensaje.innerHTML = "";
    }
}

let inputMensaje = formulario.mensaje;
inputMensaje.addEventListener("keyup", validarMensaje);
inputMensaje.addEventListener("blur", validarMensaje);


// ---------- Validar CheckBox
function validarBases() {
    let errorBases = document.getElementById("error-bases");
    let inputBases = document.getElementById('id-bases');

    if (!inputBases.checked) {
        errorBases.innerHTML = "Debe aceptar los Términos y Condiciones";
    } else {
        errorBases.innerHTML = "";
    }
}



// ---------- Validar que campos no queden vacíos
btnEnvio.addEventListener('click', (evento) => {
    evento.preventDefault();

    const bases = document.getElementById('id-bases');
    if (formulario.nombre.value && formulario.correo.value && formulario.mensaje.value && bases.checked) {
        formulario.reset();

        document.getElementById('mensaje-exito').classList.add('mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('mensaje-exito').classList.remove('mensaje-exito-activo');
        }, 5000);

    } else {
        document.getElementById('mensaje-error').classList.add('mensaje-error-activo');
        validarBases();
        setTimeout(() => {
            document.getElementById('mensaje-error').classList.remove('mensaje-error-activo');
        }, 2000);


    }
});