var formulas = (function() {
	var menu = '', 

	lado_cuadrado,//:double
	perimetro_cuadrado, //:double
	area_cuadrado, // double

	base_rectangulo, // double
	altura_rectangulo, // double
	area_rectangulo, // double
	perimetro_rectangulo, // double

	base__triangulo, // doubloe
	altura__triangulo, // double
	lado_uno_triangulo, // double
	lado_dos_triangulo, // double
	lado_tres_triangulo, // double
	area__triangulo, // double
	perimetro_triangulo, // double

	radio_circulo, // double
	area_circulo, // double
	perimetro_circulo,// double

	diagonal_uno_rombo, // double
	diagonal_dos_rombo, // double
	lado_uno_rombo, // double
	lado_dos_rombo, // double
	lado_tres_rombo, // double
	lado_cuatro_rombo, // double
	area_rombo, // double
	perimetro_rombo; //:double

	function asignFormula() {
		menu = prompt("Ingrese una 'a' si desea saber el area y perimetro de un triangulo, 'b' si quiere calcular el area y perimetro de un cuadrado, 'c' si quiere calcular el area y perimetro de un rectangulo, 'd' si quiere saber el area y perimetro de un circulo y 'e' si desea calcular el area y perimetro de un rombo");
		validateMenu = ( menu == 'a' || menu == 'b' || menu == 'c' || menu == 'd' || menu == 'e');
		if( validateMenu )
		{	
			if(menu == 'a') 
			{
				triangulo();
			}
			else if(menu == 'b')
			{
				cuadrado();
			}
			else if(menu == 'c') 
			{
				rectangulo();
			}
			else if(menu == 'd')
			{
				circulo();
			}
			else if(menu == 'e')
			{
				rombo();
			}
		}
		else
		{
			alert("La letra ingresada no es valida");
			asignFormula();
		}
	}

	function rombo() {
		diagonal_uno_rombo 	= parseFloat( prompt("Ingrese la diagona uno del rombo", "") );
		diagonal_dos_rombo 	= parseFloat( prompt("Ingrese la diagonal_dos_rombo", "") );
		lado_uno_rombo 	= parseFloat( prompt("Ingrese el lado uno del rombo", "") );
		lado_dos_rombo 	= parseFloat( prompt("Ingrese el lado dos del rombo", "") );
		lado_tres_rombo 	= parseFloat( prompt("Ingrese el lado tres del rombo", "") );
		lado_cuatro_rombo 	= parseFloat( prompt("Ingrese el lado tres del rombo", "") );
		if( Number.isFinite(diagonal_uno_rombo) && Number.isFinite(diagonal_dos_rombo) && Number.isFinite(lado_uno_rombo) && Number.isFinite(lado_dos_rombo) && 
		Number.isFinite(lado_tres_rombo) && Number.isFinite(lado_cuatro_rombo) )
		{
			area_rombo 		= (diagonal_uno_rombo * diagonal_dos_rombo) / 2;
			perimetro_rombo	= lado_uno_rombo + lado_dos_rombo + lado_tres_rombo + lado_cuatro_rombo;
			alert(`El area del rombo es igual a ${area_rombo} y perimetro es igual a ${perimetro_rombo}`);
		}
		else {
			alert("Algunas de sus entradas no fueron numeros, ingrese solamente numeros")
			rombo();
		}
	}

	function circulo() {
		radio_circulo = parseFloat( prompt("Ingrese el radio del circulo") );
		if(Number.isFinite(radio_circulo))
		{
			area_circulo 		= Math.PI * pow(radio_circulo, 2);
			perimetro_circulo	= 2 * Math.PI * radio_circulo;
			alert(`El area del circulo es igual a ${area_circulo} y el perimetro es igual ${perimetro_circulo}`);
		}
		else
		{
			alert("Solamente numeros pueden ser ingresados");
			circulo();
		}
	}

	function triangulo() {
		base__triangulo 	= parseFloat( prompt("Ingrese la base del triangulo", "") );
		altura__triangulo	= parseFloat( prompt("Ingrese la altura del triangulo", "") );
		lado_uno_triangulo 	= parseFloat( prompt("Ingrese el lado 1 del triangulo", "") );
		lado_dos_triangulo 	= parseFloat( prompt("Ingrese el lado 2 del triangulo", "") );
		lado_tres_triangulo = parseFloat( prompt("Ingrese el lado 3 del triangulo", "") );
		if( Number.isFinite(base__triangulo) && Number.isFinite(altura__triangulo)  && new Number.isFinite(lado_uno_triangulo) && Number.isFinite(lado_dos_triangulo) && Number.isFinite(lado_tres_triangulo)  )
		{
			area__triangulo 		= (base__triangulo * altura__triangulo) / 2;
			perimetro_triangulo 	= lado_uno_triangulo + lado_dos_triangulo + lado_tres_triangulo;
			alert(`El area del triangulo es igual a ${area__triangulo} y perimetro es igual a ${perimetro_triangulo}`);
		}
		else
		{
			alert("Solamente numeros son aceptados");
			triangulo();
		}
	}

	function rectangulo() {
		base_rectangulo 	= parseFloat( prompt("Ingrese la base del rectangulo", '') );
		altura_rectangulo	= parseFloat( prompt("Ingrese la altura del rectangulo", '') );
		if( Number.isFinite(base_rectangulo) && Number.isFinite(altura_rectangulo) ) {
			area_rectangulo 		= base_rectangulo * altura_rectangulo;
			perimetro_rectangulo	= (base_rectangulo * 2) + (altura_rectangulo * 2);
			alert(`El area del rectangulo es igual a ${area_rectangulo} y el perimetro es igual a ${perimetro_rectangulo}`)
		}
		else {
			alert("Solamente numeros son aceptados");
			rectangulo();
		}
	}
	function cuadrado() {
		 lado_cuadrado 		= parseFloat( prompt("Ingrese la media de uno de los lados del cuadrado", ''));
		 if(Number.isFinite(lado_cuadrado) ) {
		 	perimetro_cuadrado = lado_cuadrado * 4;
		 	area_cuadrado		= Math.pow(lado_cuadrado, 2);
		 	alert(`El area del cuadrado es igual a ${area_cuadrado} y perimetro es igual a ${perimetro_cuadrado}`)
		 }
		 else 
		 {
		 	alert("Solamente numeros son validos");
		 	cuadrado();
		 }
		
	}

	return {
		asignFormula: asignFormula
	}
})();

formulas.asignFormula();