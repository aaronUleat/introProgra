var NotasEstudiantes = (function() {
	var  num_est, i, ii, ing_sis, est_apro = 0, est_aplz = 0, perc_apro, perc_aplz, nota_1, nota_2, nota_3 ;

	function solicitarEst() { // paso 1
		var num_est = parseInt( prompt("Ingrese el numero de estudiantes") ); // paso 3
		if(Number.isInteger(num_est)) { // paso 4
			porCadaEst(num_est)
		} else {
			alert("Solamente numeros son aceptados");
		}
	}

	function porCadaEst(numero) { // paso 5
		for(i = 1; i <= numero; i++) {
			var nombre = prompt("Solicite el nombre de estudiante");
			var nota_1 = parseInt( prompt("Solicitar la primer nota del estudiante") );
			var nota_2 = parseInt( prompt("Solicitar la segunda nota del estudiante") );
			var nota_3 = parseInt( prompt("Solicitar la tercera nota del estudiante") );
			if( Number.isInteger(nota_1) && Number.isInteger(nota_2) && Number.isInteger(nota_3) ) {
				notas = [nota_1, nota_2, nota_3];
				ing_sis = parseInt( prompt("Digite 1 si es estudiante de Ingenieria en sistemas y 0 si no lo es") );
				var notas_finales = verificarNotas(notas, ing_sis);
				var sumatoria = notaSumatoria(notas_finales);
				if(sumatoria < 70) {
					est_aplz++;
				} else {
					est_apro++;
				}

			} else {
				porCadaEst(numero)
			}
		}
		perc_apro = (est_apro / numero) * 100;
		perc_aplz = (est_aplz / numero) * 100;
		alert(`El numero de estudiantes aprovados es igual a = ${est_apro}, el numero de estudiantes aplazados es igual a ${est_aplz}. El porcentaje de estudiantes aprovados es igual a ${perc_apro} y el porcentaje de estudiantes reprobados es igual a ${perc_aplz}`);

	}

	function verificarNotas(notas, sistemas) {
		for(var ii = 0; ii < notas.length; ii++) {
			if(notas[ii] > 80 && notas[ii] <= 90) {
				notas[ii] += 5;
			}
			if( sistemas == 1 ) {
				notas[ii] +=  5;
			}
		}
		return notas;
	}
	function notaSumatoria(finales) {
		var notaFin = 0;
		for(var y = 0; y < finales.length; y++) {
			notaFin += finales[y];
		}
		var notaSum = notaFin / 3;
		return notaSum;
	}
	return {
		solicitarEst: solicitarEst
	}
})();
NotasEstudiantes.solicitarEst();
