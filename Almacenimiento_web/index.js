function guardarNombre() {
    const nombre = prompt('Introduce tu nombre');
    if (nombre) {
        let listaActualizada = JSON.parse(localStorage.getItem('nombres')) || [];
        listaActualizada.push(nombre);
        localStorage.setItem('nombres', JSON.stringify(listaActualizada));
        alert('Nombre guardado');
    }
}

function mostrarNombre() {
    const nombresGuardados = JSON.parse(localStorage.getItem('nombres')) || [];

    if (nombresGuardados.length > 0) {
        alert('Nombres guardados: ' + nombresGuardados.join(', '));
    } else {
        alert('No hay nombres guardados');
    }
}

function eliminarNombre() {
    const nombresGuardados = JSON.parse(localStorage.getItem('nombres')) || [];

    if (nombresGuardados.length === 0) {
        alert('No hay nombres para eliminar');
        return;
    }

    const nombreAEliminar = prompt('Selecciona el nombre a eliminar:\n' + nombresGuardados.join(', '));

    if (nombreAEliminar) {
        const nuevaLista = nombresGuardados.filter(nombre => nombre !== nombreAEliminar);

        localStorage.setItem('nombres', JSON.stringify(nuevaLista));
        alert('Nombre eliminado: ' + nombreAEliminar);

        // Actualizar la lista visual
        mostrarNombre();
    } else {
        alert('No se ha seleccionado ningún nombre para eliminar');
    }
}


function limpiarNombre() {
    localStorage.clear();
    alert('Contenido limpiado');
}
