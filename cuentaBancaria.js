// Clase Empleado
class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    obtenerDetalles() {
        return `Nombre: ${this.nombre}, Salario: ${this.salario}`;
    }
}
class Gerente extends Empleado {
    constructor(nombre, salario, departamento) {
        super(nombre, salario); 
        this.departamento = departamento;
    }

    obtenerDetalles() {
        return `${super.obtenerDetalles()}, Departamento: ${this.departamento}`;
    }
}
const gerente = new Gerente("Carlos", 5000, "Ventas");
console.log(gerente.obtenerDetalles());  
