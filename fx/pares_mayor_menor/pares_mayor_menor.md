##### Diseñe un diagrama que pida 10 números enteros por teclado y que imprima por pantalla: 
1) Cuántos de esos números son pares. 
2) Cuál es el valor del número mayor. 
3) Cuál es el valor del número menor.



```
1) Inicio;

2) numeros:[10], i:int = 0, ii:int = 0, menor:int, mayor:int, pares:int = 0;

3) for(i = 0; i < numeros.length);

4) Solicitar un numero;

5) Validar si numero == numero;
        si(ir a paso 6);
        sino(ir a paso 4);

6) Asignar numeros[i] = numero;
 
7) Fin For
 
8) menor = numeros[0];

9) mayor = numeros[0];
 
10) for(ii = 0; ii < numeros.length; ii++)
   
11)  if(numeros[i] < menor)
  
12)     menor = numeros[i];

13) fin if

14) if(numeros[i] > mayor)

15)      mayor = numeros[i];

16) fin if

17) if(numeros[i] % 2 == 0)

18)  pares++;

19) fin If

20) fin for

21) Imprimir "El numero menor es igual a " + menor + ", el numero mayor es igual a " + mayor + " y hay " + pares + " numeros pares";

22) Fin

```