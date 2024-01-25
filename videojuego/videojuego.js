"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var jugador = /** @class */ (function () {
    function jugador(nombre) {
        this.nombre = nombre;
        this.puntos_salud = 20;
        this.puntos_ataque = 0;
        this.dinero = 2;
    }
    jugador.prototype.imprimirAtributos = function () {
        console.log("Nombre: ".concat(this.nombre));
        console.log("Puntos de Salud: ".concat(this.puntos_salud));
        console.log("Puntos de Ataque: ".concat(this.puntos_ataque));
        console.log("Dinero: ".concat(this.dinero));
    };
    jugador.prototype.calcularFuerzaInicial = function () {
        this.puntos_ataque = Math.floor(Math.random() * 12) + 1;
    };
    return jugador;
}());
var enemigo = /** @class */ (function () {
    function enemigo(nombre) {
        this.nombre = nombre;
        this.puntos_ataque = 0;
        this.moneditaSuelta = 0;
    }
    enemigo.prototype.calcularFuerzaEnemigo = function () {
        this.puntos_ataque = Math.floor(Math.random() * 12) + 1;
    };
    enemigo.prototype.imprimirAtributos = function () {
        console.log("Nombre del enemigo: ".concat(this.nombre));
        console.log("Puntos de Ataque del enemigo: ".concat(this.puntos_ataque));
    };
    enemigo.prototype.SoltarDinero = function () {
        var monedita = Math.floor(Math.random() * 5) + 1;
        console.log("".concat(this.nombre, " solt\u00F3 ").concat(monedita, " monedas."));
    };
    return enemigo;
}());
function obtenerEnemigoAleatorio(nombresEnemigos) {
    var indiceAleatorio = Math.floor(Math.random() * nombresEnemigos.length);
    var nombreEnemigoAleatorio = nombresEnemigos[indiceAleatorio];
    return new enemigo(nombreEnemigoAleatorio);
}
function Main() {
    console.log("En Medac, la batalla entre el Reino Rosa y el Reino Gris ha comenzado, y tu misión crucial es preservar la supremacía del rosa entregando tu corazón a la causa. Los seis reyes grises están conspirando para derrocar la vitalidad del rosa y sumir la tierra en la monotonía gris, pero tu lealtad inquebrantable resistía sus artimañas.");
    console.log("Cada enfrentamiento es una prueba de tu firmeza ante las promesas seductoras del gris, que buscan imponer su orden y uniformidad. Con cada victoria, el Reino Rosa se fortalecerá, mostrando la belleza y diversidad frente a la monotonía gris.");
    var nombre = readlineSync.question("Introduce el nombre del luchador:");
    console.log("Bienvenido, " + nombre);
    var jugador1 = new jugador(nombre);
    jugador1.calcularFuerzaInicial();
    jugador1.imprimirAtributos();
    var cambiarFuerza = readlineSync.keyInYNStrict("¿Quieres cambiar tu fuerza por 1 oro aleatoriamente?");
    if (cambiarFuerza) {
        if (jugador1.dinero >= 1) {
            jugador1.dinero -= 1;
            jugador1.calcularFuerzaInicial();
            console.log("Has cambiado tu fuerza por 1 oro. Tu nueva fuerza es: ".concat(jugador1.puntos_ataque));
        }
        else {
            console.log("No tienes suficiente oro para cambiar tu fuerza.");
        }
    }
    var nombresEnemigos = ["Fernando", "Bea", "Sebas", "Ramirez", "Ariel", "Paquillo"];
    while (true) {
        console.log("Bienvenido al Juego:");
        console.log("1. Lucha contra el enemigo");
        console.log("2. Comprar items");
        console.log("3. Consultar estadisticas");
        console.log("4. Salir del juego");
        var menu = readlineSync.question("Elige un numero");
        switch (menu) {
            case '1':
                console.log("Te enfrentarás contra...");
                var enemigoAleatorio = obtenerEnemigoAleatorio(nombresEnemigos);
                enemigoAleatorio.imprimirAtributos(); // Imprime los atributos del enemigo
                break;
            case '2':
                console.log("uwu");
                break;
            case '3':
                console.log("Las estadísticas son:");
                jugador1.imprimirAtributos();
                break;
            case '4':
                console.log("Saliendo del juego, gracias !");
                process.exit(0);
                break;
            default:
                console.log("Opción no válida. Por favor, selecciona una opción válida.");
        }
    }
}
Main();
