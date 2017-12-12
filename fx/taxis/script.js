var taxis = (function(){
    var viajes = 5, i = 1, km_rec, pagar, sum_total;
    function calc_viaje() {
        for(i = 1; i <= viajes; i++)  {
            km_rec = parseInt( prompt("Ingrese el numero de Kilometros generados por el viaje") );
            if(Number.isInteger(km_rec)) {
                var tot = cargo(km_rec);
            }
            else {
                alert("Solamente numeros enteros son permitidos recargue la pagina para Iniciar");
                break;
            }
        }
        console.log(tot);
    }

    function cargo(km_rec) {
        if(km_rec > 1) {
            console.log("Entre aqui");
            pagar = 570 + ( (km_rec - 1) * 725 );
        } else {
            console.log("O Entre aqui");
            pagar = 570;
        }

        sum_total += pagar;
        return parseInt(sum_total);
    }

    return {
        calc_viaje: calc_viaje
    }
})();
taxis.calc_viaje();