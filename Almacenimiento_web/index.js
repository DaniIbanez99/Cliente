function guardarNombre(){
    const nombre = prompt('Introduce tu nombre');
    if(nombre){
         // Obtén la lista actual de nombres desde localStorage
         const nombresGuardados = JSON.parse(localStorage.getItem('nombres')) || [];

        nombresGuardados.push(nombre);

        localStorage.setItem('nombre', JSON.stringify(nombresGuardados));

        ActualizarNombres();
    }else{
        alert('No se ha guardado existosamente el nombre');
    }

    function ActualizarNombres(){
        const listaNombres = document.getElementById('ListaNombres');
        listaNombres.innerHTML = '';

        // Obtén la lista de nombres desde localStorage
         const nombresGuardados = JSON.parse(localStorage.getItem('nombres')) || [];

        // Itera sobre la lista y crea elementos de lista para cada nombre
        nombresGuardados.forEach(function (nombre) {
        const listItem = document.createElement('li');
        listItem.textContent = nombre;
        listaNombres.appendChild(listItem);
    });
    }

    ActualizarNombres();
}

function mostrarNombre(){
      const nombreGuardado = localStorage.getItem('nombre'); 
    
    if (nombreGuardado) {
        alert('Nombre guardado: ' + nombreGuardado);
    } else {
        alert('No hay nombre guardado');
    }
}

function eliminarNombre(){
    delete localStorage.nombre;
    alert('Nombre borrado');
}

function limpiarNombre(){
    localStorage.clear();
    alert('contenido limpiado');
}