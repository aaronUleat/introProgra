var numeros = [10, 25, 50, 2, 3, 7, 90, 80, 85, 81];
var menor = numeros[0];
var mayor = numeros[0];
var pares = 0;

for(var i = 0; i <= numeros.length; i++) {
    if(numeros[i] < menor) {
        menor = numeros[i];
    }

    if(numeros[i] > mayor) {
        mayor = numeros[i];
    }

    if(numeros[i] % 2 == 0){
        pares++;
    }
}

console.log(menor);
console.log(mayor);
console.log(pares);