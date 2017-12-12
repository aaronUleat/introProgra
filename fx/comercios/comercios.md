##### Para algunos comercios, recuperar el dinero se hace más difícil durante los períodos de temporada baja, de manera que las empresas deben reducir sus límites de crédito para prevenir que sus cuentas por cobrar se hagan muy grandes. Por esta razón, los comercios redujeron a la mitad sus límites de crédito. Si un cliente tenía un límite de $2000, ahora su límite se reduce en un 50%. Diseñe un diagrama que analice el estado del crédito de N clientes. Por cada cliente debe leer, número de cuenta, límite de crédito antes de la temporada baja, el saldo del cliente. Despliegue la cantidad de clientes que sobrepasan el nuevo límite de crédito. 

* Reducir Limites de Credito.
* Redujeron a la mitad sus limites de credito.
* Si un cliente tenia un limite de $2000 su limite se reduce 50%.
* Por cada cliente leer:
    * Numero de cuenta.
    * Limite de credito antes de la temporada baja.
    * El saldo del cliente.
* Despliegue la cantidad de clientes que sobrepasan el limite de credito.    
    
    
```
1) Inicio;

2) N:int, i:int = 1, cuenta:string, limit_baj:doble, saldo:doble, cust_sob = 0;

3) Solicitar el numero de clientes;

4) Validar si numero de clientes == numero;
        si(ir a paso 5);
        sino(ir a paso 3);
        
5) Asignar N = numero de clientes;

6) For(i = 1; i <= N; i++)

7) Solicitar el numero de cuenta de cliente;

8) Asignar cuenta = numero de cuenta del cliente;

9) Solicitar el limite de credito antes de la temporada baja.
 
10) Validar si credito antes de la temporada baja == numero;
        si(ir a paso 11);
        sino(ir a paso 9);

11) Asignar  limit_baj = al credito antes de temporada baja;
     
12)  Solicitar el saldo del cliente.
    
13) Validar si el santo del cliente == numero:doble
        si(ir a paso 14);
        sino(ir a paso 12);
        
14) Asignar saldo = saldo del cliente;
        
15) if( limit_baj > 2000)
        
16)     cust_sob++;
    
17) Fin if
    
18) Fin For;
    
19) Imprimir "El numero de clientes que sobrepasan el nuevo limite de credito es igual a " +  cust_sob;
   
20) Fin   
```