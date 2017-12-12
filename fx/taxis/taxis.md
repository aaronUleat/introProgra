##### Un taxi realiza 5 servicios en una hora. Por cada servicio cobra según el kilometraje. La tarifa por el primer kilómetro es de ¢570.00 y el kilómetro adicional tiene un precio de ¢725. Diseñe un diagrama que permita leer los kilómetros recorridos y calcular el total a pagar. Muestre el total por cada servicio y el total general por los 5 servicios. 

* 5 Servicios en una hora;
* Por cada servicio se cobra por kilometraje.
* La tarifa por el primer km es igual 570 colones.
* El Km adicional tiene un precio de 725 colones.
* Leer
    * El numero de kilometros recorridos;
    * Calcular el total a pagar
* Mostrar
    * Total por cada servicio
    * Total general por los 5 servicios;
```
1) Inicio;

2) viajes:int = 5, i:int = 1; km_rec:int, pagar:int, sum_total:int = 0;

3) for(i = 1; i <= viajes; i++)

4) Cuantos kilometros recorrio en el viaje;
      
5) Validar si numero de Kilometros recorridos == numero;
        si(ir a paso 6);
        sino(ir a paso 4);
6) Asignar  km_rec= al numero de kilometros recorridos;
       
7) if( km_rec > 1 )
       
8) pagar =   pagar = 570 + ( (km_rec - 1) * 725 );
     
9) fin if
     
10) if(km_rec == 1)
     
11) pagar = 570;

12) fin if
     
13) Imprimir "El total a pagar por el viaje " + i + " es igual a " + pagar;

14) sum_total += pagar;
      
15) Fin for;
         
13) Imprimir "El total a pagar por los 5 servicios es igual a  " + sum_total;
         
14) Fin         
```
    
