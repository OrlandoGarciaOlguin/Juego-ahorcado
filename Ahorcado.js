var palabra = prompt("Introduce una palabra");
var contador = 0;
var nElementos = palabra.length;
var oportunidad = 2;
var estatus = 0;

while (oportunidad >= 0 && contador < nElementos){
    var letra = prompt("Introduce una letra");
    var busqueda = 0;
    for (var i = 0; i < nElementos; i++){
        if (letra == palabra[i]){
            contador++;
            busqueda = 1;
        }
    }
        if (busqueda == 1){
            console.log("la letra es igual")
        }else{
            if(oportunidad == 0){
                console.log("Perdiste");
                estatus = 1;
                break;
            }else{
                console.log("La letra no es igual");
                oportunidad--;
            }
        }
        
    }
    if(estatus == 0){
        console.log("Ganaste");
    }else{
        console.log("Perdiste");
    }
 


