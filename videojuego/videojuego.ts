import * as readlineSync from 'readline-sync';

class jugador {
    nombre: string;
    puntos_salud: number;
    puntos_ataque: number;
    dinero: number;

    constructor(nombre: string) {
        this.nombre = nombre;
        this.puntos_salud = 20;
        this.puntos_ataque = 0;
        this.dinero = 2;
    }

    imprimirAtributos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Puntos de Salud: ${this.puntos_salud}`);
        console.log(`Puntos de Ataque: ${this.puntos_ataque}`);
        console.log(`Dinero: ${this.dinero}`);
    }

    calcularFuerzaInicial(): void {
        this.puntos_ataque = Math.floor(Math.random() * 12) + 1;
    }
}

class enemigo {
    private nombre: string;
    private puntos_ataque: number;
    private moneditaSuelta: number;

    constructor(nombre: string) {
        this.nombre = nombre;
        this.puntos_ataque = 0;
        this.moneditaSuelta = 0;
    }

    calcularFuerzaEnemigo(): void {
        this.puntos_ataque = Math.floor(Math.random() * 12) + 1;
    }

    imprimirAtributos(): void {
        console.log(`Nombre del enemigo: ${this.nombre}`);
        console.log(`Puntos de Ataque del enemigo: ${this.puntos_ataque}`);
    }

    SoltarDinero(): void {
        let monedita = Math.floor(Math.random() * 5) + 1;
        console.log(`${this.nombre} soltó ${monedita} monedas.`);
    }
}

function obtenerEnemigoAleatorio(nombresEnemigos: string[]): enemigo {
    const indiceAleatorio = Math.floor(Math.random() * nombresEnemigos.length);
    const nombreEnemigoAleatorio = nombresEnemigos[indiceAleatorio];
    return new enemigo(nombreEnemigoAleatorio);
}

function Main() {
    console.log("En Medac, la batalla entre el Reino Rosa y el Reino Gris ha comenzado, y tu misión crucial es preservar la supremacía del rosa entregando tu corazón a la causa. Los seis reyes grises están conspirando para derrocar la vitalidad del rosa y sumir la tierra en la monotonía gris, pero tu lealtad inquebrantable resistía sus artimañas.");
    console.log("Cada enfrentamiento es una prueba de tu firmeza ante las promesas seductoras del gris, que buscan imponer su orden y uniformidad. Con cada victoria, el Reino Rosa se fortalecerá, mostrando la belleza y diversidad frente a la monotonía gris.");
    let nombre: string = readlineSync.question("Introduce el nombre del luchador:");
    console.log("Bienvenido, " + nombre);

    let jugador1 = new jugador(nombre);
    jugador1.calcularFuerzaInicial();
    jugador1.imprimirAtributos();

    let cambiarFuerza = readlineSync.keyInYNStrict("¿Quieres cambiar tu fuerza por 1 oro aleatoriamente?");

    if (cambiarFuerza) {
        if (jugador1.dinero >= 1) {
            jugador1.dinero -= 1;
            jugador1.calcularFuerzaInicial();
            console.log(`Has cambiado tu fuerza por 1 oro. Tu nueva fuerza es: ${jugador1.puntos_ataque}`);
        } else {
            console.log("No tienes suficiente oro para cambiar tu fuerza.");
        }
    }

    const nombresEnemigos = ["Fernando", "Dani", "Sebas", "Ramirez", "Ariel", "Paquillo"];

    while (true) {
        console.log("Bienvenido al Juego:");
        console.log("1. Lucha contra el enemigo");
        console.log("2. Comprar items");
        console.log("3. Consultar estadisticas");
        console.log("4. Salir del juego");

        let menu: string = readlineSync.question("Elige un numero");

        switch (menu) {
            case '1':
                console.log("Te enfrentarás contra...");
                const enemigoAleatorio = obtenerEnemigoAleatorio(nombresEnemigos);
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
