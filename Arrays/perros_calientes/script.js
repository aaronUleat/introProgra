function Persona(nombre, mordiscos){
	this.nombre = nombre;
	this.mordiscos = mordiscos;
};
Persona.prototype.nombre = this.nombre;
Persona.prototype.mordiscos = this.mordiscos;
var persona1 = new Persona('Carlos', 3); 
var persona2 = new Persona('Robert', 4);
var persona3 = new Persona('Karla', 5);

var personas = [persona1, persona2, persona3];

for(var i = 0; i < personas.length ; i++) {
	
}




