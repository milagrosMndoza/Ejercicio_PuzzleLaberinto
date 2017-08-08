var arriba = document.getElementById('btnArriba');
var izquierda = document.getElementById('btnIzquierda');
var derecha = document.getElementById('btnDerecha');
var abajo = document.getElementById('btnAbajo');
var posicion;
/*var x,y;*/



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

var celditas = new Array(mapa.length);
for (var i=0;i<mapa.length;i++){
	celditas[i]= new Array(mapa[0].length);
}

function dibujarLaberinto() {
    var tabla = document.createElement('table');
    
    for (var i = 0; i < mapa.length; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < mapa[0].length; j++) {
         var td = document.createElement('td');
          if (mapa[i][j] == "*") {
              td.setAttribute('class', 'pared');
          }
          else if (mapa[i][j] == "_"){
           td.setAttribute('class', 'camino');
          }
          else if (mapa[i][j] == "o"){
           td.setAttribute('class', 'inicio');
           posicion={
               x:i,
               y:j,
               direccion:'arriba'
           };
         
              var imagen = document.createElement("img");
		      imagen.src = "img/arriba.gif";//se inserta imagen
              td.appendChild(imagen);//se agrega la imagen en el td 
        }
        else if (mapa[i][j] == "W"){
            td.setAttribute('class', 'fin');
        }
            tr.appendChild(td);
            celditas[i][j] = td;
                
    }
        tabla.appendChild(tr);
  }
    
    laberinto.appendChild(tabla);
    /*var imagen = document.createElement("img");
    imagen.src = "icono3.gif";//se inserta imagen
    celda.appendChild(imagen);//se agrega la imagen en el td*/
}
  dibujarLaberinto();
    
arriba.onclick = function(){
	if (posicion.direccion == "arriba") {
		if (mapa[posicion.x-1][posicion.y] == "_"){
		  var imagen = document.createElement('img');//creo la etiqueta img  en imagen...
		  imagen.src = 'img/arriba.gif';
		  celditas[posicion.x][posicion.y].removeChild(celditas[posicion.x][posicion.y].firstChild);
		  posicion.x = posicion.x-1;
		  celditas[posicion.x][posicion.y].appendChild(imagen);
   }
}
    
else if (posicion.direccion == "derecha") {
	if (mapa[posicion.x][posicion.y+1] == "_"){
		var imagen = document.createElement('img');//creo la etiqueta img  en imagen...
		imagen.src = 'img/derecha.gif';
		celditas[posicion.x][posicion.y].removeChild(celditas[posicion.x][posicion.y].firstChild);
		posicion.y = posicion.y+1;
		celditas[posicion.x][posicion.y].appendChild(imagen);
  }
}

else if (posicion.direccion == "izquierda") {
	if (mapa[posicion.x][posicion.y-1] == "_"){
		var imagen = document.createElement('img');//creo la etiqueta img  en imagen...
		imagen.src = 'img/izquierda.gif';
		celditas[posicion.x][posicion.y].removeChild(celditas[posicion.x][posicion.y].firstChild);
		posicion.y = posicion.y-1;
		celditas[posicion.x][posicion.y].appendChild(imagen);
  }
}

else if (posicion.direccion == "abajo") {
	if (mapa[posicion.x+1][posicion.y] == "_"){
		var imagen = document.createElement('img');//creo la etiqueta img  en imagen...
		imagen.src = 'img/abajo.gif';
		celditas[posicion.x][posicion.y].removeChild(celditas[posicion.x][posicion.y].firstChild);
		posicion.x = posicion.x+1;
		celditas[posicion.x][posicion.y].appendChild(imagen);
  }
 }
    
}

derecha.onclick = function(){
	if (posicion.direccion == "arriba") {
		var imagen = document.createElement("img");
	  imagen.src =  "img/derecha.gif";
		posicion.direccion = "derecha";
		celditas[posicion.x][posicion.y].removeChild(celditas[posicion.x][posicion.y].firstChild);
		celditas[posicion.x][posicion.y].appendChild(imagen);
	}
	else if (posicion.direccion == "derecha") {
		var imagen = document.createElement("img");
	  imagen.src =  "img/abajo.gif";
		posicion.direccion = "abajo";
		celditas[posicion.x][posicion.y].removeChild(celditas[posicion.x][posicion.y].firstChild);
		celditas[posicion.x][posicion.y].appendChild(imagen);
	}

	else if (posicion.direccion == "abajo") {
		var imagen = document.createElement("img");
	  imagen.src =  "img/izquierda.gif";
		posicion.direccion = "izquierda";
		celditas[posicion.x][posicion.y].removeChild(celditas[posicion.x][posicion.y].firstChild);
		celditas[posicion.x][posicion.y].appendChild(imagen);
	}

	else if (posicion.direccion == "izquierda") {
		var imagen = document.createElement("img");
	  imagen.src =  "img/arriba.gif";
		posicion.direccion = "arriba";
		celditas[posicion.x][posicion.y].removeChild(celditas[posicion.x][posicion.y].firstChild);
		celditas[posicion.x][posicion.y].appendChild(imagen);
	}
}

izquierda.onclick = function(){
	if (posicion.direccion == "arriba") {
		var imagen = document.createElement("img");
	  imagen.src =  "img/izquierda.gif";
		posicion.direccion = "izquierda";
		celditas[posicion.x][posicion.y].removeChild(celditas[posicion.x][posicion.y].firstChild);
		celditas[posicion.x][posicion.y].appendChild(imagen);
	}

	else if (posicion.direccion == "derecha") {
		var imagen = document.createElement("img");
	  imagen.src =  "img/arriba.gif";
		posicion.direccion = "arriba";
		celditas[posicion.x][posicion.y].removeChild(celditas[posicion.x][posicion.y].firstChild);
		celditas[posicion.x][posicion.y].appendChild(imagen);
	}

	else if (posicion.direccion == "abajo") {
		var imagen = document.createElement("img");
	  imagen.src =  "img/derecha.gif";
		posicion.direccion = "derecha";
		celditas[posicion.x][posicion.y].removeChild(celditas[posicion.x][posicion.y].firstChild);
		celditas[posicion.x][posicion.y].appendChild(imagen);
	}

	else if (posicion.direccion == "izquierda") {
		var imagen = document.createElement("img");
	  imagen.src =  "img/abajo.gif";
		posicion.direccion = "abajo";
		celditas[posicion.x][posicion.y].removeChild(celditas[posicion.x][posicion.y].firstChild);
		celditas[posicion.x][posicion.y].appendChild(imagen);
	}
}

