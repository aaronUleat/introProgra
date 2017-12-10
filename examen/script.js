var monto = 1000;
var n = 10;
var y = 3;
var primerTotal = 0;
var restaMonto = 0;
for (var i = 1; i <= n; i++) {
	primerTotal = primerTotal + monto;
	if(y == i) {
		restaMonto = restaMonto + monto;
		y = y + 3;
	}
}
console.log(primerTotal - restaMonto);