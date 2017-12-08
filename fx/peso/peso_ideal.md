### Diseñe un diagrama que lea el peso y la estatura de N personas. Determine cuántas están en el peso ideal, cuántas exceden el peso normal y cuántas tienen un peso inferior. 
```
1) Inicio;
2) personas:int; i:int:0; peso:int; altura:int; imc:double; alt_ctm:double;
3) Solicitar el numero de personas que se van a evaluar.
4) Validar si numero === numero:int
			si(ir paso 5);
			no(ir paso 3);
5) Asignar personas = numero;
6) for(i = 1; i <= personas; i++)
7) 		Solicitar el el peso de la persona en kilogramos;
8) 		Validar si peso == numero:int;
					si( ir paso 9)
					no( ir paso 7)
9) 		Asignar peso = peso;
10) 		Solicitar la altura de la persona en centimetros;
11)		Validar si altura == numero:int
12) 		Asignar altura = altura;
13) 		alt_ctm = altura / 100;
14)		imc = peso/(alt_ctm*2);
15) 		if(imc < 18,50)
			Imprimir "El peso de la persona se califica como por inferior al peso ideal".
16)		elseif(imc >= 18,50 && imc < 25 )
			Imprimir "El peso de la persona se califica como peso ideal ";
17) 		elseif(imc >= 25 )
			Imprimir "El peso de la persona se califica como exede el peso normal";
18) Fin

```