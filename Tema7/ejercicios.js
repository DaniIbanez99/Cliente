//Ejercicio 1

    let tutor = {
        nombre : "Carol",
        edad : 30,
        dni : "12345678A",
        titulo_universitario : "Ingeniera Informática"
    }
//ejercicio 2

    let asignaturas = [
    {
        nombre : "Programacion",
        curso : 2,
        horas_totales : 120
    },
    {
        nombre : "Base de Datos",
        curso : 2,
        horas_totales : 80
    },
    {
        nombre : "Interfaces",
        curso : 2,
        horas_totales : 134
    },
    {
        nombre : "Lenguaje de Marcas",
        curso : 2,
        horas_totales : 100
    }];

//ejercicio 3

    let alumno = {
        nombre : "Dani",
        edad : 24,
        ciclo : "Daw",
        curso : 2,
        tutor: tutor,
        asignaturas: asignaturas,
        notas : {
            programacion: 7,
            base_de_datos: 9,
            interfaces: 10,
            lenguajes_de_marcas: 8
        }
    }

    //Ejercicio 4

    let DatosAlumnos = {
        nombre : '${alumno.nombre}',
        edad : '${alumno.edad}',
        ciclo : '${alumno.ciclo}',
        curso : '${alumno.curso}',
        tutor : '${alumno.tutor}',
        asignaturas : '${alumno.asignaturas}',
        notas : '${alumno.notas}'
    }

    for(const alumnos of DatosAlumnos){
        
    }
    // Crear listas para asignaturas y notas
    var asignaturasList = document.createElement('ul');
    var notasList = document.createElement('ul');

    for(let i = 0; i < alumno.asignaturas.length; i++){
        var asignatura = alumno.asignaturas[i];
        var nota = alumno.notas[asignatura.nombre];

        var asignaturaItem = document.createElement('li');
        asignaturaItem.textContent = asignatura.nombre + " - " + asignatura.curso + " - Horas Totales: " + asignatura.horas_totales;
        asignaturasList.appendChild(asignaturaItem);

        var notaItem = document.createElement('li');
        notaItem.textContent = 'DatosAlumnos';
        notasList.appendChild(notaItem);
    }



    // Agregar las listas al documento HTML
    document.body.appendChild(asignaturasList);
    document.body.appendChild(notasList);
        