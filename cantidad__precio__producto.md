### Escribir un programa que solicite el nombre de un producto, la cantidad pedida de ese producto y su precio por unidad, efectúe el cálculo del precio total del pedido. El algoritmo imprimirá en pantalla el precio total, con un mensaje como el siguiente: ‘El monto total a pagar por 10 cajas de leche es 7000 colones’.
```
1) Inicio;

2) nombre_producto, mensaje:string; cantidad_producto:int; precio_producto, total:double;

3) Solicitar producto;

4) Asignar nombre_producto = producto;

5) Solicitar cantidad;

6) validar si cantidad == int;
        si( ir a paso 7 );
        si no(ir a paso 5);

7) Asignar cantidad_producto = cantidad;

8) Solicitar precio

9) Validad si precio == double;
        si( paso 10 );
        si no(paso 8);

10) Asignar precio_producto = precio;

11) total = cantidad_producto * precio_producto;

12) mensaje = 'El monto total a pagar por ' + cantidad_producto + ' cajas ' + nombre_producto + ' es de '   + total + ' colones';

13) Imprimir mensaje;

14) Fin;
```
