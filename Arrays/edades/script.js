var n,
	ingEd,
	falso = false,
	x = 0,
	edades = [],
	prt;

prt = prompt("Ingrese el numero de campos en array", '');
n = parseInt( prt - 1 );

if( isNaN( n ) ) {
	alert("Por favor ingrese un numero, y recargue la pagina");
	throw new Error("no es un numero");
}
edades.length = n;

for(x = 0; x <= edades.length; x++) {
	engEd = prompt("Ingrese edad numero = " + (x + 1) , "");
	engEd = parseInt( engEd );
	if( isNaN( engEd ) ) {
		x = x - 1;
		alert("Solo numeros son validos");
		return falso;
	}
	console.log("Lo hize");
}