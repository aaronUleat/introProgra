### Diseñe un diagrama que capture 5 letras vocales en minúscula. Determine la cantidad de vocales con forma recta (i), forma curva (o) y forma mixta (a, e, u) que fueron leídas. 

```
1) Inicio;

2) letras:[5]; i:int = 0; ii:int = 0; cont_curva:int = 0; cont_recta:int = 0; cont_mixta:int = 0;

3) for(i = 0; i < letras.lenght; i++)

4) Solicitar una letra;

5) Validar (letra == 'a' or letra == 'e' or letra == 'i' or letra == 'o' || letra == ''u)
    si(ir a paso 6);
    sino(ir a paso 4);
6) Asignar letras[i] = letra;

7) Fin for;
    
8) for(ii = 0; ii < letras.lenght; i++)
       
9) if(letra[ii] == 'i')
       cont_recta++
10) fin if
       
11) if(letra[ii] == 'o');
       cont_curva++
12) fin if; 
      
13) if(letra[ii] == 'a' or letra[ii] == 'e' or letra[ii] == 'u')
      cont_mixta++;
14) fin if
      
15) fin for;
      
16) Imprimir "El numero de vocales rectas es igual a " + cont_recta + ". El numero de letras curvas es igual a "+ cont_curva + ". El numero de letras mixtas es igual a " + cont_mixta;
       
17) Fin       
```