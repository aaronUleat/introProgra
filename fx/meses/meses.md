#### Diseñe un diagrama que lea una letra correspondiente a la inicial de un mes. Determine si el mes tiene 28, 30 o 31 días. El programa debe ejecutarse 5 veces. 

```
1) Inicio;

2) letra:string; i:int = 1; num_dias:int;

3) for(i = 1 ; i <= 5; i++)

4) Solicitar la inicial del mes

5) validar si la inicial ( inicial == 'e' or inicial == 'f' or  inicial == 'm' or inicial == 'j' or letra == 'a' or letra == 's' or letra == 'o' or letra == 'n' or letra == 'd' )
        si(ir a paso  5)
        sino(ir paso 3)

6) Asignar letra = a la inicial ingresada;

7) if(letra == 'a')

8) Solicitar un numero 1 para abril o un 0 para agosto

9) Validar si (numero == 0 or numero == 1)
        si(ir a paso 10)
        sino(ir a paso 8);
10) if( numero == 1 )
        num_dias = 30
11) fin if 1
    
12) if(numer == 0)
        num_dias = 31
13) fin if 0;

14) fin if letra a

15)  if(letra == 'j')

16) Solicitar numero 1 para el mes de junio o numero 0 para el mes de julio;

17) validar si (numero == 0 or numero == 1)
        si(ir a paso 18)
        sino(ir a paso 16)
        
18) if(numero == 0)
        num_dias = 31
19) Fin if 0

20) if(numero == 1)
        num_dias = 30;
21) fin if 1

22) fin if letra j

23) if(letra == 'f')
        num_dias = 28;
24) fin if

25) if(letra == 's' or letra == 'n')
        num_dias = 30;
26) fin if

27) if(letra == 'e' or letra == 'm' or letra == 'o' or letra == 'd')
        num_dias = 31;
28) fin if

29) "el mes ingresado tiene un total de " num_dias + " dias";

30) fin for

31) fin
        
```