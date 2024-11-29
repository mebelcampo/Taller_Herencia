class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    hacerSonido() {
        console.log("El animal hace un sonido.");
    }
}
class Perro extends Animal {
    constructor(nombre, edad, raza) {
        super(nombre, edad); 
        this.raza = raza; 
    }
    hacerSonido() {
        console.log("El perro ladra: ¡Guau!");
    }
}
const miPerro = new Perro("Fido", 3, "Labrador");

console.log(miPerro.nombre); 
console.log(miPerro.edad);    
console.log(miPerro.raza);    
miPerro.hacerSonido();  

