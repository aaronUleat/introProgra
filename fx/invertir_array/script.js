var numeros = [1,2,3,4,5,6,7,8,9,10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var aux;

for(var i = 0; i < numeros.length / 2; i++) {
    aux = numeros[i];
    numeros[i] = numeros[numeros.length - 1 - i];
    numeros[numeros.length - 1 - i] = aux;
}

console.log(numeros);