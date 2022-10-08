const modalLogin = document.getElementById('modal-de-login');
const btnAbrirLogin = document.getElementById("abrir-login");
const loginForm = document.getElementById("login-form");



// ---------- Mostrar el formulario de Login
function mostrarForm() {

    modalLogin.classList.add("mostrar-form");
}

mostrarForm();


// ---------- Cerrar modal y redirigir al index.html
let cerrarLogin = document.getElementById("cerrar-login-btn");

function cerrarForm() {

    modalLogin.classList.remove("mostrar-form");
    cerrarLogin.setAttribute("href", "../index.html");
}

// Evento botón cerrar
cerrarLogin.addEventListener('click', cerrarForm);



// ----------- Validar el usuario ingresado
function validarUsuario(evento) {
    evento.preventDefault();

    let error = document.getElementById("login-error");
    let correo = loginForm.correo.value;
    let contrasena = loginForm.contrasena.value;
    let nombreUsuario = document.getElementById("nombre-usuario");
    let saludo = document.getElementById("saludo");

    let usuarioCompatible;

    if (!correo || !contrasena) {
        error.classList.add("mensaje-error-activo");
        return;
    } else {
        for (let i = 0; i < usuarios.length; i++) {
            const usuario = usuarios[i];

            if (correo === usuario.email && contrasena === usuario.contrasena) {

                usuarioCompatible = usuario;
                break;
            }
        }
        if (usuarioCompatible != undefined) {
            nombreUsuario.innerHTML = usuarioCompatible.nombre;
            loginForm.style.display = "none";
            document.getElementById("login-titulo").style.display = "none";
            saludo.style.display = "block";

            setTimeout(() => {
                cerrarForm();
                window.location.href = "../index.html";
            }, 3000);

        } else {
            error.innerHTML = "Correo o contraseña inválidos";
            error.style.display = "block";
        }
    }
}
// Evento en botón de submit
let btnSubmit = document.getElementById("login-submit");
btnSubmit.addEventListener("click", validarUsuario);