var maths = (function() {

    var ser_arr = [], i, ii,
        sol_num, // int
        sum_arry = 0; // int

    function generateSerie() {
        sol_num = parseInt( prompt("Ingrese el un numero para generar la serie", '') );
        if(Number.isInteger(sol_num)) {
            makeSeries(sol_num)
        }
        else {
            alert("Solamente numeros son aceptados");
        }
    }
    
    function makeSeries(sol_num) {
        for(var i = 0; i <= sol_num; i ++) {
            ser_arr[i] = i*i;
        }

        makeSum(ser_arr)
    }

    function makeSum(ser_arr) {
        for(ii = 0 ; ii < ser_arr.length; ii++) {
            sum_arry = sum_arry + ser_arr[ii];
        }
        console.log(ser_arr);
        console.log(sum_arry);
    }
    return {
        generateSerie: generateSerie
    }
})();
maths.generateSerie();
