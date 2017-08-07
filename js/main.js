var mapa=[
"******************",
"*_________*______*",
"*_*****_____******",
"*______***__*__*_*",
"***_*____*____**_*",
"*___*____**__*___*",
"*_********__**_*_*",
"*____*______*__*_*",
"*_**_*__*****_**_*",
"*_*__*________**_*",
"*o**************W*"];
 
var laberitnto = document.getElementById("laberinto");
function dibujarLaberinto() {
    var tabla = document.createElement('table');
    tabla.border = "1";
    for (var i = 0; i < mapa.length; i++) {
        var fila = document.createElement('tr');
        for (var j = 0; j < mapa[i].length; j++) {
            var celda = document.createElement('td');
            if (mapa[i][j] == "*") {
                celda.setAttribute('class', 'negro');
            }
            else if (mapa[i][j] == "_"){
                celda.setAttribute('class', 'blanco');
            }
            else if (mapa[i][j] == "o"){
                celda.setAttribute('class', 'verde');
            }
            else if (mapa[i][j] == "W"){
                celda.setAttribute('class', 'rojo');
            }
                
            var p = document.createElement('p');
            p.innerHTML = mapa[i][j];
            celda.appendChild(p);
            
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    laberinto.appendChild(tabla);
  
  }

  dibujarLaberinto();
