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
    enemigo.prototype.SoltarDinero = function () {
        var monedita = 0;
        monedita = Math.floor(Math.random() * 5) + 1;
        console.log("".concat(this.nombre, " solt\u00F3 ").concat(this.moneditaSuelta, " monedas."));
    };
    return enemigo;
}());
function Main() {
    console.log("En Medac, la batalla entre el Reino Rosa y el Reino Gris ha comenzado, y tu misión crucial es preservar la supremacía del rosa entregando tu corazón a la causa. Los seis reyes grises están conspirando para derrocar la vitalidad del rosa y sumir la tierra en la monotonía gris, pero tu lealtad inquebrantable resistía sus artimañas.");
    console.log("Cada enfrentamiento es una prueba de tu firmeza ante las promesas seductoras del gris, que buscan imponer su orden y uniformidad. Con cada victoria, el Reino Rosa se fortalecerá, mostrando la belleza y diversidad frente a la monotonía gris.");
    var nombre = readlineSync.question("Introduce el nombre del luchador:");
    console.log("Bienvenido, " + nombre);
    //Iiniciar estadísticas del luchador
    var jugador1 = new jugador(nombre);
    jugador1.calcularFuerzaInicial();
    jugador1.imprimirAtributos();
    //Permitir cambiar de estadísticas
    var cambiarFuerza = readlineSync.keyInYNStrict("¿Quieres cambiar tu fuerza por 1 oro aleatoriamente?");
    if (cambiarFuerza) {
        // Pagar 1 oro
        if (jugador1.dinero >= 1) {
            jugador1.dinero -= 1;
            jugador1.calcularFuerzaInicial();
            console.log("Has cambiado tu fuerza por 1 oro. Tu nueva fuerza es: ".concat(jugador1.puntos_ataque));
        }
        else {
            console.log("No tienes suficiente oro para cambiar tu fuerza.");
        }
    }
}
Main();
