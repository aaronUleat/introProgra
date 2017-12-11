var vocales = (function() {
	var letras = ['a', 'e', 'i', 'i', 'e'], cont_rectas = 0, cont_curvas = 0, cont_mixtas = 0;
	function requestLetters() {
		for(var i= 0; i < letras.length; i++) {
			if(letras[i] == 'i')
			{
				cont_rectas++;
			}
			else if(letras[i] == 'o')
			{
				cont_curvas++;
			}
			else if(letras[i] == 'a'|| letras[i] == 'e' || letras == 'u') {
				cont_mixtas++;
			}
		}
		console.log(`Hay ${cont_rectas} letras rectas, ${cont_curvas} letras curvas y ${cont_mixtas} letras mixtas`);
	}
	return {
		requestLetters: requestLetters
	}
})();
vocales.requestLetters();