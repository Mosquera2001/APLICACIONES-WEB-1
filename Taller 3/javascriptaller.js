function calcularSuma() {
    var num1 = parseInt(document.getElementById("1"). value);
    var num2 = parseInt(document.getElementById("2"). value);
    var suma = (num1+num2);
    alert("El resultado de la suma es: "+suma);
    }
    function calcularResta() {
    var num1 = parseInt(document.getElementById("1"). value);
    var num2 = parseInt(document.getElementById("2"). value);
    var resta = (num1-num2);
    alert("El resultado de la resta es: "+resta);
    }
    function calcularMultiplicacion() {
    var num1 = parseInt(document.getElementById("1"). value);
    var num2 = parseInt(document.getElementById("2"). value);
    var multiplicacion = (num1*num2);
    alert("El resultado de la multiplicacion es: "+multiplicacion);
    }
    function calcularDivision() {
    var num1 = parseInt(document.getElementById("1"). value);
    var num2 = parseInt(document.getElementById("2"). value);
    var division = (num1/num2);
    alert("El resultado de la division es: "+division);
    }
    function calcularporcentaje() {
    var num1 = parseInt(document.getElementById("1"). value);
    var num2 = parseInt(document.getElementById("2"). value);
    var porcentaje = (num1+num2)/100;
    alert("El porcentaje es: "+porcentaje+"%");
    }