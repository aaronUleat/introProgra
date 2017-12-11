#### Capturar el nombre y tres notas de N estudiantes, desplegar una pantalla con una boleta de calificaciones. Si el estudiante obtuvo una nota mayor a 80 y menor o igual a 90, se le sumará 5 puntos a su nota. Si además estudia Ingeniería en Sistemas se le otorgarán 5 puntos adicionales. Calcule la nota final del alumno y determine la cantidad de estudiantes aprobados y aplazados, porcentaje de alumnos aprobados y porcentaje de alumnos reprobados. 

```
1) Inicio;

2) num_est:int, i:int = 1, ii:int = 0, ing_sis:int, est_apro = 0, est_aplz = 0, perc_apro:doble, perc_aplz:doble, nota_1:int, nota_2:int, nota_3:int; nobre:str; notas:[]; notaFin:int; y:int: 0;

3) Solicitar el numero de estudiantes;

4) Validar si el numero de estudiantes == numero;
	si(ir a paso 5)
	sino(ir a paso 3)

5) Asignar num_est = numero de estudiantes;

6) for(i = 1; i <= num_est; i++)

7) Solictar el nombre del estudiante;

8) Asignar nombre = nombre del estudiante;

9) Solicitar la primera nota del estudiante;

10) Validar si la primerta nota == numero;
		si(ir a paso 11);
		sino(ir a paso 9);

11) Asignar nota_1 = a la primera nota;

12) Solicitar la segunda nota del estudiante;

13) Validar si la segunda nota == numero;
		si(ir a paso 14);
		sino(ir a paso 12);		

14) Asigar nota_2 = segunda nota del estudiante;

15) Solicitar la tercera nota del estudiante;

16) Validar si la tercera nota == numero;
		si(ir a paso 17);
		sino(ir a paso 15);

17) Asigar nota_3 = tercera nota del estudiante;

18) Asignar notas[nota_1, nota_2, nota_3];

19) Solicitar un numero 1 si el estudiante estudia Ing en Sist y 0 si no estudia Ing en sis; 

20) Validar (numer ingresado == 0 or numero ingresado == 1)
		si(ir a paso 19);
		no(ir a paso 21);

21) Asignar ing_sis = al numero ingresado;

22) for(ii = 0; ii < notas.lenght; ii++)

23) if(notas[ii] > 80 && notas[ii] <= 90 );

24) notas[ii] += 5;

25) fin if

26) if(ing_sis == 1)

27) notas[ii] += 5;

28) fin if

29) fin for notas;

31) notaFin = 0;

30) for(y = 0; y < notas.lenght; y++)

31) notaFin += notaFin[y]; 

32) fin for notas;

33) if( notaFin < 70 )

34)  est_aplz++;

35) else

36) est_apro++;

37) Fin for num_est;

38) perc_apro = (est_apro / numero) * 100;

39) perc_aplz = (est_aplz / numero) * 100;

40) Imprimir "El numero de estudiantes aprovados es igual a = "  + est_apro + ", el numero de estudiantes aplazados es igual a " + est_aplz+ ". El porcentaje de estudiantes aprovados es igual a " + perc_apro + " y el porcentaje de estudiantes reprobados es igual a " + perc_aplz + ". La nota final del estudiante es igual a " + notaFin;

41) fin
        
```