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
    jugador.prototype.recogerDinero = function (moneditaSuelta) {
        this.dinero += moneditaSuelta;
    };
    jugador.prototype.mostrarPanelComprar = function () {
        console.log("Comprar armas");
        console.log("1. Bomba = 5 monedas (+4 daño)");
        console.log("2. Metralleta = 12 monedas (+6 daño)");
        console.log("3. Pistola = 8 monedas (+2 daño)");
        console.log("4. Tirita curacion = 6 monedas (+2 vida)");
        console.log("5. Salir de la compra");
    };
    jugador.prototype.comprarArma = function (opcion) {
        var precio;
        var ataqueExtra;
        switch (opcion) {
            case '1':
                precio = 5;
                ataqueExtra = 4;
                break;
            case '2':
                precio = 12;
                ataqueExtra = 6;
                break;
            case '3':
                precio = 8;
                ataqueExtra = 2;
                break;
            case '4':
                precio = 6;
                // En lugar de ataque extra, se añaden puntos de vida
                ataqueExtra = 0;
                this.puntos_salud += 2; // Ajusta según tus necesidades
                console.log("Has comprado una tirita de curación. Recuperas 2 puntos de vida.");
                break;
            case '5':
                console.log("Volviendo al menú principal.");
                return;
            default:
                console.log("Opción no válida. No has comprado nada.");
                return;
        }
        if (this.dinero >= precio) {
            this.dinero -= precio;
            this.puntos_ataque += ataqueExtra;
            console.log("Has comprado el arma. Tu nuevo ataque es: ".concat(this.puntos_ataque));
        }
        else {
            console.log("No tienes suficiente oro para comprar esa arma.");
        }
    };
    return jugador;
}());
var enemigo = /** @class */ (function () {
    function enemigo(nombre) {
        this.nombre = nombre;
        this.salud = 0;
        this.ataque = 0;
        this.moneditaSuelta = 0;
    }
    enemigo.prototype.obtenerAtaque = function () {
        return this.ataque;
    };
    enemigo.prototype.imprimirAtributosEnemigos = function () {
        console.log("Nombre del enemigo: ".concat(this.nombre));
        console.log("Puntos de Ataque del enemigo: ".concat(this.ataque));
        console.log("Puntos de Salud del enemigo: ".concat(this.salud));
    };
    enemigo.prototype.calcularFuerzaEnemigo = function () {
        this.ataque = Math.floor(Math.random() * 20) + 1;
    };
    enemigo.prototype.calcularSaludEnemigo = function () {
        this.salud = Math.floor(Math.random() * 20) + 1;
    };
    enemigo.prototype.soltarDinero = function () {
        var monedita = Math.floor(Math.random() * 5) + 1;
        console.log("".concat(this.nombre, " solt\u00F3 ").concat(monedita, " monedas."));
        return monedita;
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
    var nombresEnemigos = ["Fernando", "Dani", "Sebas", "Ramirez", "Ariel", "Paquillo"];
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
                enemigoAleatorio.calcularFuerzaEnemigo(); // Calcular fuerza enemiga
                enemigoAleatorio.calcularSaludEnemigo(); // Calcular salud enemiga
                enemigoAleatorio.imprimirAtributosEnemigos();
                if (jugador1.puntos_ataque >= enemigoAleatorio.obtenerAtaque()) {
                    console.log("¡Ganaste el combate y ganas oro!");
                    var monedaGanadas = enemigoAleatorio.soltarDinero();
                    jugador1.recogerDinero(monedaGanadas);
                }
                else {
                    var diferenciaAtaque = enemigoAleatorio.obtenerAtaque() - jugador1.puntos_ataque;
                    jugador1.puntos_salud -= diferenciaAtaque;
                    if (jugador1.puntos_salud <= 0) {
                        console.log("¡Perdiste el juego! Tu vida ha llegado a 0.");
                        process.exit(0); // Salir del juego
                    }
                    else {
                        console.log("Perdiste el combate. Pierdes ".concat(diferenciaAtaque, " puntos de salud."));
                    }
                }
                break;
            case '2':
                jugador1.mostrarPanelComprar();
                var opcionCompra = readlineSync.question("Elige un numero");
                jugador1.comprarArma(opcionCompra);
                break;
            case '3':
                console.log("Las estadisticas son:");
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
