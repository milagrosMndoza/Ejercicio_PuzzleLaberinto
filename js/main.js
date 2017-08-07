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

var player = { 
    x: 1,
    y: 8
};

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
                    celda.setAttribute('class', 'amarillo');
                }
                else if (mapa[i][j] == "o"){
                    celda.setAttribute('class', 'verde');
                    var imagen = document.createElement("img");//creo la etiqueta img  en imagen...
		          imagen.src = "icono3.gif";//se inserta imagen
                  celda.appendChild(imagen);//se agrega la imagen en el td

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
    

function updateMap() {
    var displayMap = [], x, y;
    for (y = 0; y < mapa.length; y += 1) {
        displayMap[y] = displayMap[y] || [];
        for (x = 0; x < mapa[y].length; x += 1) {
            displayMap[y][x] = mapa[y][x];
        }
    }
    displayMap[player.y][player.x] = '@';
    for (y = 0; y < displayMap.length; y += 1) {
        displayMap[y] = displayMap[y].join('');
    }
      //dibujarLaberinto();
    //laberinto.innerHTML = mapaToHTML(displayMap);
}
function playerMove(x, y) {
    var toX = player.x + x, toY = player.y + y;
    if (mapa[toY][toX] === '.' || mapa[toY][toX] === 'X') {
        player.x = toX;
        player.y = toY;
    }
    updateMap();
    if (mapa[toY][toX] === 'X') {
        laberitnto.innerHTML = 'YOU WIN';
        document.getElementById('buttons').innerHTML = '';
    }
}

   
 

for (i = 0; i < mapa.length; i += 1) {
    mapa[i] = mapa[i].split('');
}
document.getElementById('btnArriba').onclick = function () {
    playerMove(0, -1);
};
document.getElementById('btnAbajo').onclick = function () {
    playerMove(0, 1);
};
document.getElementById('btnDerecha').onclick = function () {
    playerMove(1, 0);
};
document.getElementById('btnIzquierda').onclick = function () {
    playerMove(-1, 0);
};
updateMap();
