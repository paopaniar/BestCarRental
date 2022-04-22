 var imagenPrincipal;
 var Img1;
 var Img2; 
 var Img3;
var texto;
var tipoVehiculo

function mostrarTodo() {
    tipoVehiculo = document.getElementById("tipoVehiculo").value;
    imagenPrincipal = document.getElementById("imgVista");
    Img1 = document.getElementById("img1");
    Img2 = document.getElementById("img2");
    Img3 = document.getElementById("img3");



    if (tipoVehiculo == "10.45") {
    imagenPrincipal.src = "images/Compacto1.png";
    Img1.src = "images/Compacto1.png";
    Img2.src = "images/Compacto2.png";
    Img3.src = "images/Compacto3.png";
    }
    

  if (tipoVehiculo == "15.50") {
    imagenPrincipal.src = "images/Mediano1.png";
    Img1.src = "images/Mediano1.png";
    Img2.src = "images/Mediano2.png";
    Img3.src = "images/Mediano3.png";      
  }

  if (tipoVehiculo == "25.25") {
    imagenPrincipal.src = "images/TodoTerreno1.png";
    Img1.src = "images/TodoTerreno1.png";
    Img2.src = "images/TodoTerreno2.png";
    Img3.src = "images/TodoTerreno3.png";      
  }

  if (tipoVehiculo == "20.30") {
    imagenPrincipal.src = "images/Familiar1.png";
    Img1.src = "images/Familiar1.png";
    Img2.src = "images/Familiar2.png";
    Img3.src = "images/Familiar3.png";      
  }
  
  mostrarImagen(imagen);
}

var imagen = 1;

function mostrarImagen(imagen){
    
    texto = document.getElementById("infTCar");

    if (imagen == 1) {
        imagenPrincipal.src = Img1.src;

        if (tipoVehiculo == "10.45") {
            texto.innerHTML = "KIA PICANTO, Año 2016";
        }
        if (tipoVehiculo == "15.50") {
            texto.innerHTML = "HONDA CITY CAR, Año 2017";
        }
        if (tipoVehiculo == "25.25") {
            texto.innerHTML = "TOYOTA FJ CRUISER, Año 2016";
        }
        if (tipoVehiculo == "20.30") {
            texto.innerHTML = "TOYOTA SIENNA, Año 2018";
        }
    }

    if (imagen == 2) {
        imagenPrincipal.src  = Img2.src;

        if (tipoVehiculo == "10.45") {
            texto.innerHTML = "FORD FIESTA ST, Año 2015";
        }
        if (tipoVehiculo == "15.50") {
            texto.innerHTML = "MERCEDES SLS, Año 2015";
        }
        if (tipoVehiculo == "25.25") {
            texto.innerHTML = "TOYOTA Prado, Año 2018";
        }
        if (tipoVehiculo == "20.30") {
            texto.innerHTML = "DODGE GRAND CARAVANE, Año 2015";
        }
    }

    if (imagen == 3) {
        imagenPrincipal.src = Img3.src;

        
        if (tipoVehiculo == "10.45") {
            texto.innerHTML = "PEUGEOT 308, Año 2018";
        }
        if (tipoVehiculo == "15.50") {
            texto.innerHTML = "FORD FIESTA ST, Año 2016";
        }
        if (tipoVehiculo == "25.25") {
            texto.innerHTML = "NISSAN JUKE, Año 2017";
        }
        if (tipoVehiculo == "20.30") {
            texto.innerHTML = "HYUNDAI ELANTRA, Año 2016";
        }
    }

   
}


