function mostrarSeccion(id) {
    let elementosActivos = document.getElementsByClassName('activo');
    // for (let i = 0; i < elementosActivos.length; i++) {
    //     elementosActivos[i].classList.remove('activo');
    //     elementosActivos[i].classList.add('oculto');
    // }

    for (let elementoActivo of elementosActivos) {
        elementoActivo.classList.remove('activo');
        elementoActivo.classList.add('oculto');
    }

    let elemento = document.getElementById(id);
    elemento.classList.remove('oculto');
    elemento.classList.add('activo');
    
}