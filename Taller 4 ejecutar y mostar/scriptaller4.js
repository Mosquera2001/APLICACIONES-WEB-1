
    Fecha = new Date();
    function convertirhoras(){
    var segundosH = 3600;
    var hora;
    horario = Fecha.getHours();
    hora = horario*segundosH;
    output = document.getElementById("hora");
    alert("La hora actual convertida en segundos es: "+hora);
    }
    function calcular() {
    var num1 = parseInt(prompt("Ingrese la base del triangulo: "));
    var num2 = parseInt(prompt("Ingrese la altura del triangulo: "));
    var area = (num1*num2)/2;
    alert("El area del triangulo es: "+area);
    }
    function calcularRaiz(){
      var numR1 = parseInt(prompt("Ingrese el numero: "));
      while (numR1 % 2 == 0){
        var numR1 = prompt("El numero que ingreso no es impar....Ingresar un numero correcto")
      }
      var raizc = Math.sqrt(numR1); 
      alert("La raiz cuadrada es: "+raizc);
    }

    function funcioncontadora(){
    var mensaje = prompt("Por favor ingresar un mensaje: ")
    alert("La longitud del mensaje es: "+mensaje.length);

}

    
function navegadorversion() {
    alert("La version del navegador es: "+ navigator.userAgent);
    
    }
    
    function pantalla() {
        var altura = screen.height;
        var ancho = screen.width;
        alert("EL tamaño de la pantalla es: "+ altura + "x" +ancho);
        
        }

    function imprimir() {
    window.print();
    
    }