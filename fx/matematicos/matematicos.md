#### La Escuela Los Matemáticos le ha propuesto a sus alumnos el siguiente problema. Diseñen un diagrama que lea un número y genere y despliegue la suma de la serie:0+1+4+9+16+25+36… hasta el número indicado por el usuario. La serie debe ser generada por medio de ciclos. 

```
1) Inicio;

2) ser_arr:[]; sol_num:int; i:int = 0; ii:int =0; sum_arry:int = 0;

3) Solicitar un numero;

4) valider si numero == numero:int;
        si(ir a paso 5)
        sino(ir a paso 3);
        
5) for(i = 0; i <= sol_num; i++)

6) ser_arr[i] = i*i;

7) Fin for

8) for(ii = 0; ii < ser_arr.lenght; ii++)

9) sum_arry = sum_arry + ser_arr[ii];

11) fin for

12) Imprimir "La suma de la serie ingresada es igual a " + sum_arry

13) fin

```