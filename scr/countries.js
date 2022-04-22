

function llamarServicio(){
    $.ajax({
        url: "https://restcountries.com/v3.1/all",
        type: "get",
        datatype: "json",

        success: OnSuccess,
        error: OnError
    })
}


function OnSuccess(data){
    var cargarPaises = document.getElementById("nacionalidad");
  var paises = "";

    for (var i =0; i <= paises.length; i++) {
     paises = '<option name="' + data[i].cca3 + '">' + data[i].name.common + '</option>';
    
     cargarPaises.innerHTML += paises;
    }

   
}

function OnError(jqXHR, textStatus, errorThrown) {
    alert("Mensaje de Error: " + errorThrown);
}
