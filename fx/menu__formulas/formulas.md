### Diseñe un diagrama que mediante un menú permita realizar lo siguiente: 
a. Calcular el área y el perímetro de un triángulo

b. Calcular el área el perímetro de un cuadrado

c. Calcular el área y el perímetro de un rectángulo

d. Calcular el área y el perímetro de un círculo

e. Calcular el área y el perímetro de un rombo 
```
1) Inicio;

2)  menu:string; lado_cuadrado:double; perimetro_cuadrado:double; area_cuadrado:double; base_rectangulo:double; altura_rectangulo:double;
	area_rectangulo:double; perimetro_rectangulo:double; base__triangulo:double; altura__triangulo:double; lado_uno_triangulo:double;
	lado_dos_triangulo:double; lado_tres_triangulo:double; area__triangulo:double; perimetro_triangulo:double; radio_circulo:double;
	area_circulo:double;  perimetro_circulo:double; diagonal_uno_rombo:double; diagonal_dos_rombo:double; lado_uno_rombo:double;
	lado_dos_rombo:doble; lado_tres_rombo:double; lado_cuatro_rombo:double; area_rombo:doble; perimetro_rombo:doble; PI:double = 3.14;

3 Solicitar "Ingrese una 'a' si desea saber el area y perimetro de un triangulo, 'b' si quiere calcular el area y perimetro de un cuadrado, 'c' si quiere calcular el area y perimetro de un rectangulo, 'd' si quiere saber el area y perimetro de un circulo y 'e' si desea calcular el area y perimetro de un rombo";

4) Si ( menu == 'a' or menu == 'b' or menu == 'c' or menu == 'd' or menu == 'e')
		si(Ir a paso 5 )
		no(Ir a paso 3 )
/*TRIANGULO*/

5) If (menu == a)

6)  Solicitar la base del triangulo;

7) Validar si base == numero;
		si(ir a paso 8)
		no (ir a paso 6)

8) Asignar base__triangulo = base;

9) Solicitar altura del triangulo;

10) Validar si altura del triangulo == numero;
		si(ir paso 11)
		no (ir paso 9)

11) Asignar altura__triangulo = altura del triangulo;

12) Solictar el primer lado del triangulo;

13) validar si el primer lado del triangulo == numero;
		si(ir a paso 14);
		no(ir a paso 12);

14) Asigar lado_uno_triangulo = el primer lado del triangulo;

15) Solictar el lado dos del triangulo;

16) Validar si lado dos del triangulo == numero;

17) Asignar lado_dos_triangulo = lado dos del triangulo;

18) Solicitar el lado tres del triangulo;

19) Validar si lado tres del triangulo == numero;
		si(ir a paso 20);
		no(ir a paso 18);

20)  Asignar lado_tres_triangulo = lado tres del triangulo;

21) area__triangulo = (base__triangulo * altura__triangulo) / 2;

22) perimetro_triangulo 	= lado_uno_triangulo + lado_dos_triangulo + lado_tres_triangulo;

23) Imprimir "El area del triangulo es igual a " + area__triangulo + " y perimetro es igual a " + perimetro_triangulo;

24) Fin del If
/*TRIANGULO*/
/*CUADRADO*/

25) If (menu == b)

26) Solicitar el lado del cuadrado;

27) Validar que el lado del cuandrado == numero;

28) lado_cuadrado = lado del cuadrado; 

29) perimetro_cuadrado  = lado_cuadrado * 4;

30) area_cuadrado		= lado_cuadrado^2;

31) Imprimir "El area del cuadrado es igual a " +  area_cuadrado + " y perimetro es igual a " + perimetro_cuadrado;

32) Fin If

/*CUADRADO*/    
/*RECTANGULO*/
33) if(menu == c)

34) Solicitar la base del rectangulo;

35) Validar si base del rectangulo == numero;
		si(ir paso 33);
		sino(ir paso 32)

36) Asingar base_rectangulo = basel del rectangulo;

37) Solicitar altura del rectangulo;

38) Validar si altura == numero;
		si(ir a paso 36)
		sino(ir a paso 34);

39) area_rectangulo 		= base_rectangulo * altura_rectangulo;

40) perimetro_rectangulo	= (base_rectangulo * 2) + (altura_rectangulo * 2);

41) Imprimir "El area del rectangulo es igual a " + area_rectangulo + " y el perimetro es igual a " + perimetro_rectangulo;

42) Fin if

/*RECTANGULO*/

/*CIRCULO*/

43) if(menu == d)


44) Solicitar el radio del circulo;

45) Validar si radio del circulo == numero;

46) Asignar radio_circulo = a el radio del circulo;

47) area_circulo 		= PI * radio_circulo^2 ;

48) perimetro_circulo	= 2 * PI * radio_circulo;

49) "El area del circulo es igual a  " + area_circulo + " y el perimetro es igual " + perimetro_circulo;

50) Fin If
/*CIRCULO*/

/*ROMBO*/

51) If( menu == e);

52) Solicitar la primer diagonal del rombo;

53) Validar si la primer diagonal == numero;
		si(ir paso 54);
		sino(ir paso 52);

54) Asignar diagonal_uno_rombo = a la primer diagonal del rombo;

55) Solicitar la segundo diagonal del rombo;

56) Validar si la segunda diagonal del rombo == numero;
		si(ir a paso 57)
		sino(ir a paso 55);

57) Asignar diagonal_dos_rombo = a la segunda diagonal del rombo;

58) Solicitar el lado uno del rombo;

59) Validar si el lado uno del rombo == numero;
		si(ir a paso 60)
		sino(ir a paso 58)

60) Asignar lado_uno_rombo =  al lado uno del rombo;

61) Solicitar el lado dos del rombo;

62) Validar si el lado dos del rombo == numero;
		si(ir a paso 63);
		sino(ir a paso 61);

63) Asignar lado_dos_rombo = al lado dos del rombo;

64) Solicitar el lado tres del rombo;

65) Validar si el lado tres del rombo == numero;
		si(ir a paso 66)
		sino(ir a paso 64)

66) Asignar lado_tres_rombo = al lado tres del rombo;

67) Solicitar el lado cuatro del rombo;

68) Validar si el lado cuatro del rombo == numero;
		si(ir a paso 69);
		sino(ir a paso 67)
69) Asignar lado_cuatro_rombo = al lado cuatro del rombo;

70) area_rombo 		= (diagonal_uno_rombo * diagonal_dos_rombo) / 2;

71) perimetro_rombo	= lado_uno_rombo + lado_dos_rombo + lado_tres_rombo + lado_cuatro_rombo;

72) Imprimir "El area del rombo es igual a " area_rombo + " y perimetro es igual a " + perimetro_rombo;

/*ROMBO*/

73) Fin

```