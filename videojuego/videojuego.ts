class jugador{
    
    nombre:string;
    puntos_salud:number;
    puntos_ataque:number;
    dinero:number;


    constructor (nombre: string){
        this.nombre = nombre;
        this.puntos_salud = 20;
        this.puntos_ataque = 0;
        this.dinero = 2;
    }  
     
    imprimirAtributos(): void{     
        console.log('Nombre: ${this.nombre}');
        console.log('Puntos de Salud: ${this.puntos_salud}');
        console.log('Puntos de Ataque: ${this.puntos_ataque}');
        console.log('Dinero: ${this.dinero}');
    }    
    calcularFuerzaInicial(): void{
       this.puntos_ataque = Math.floor(Math.random() * 12) + 1; 
    }
}

class enemigo {
    private nombre:string;
    private puntos_ataque:number;
    private moneditaSuelta:number;

    constructor (nombre: string){
        this.nombre = nombre;
        this.puntos_ataque = 0;
        this.moneditaSuelta = 0;
    } 

    calcularFuerzaEnemigo(): void{
        this.puntos_ataque = Math.floor(Math.random() * 12) + 1; 
     }

     SoltarDinero(): void{
        let monedita = 0;

        monedita =  Math.floor(Math.random() * 5) + 1;
        console.log('${this.nombre} soltó ${this.moneditaSuelta} monedas.');
     }
}

class Main{
    let nombrecitos: string[] = [];
}
