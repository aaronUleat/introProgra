#### Diseñe un diagrama que lea un vector de 10 elementos. Deberá imprimir el mismo vector por pantalla pero invertido. Ejemplo: dado el vector 1 2 3 4 5 6 7 8 9 10 el programa debería imprimir 10 9 8 7 6 5 4 3 2 1. 

```
1) Inicio

2) numeros[10]:array; var aux:int; i:int = 0; ii:int = 0;

3) for(i = 0; numeros.lenght; i++)

4) Solicitar un numero;

5) validar si numero == numero;
        si(ir a paso 6)
        sino( ir a paso 4);
6) Asignar numeros[i] = numero;

7) Fin for;

8) for(ii = 0; ii < numeros.lenght /  2; i++)

9)  aux = numeros[i];

10) numeros[i] = numeros[numeros.length - 1 - i];

11) numeros[numeros.length - 1 - i] = aux;

12) fin for

13) Imprimir "El vector invertido es igual a = " numeros;

14) fin
```