var Seguro;
var vehiculo;
var dias;
var fechaInicio;
var fechaFin;
var descuento;
var tarifaDiaria;
var TotalPagar;


function MensajeTipoSeguro() {
     Seguro = document.getElementById("seguro").value;
    

    if (Seguro == "10.45") {
        Seguro = 10.45;
        alert  ("Protección Básica Obligatoria (PBO) Cubre daños al vehículo rentado y daños a vehículos terceros involucrados en un accidente de tránsito. Costo de alquiler diario: $ 5.45 por día.");

    } else {
     
    if (Seguro == "15.50") {
        Seguro = 15.50;
        alert  ("Protección Extendida de Daños(PED) Cubre la Protección Básica Obligatoria (PBO) más daños a propiedades de terceros, incendio e inundaciones. Costo de alquiler diario: $ 9.50 por día.");

        } else {
            Seguro = 18.25;
            alert ("Protección Gasto Médicos(PGM) Cubre la Protección Extendida de Daños(PED) más gastos médicos para los ocupantes del vehículo. Costo de alquiler diario: $ 11.25 por día.");

        }

    }

    
}


function calcular() {

    MensajeTipoSeguro();

    vehiculo = document.getElementById("tipoVehiculo").value;


    //Calcular días 
    fechaInicio = document.getElementsByName("fechaRetiro")[0].value;
    fechaFin = document.getElementsByName("fechadevolucion")[0].value;
    
    if((fechaInicio == "") || (fechaFin == "")){
        alert("Las fechas ingresadas no son correctas");
    }

    else{
    var FI = new Date(fechaInicio);
    var FF = new Date(fechaFin);

    var dif =  FF - FI;
    
    dias = Math.floor(dif / (1000 * 60 * 60 * 24));

    document.getElementsByName("dias")[0].value = dias;


    //Tarifa diaria
    tarifaDiaria = document.getElementsByName("td")[0];
    //Aclarar que en alguna operación matemática tendre que poner parse, de lo contrario concatena
    tarifaDiaria.value = parseFloat(vehiculo) + parseFloat(Seguro); 
   
    if ((dias > 30) && (dias < 120)) {
        tarifaDiaria.value = parseFloat(tarifaDiaria.value) * 0.15;
    }
    else{
    if ((dias >= 120) && (dias <= 365)) {
            tarifaDiaria.value = parseFloat(tarifaDiaria.value) * 0.25;
    
    }
    else{
    if ((dias <= 3) || (dias >= 365)) {
        alert("Lo sentimos las fechas indicadas no son correctas");
    }
    }
    }


    //Total Pagar
    TotalPagar = document.getElementsByName("totalPagar")[0];
    
    TotalPagar.value = parseFloat(tarifaDiaria.value) * dias - (parseFloat(tarifaDiaria.value) * dias) * 0.15;
}
}


//Guardar local
function Memory() {

    localStorage.setItem("fechaRetiro", fechaInicio);
    localStorage.setItem("fechadevolucion", fechaFin);
    localStorage.setItem("tipoVehiculo", vehiculo);
    localStorage.setItem("seguro", Seguro);
    localStorage.setItem("dias", dias);
    localStorage.setItem("td", tarifaDiaria.value);
    localStorage.setItem("totalPagar", TotalPagar.value);
    
    alert("¡Guardado!");
}

    
function Recuperar() {

     document.getElementsByName("fechaRetiro")[0].value = localStorage.getItem("fechaRetiro");
     document.getElementsByName("fechadevolucion")[0].value = localStorage.getItem("fechadevolucion");
     document.getElementById("tipoVehiculo").value = localStorage.getItem("tipoVehiculo");
     document.getElementById("seguro").value = localStorage.getItem("seguro");
     document.getElementsByName("dias")[0].value = localStorage.getItem("dias");
     document.getElementsByName("td")[0].value = localStorage.getItem("td");
     document.getElementsByName("totalPagar")[0].value = localStorage.getItem("totalPagar");

    
}


    
   