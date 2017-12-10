var NombresRep = (function() {
	var nombres = ["Robert", "Carlos", "Karla", "Robert", "Melisa", "Carlos"];
	var repNum = 0;
	function checkRep() {
		for(var i = 0; i < nombres.length; i++) {
			for(var x = i +1; x < nombres.length; x++ ) {
				if( nombres[i] == nombres[x] ) {
					repNum = repNum + 1;
				}
			}
		}
		console.log(repNum);
	}

	return {
		checkRep: checkRep
	}
})();

NombresRep.checkRep();