
//hacemos la funcion para cargar el archivo

function cargar(){
    $.ajax({
        url:'json/info.json',
        type:'GET',
        success : function(datos){
            
            objeto_json = datos;
            var cadena = '';
            for (i=0;i<objeto_json.ficha.length;i++) {
                cadena = cadena +  objeto_json.ficha[i].ciudad + "</b><br>";
                cadena = cadena + 'Temperatura max: <b>' + objeto_json.ficha[i].parametros.temperaturamax + "</b><br>";
                cadena = cadena + 'Temperatura min: <b>' + objeto_json.ficha[i].parametros.temperaturamin + "</b><br><br>";
                

            }
            $("#box").html(cadena)
        
        },
        error : function(xhr, status) {
            alert('problema al cargar');
        }
    
});
}