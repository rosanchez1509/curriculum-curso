document.addEventListener("DOMContentLoaded", function(event) {
    mostrarSeccion('sobre-mi', 'sobre-mi-link');
});

function mostrarSeccion(idSeccion, idLink) {
    let seccionesActivas = document.getElementsByClassName('activo');

    for (let seccion of seccionesActivas) {
        seccion.classList.remove('activo');
        seccion.classList.add('oculto');
    }

    let linksActivos = document.getElementsByClassName('link-activo');

    for (let link of linksActivos) {
        link.classList.remove('link-activo');
    }

    let seccionAMostrar = document.getElementById(idSeccion);
    seccionAMostrar.classList.remove('oculto');
    seccionAMostrar.classList.add('activo');

    let linkAActivar = document.getElementById(idLink);
    linkAActivar.classList.add('link-activo');
}