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

    recogerDinero(moneditaSuelta: number): void{
        this.dinero += moneditaSuelta;
    }

    mostrarPanelComprar(): void{
        console.log("Comprar armas");
        console.log("1. Bomba = 5 monedas (+4 daño)");
        console.log("2. Metralleta = 12 monedas (+6 daño)");
        console.log("3. Pistola = 8 monedas (+2 daño)");
        console.log("4. Tirita curacion = 6 monedas (+2 vida)");
        console.log("5. Salir de la compra");
    }

    comprarArma(opcion: string): void {
        let precio: number;
        let ataqueExtra: number;

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
            console.log(`Has comprado el arma. Tu nuevo ataque es: ${this.puntos_ataque}`);
        } else {
            console.log("No tienes suficiente oro para comprar esa arma.");
        }
    }
}

class enemigo {
    private nombre: string;
    private ataque: number;
    private salud: number;
    private moneditaSuelta: number;

    obtenerAtaque(): number{
        return this.ataque;
    }

    constructor(nombre: string) {
        this.nombre = nombre;
        this.salud = 0;
        this.ataque = 0;
        this.moneditaSuelta = 0;
    }
    
    imprimirAtributosEnemigos(): void {
            console.log(`Nombre del enemigo: ${this.nombre}`);
            console.log(`Puntos de Ataque del enemigo: ${this.ataque}`);
            console.log(`Puntos de Salud del enemigo: ${this.salud}`);
        }

    calcularFuerzaEnemigo(): void {
        this.ataque = Math.floor(Math.random() * 20) + 1;
    }

    calcularSaludEnemigo(): void {
        this.salud = Math.floor(Math.random() * 20) + 1;
    }

   

    soltarDinero(): number {
        let monedita = Math.floor(Math.random() * 5) + 1;
        console.log(`${this.nombre} soltó ${monedita} monedas.`);
        return monedita;
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
                enemigoAleatorio.calcularFuerzaEnemigo(); // Calcular fuerza enemiga
                enemigoAleatorio.calcularSaludEnemigo();  // Calcular salud enemiga
                enemigoAleatorio.imprimirAtributosEnemigos(); 

                if (jugador1.puntos_ataque >= enemigoAleatorio.obtenerAtaque()) {
                    console.log("¡Ganaste el combate y ganas oro!");
                    const monedaGanadas = enemigoAleatorio.soltarDinero();
                    jugador1.recogerDinero(monedaGanadas);
                } else {
                    const diferenciaAtaque = enemigoAleatorio.obtenerAtaque() - jugador1.puntos_ataque;
                    jugador1.puntos_salud -= diferenciaAtaque;
            
                    if (jugador1.puntos_salud <= 0) {
                        console.log("¡Perdiste el juego! Tu vida ha llegado a 0.");
                        process.exit(0); // Salir del juego
                    } else {
                        console.log(`Perdiste el combate. Pierdes ${diferenciaAtaque} puntos de salud.`);
                    }
                }
                break;

            case '2':
                jugador1.mostrarPanelComprar();

                let opcionCompra: string = readlineSync.question("Elige un numero");
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
