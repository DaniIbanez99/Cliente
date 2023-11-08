class Tutor {
    //creamos clase de tutor, asignatura y alumno con un constructor pasando valores
    constructor(nombre, edad, dni, tituloUniversitario) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.tituloUniversitario = tituloUniversitario;
    }
}

class Asignatura {
    constructor(nombre, curso, horasTotales) {
        this.nombre = nombre;
        this.curso = curso;
        this.horasTotales = horasTotales;
    }
}

//creamos cuatro objetos para las asignaturas
const asignatura1 = new Asignatura("Programación", 2, 120);
const asignatura2 = new Asignatura("Lenguajes de Marcas", 2, 80);
const asignatura3 = new Asignatura("Base de Datos", 2, 134);
const asignatura4 = new Asignatura("Interfaces", 2, 100);

const asignaturas = [asignatura1, asignatura2, asignatura3, asignatura4];

class Alumno {
    constructor(nombre, edad, ciclo, curso, tutor, asignaturas) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciclo = ciclo;
        this.curso = curso;
        this.tutor = tutor;
        this.asignaturas = asignaturas;
        this.notas = new Array(asignaturas.length);
    }
}

const tutor = new Tutor("Caro", 40, "12345678C", "Ingeniera informática");
const alumno = new Alumno("Daniel", 24, "DAW", 2, tutor, asignaturas);

alumno.notas = [10, 8, 9, 7];

// mostrar la información en el HTML
document.getElementById("nombre").textContent = alumno.nombre;
document.getElementById("edad").textContent = alumno.edad;
document.getElementById("ciclo").textContent = alumno.ciclo;
document.getElementById("curso").textContent = alumno.curso;
document.getElementById("tutor").textContent = alumno.tutor.nombre;

//se accede a los elementos en el documento html
const asignaturasList = document.getElementById("asignaturas");
//se crean listas de asignaturas y notas
alumno.asignaturas.forEach(asignatura => {
    const li = document.createElement("li");
    li.textContent = `${asignatura.nombre} (curso ${asignatura.curso}, ${asignatura.horasTotales} horas totales)`;
    asignaturasList.appendChild(li);
});

const notasList = document.getElementById("notas");
alumno.notas.forEach((nota, index) => {
    const li = document.createElement("li");
    li.textContent = `${alumno.asignaturas[index].nombre}: ${nota}`;
    notasList.appendChild(li);
});
