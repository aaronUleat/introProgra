var peso__estatura = (function() {
	var n = 0, personas = [], i = 0, ii = 0;
	function peso_estat() {
		n = parseInt(prompt("Solicite un numero", ''));
		var int = Number.isInteger(n);
		if (int == true) {
			createArray(n)
		} else {
			alert("Solamente un numero entero es permitido");
			peso_estat();
		}
	}

	function createArray(num) {
		personas = new Array(num);
		generatePerson(personas)
	}

	function generatePerson(arr) {
		for(i = 0; i < personas.length; i++) {
			var persona = prompt("Ingrese el nombre de la persona ", '');
			personas[i] = persona
		}

		calculateWeight(personas);
	}

	function calculateWeight(personas) {
		for( ii = 0; ii < personas.length; ii++) {
			var peso = parseInt( prompt("Ingrese el peso de la persona " + personas[ii] + " en Kilogramos", '') );
			var estatura = parseInt( prompt("Ingrese la estatura de la persona " + personas[ii] + " centimetros ", '') );
			if(Number.isInteger(peso) && Number.isInteger(estatura) ) {
				var estPulg = estatura / 100;
				var pesoIdeal = peso/(estPulg*2);
				alert("El peso ideal de " + personas[ii] + ' es igual a ' + pesoIdeal);
			} else {
				calculateWeight();
			}
		} 
	}

	return {
		peso_estat: peso_estat
	}
})();
peso__estatura.peso_estat();