
var miBoton = document.getElementById("enviarF");
var miForm = document.getElementById("formulario");


miBoton.addEventListener("click",(evento)=>{

    evento.preventDefault();

    valido = validar();

    if(valido==true){
        miForm.submit();

    }   
})


function validar(){
    var nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let producto = document.getElementById("producto").value;
    let plazos = document.getElementById("plazos").value;
    let privacidad = document.getElementById("privacidad");
    
    let mensaje = "";
    let correcto = true;






    if(nombre == null || nombre == ""){
        mensaje = "NOMBRE esta vacio.\n";
        correcto = false;
    }
    let name_re =/^[a-zA-Z]{3,15}$/;
    if(!name_re.exec(nombre)){
        mensaje += " El NOMBRE debe contener letras entre 3 y 15 caracteres.\n";
        correcto = false;
    }
    
    

    if(apellidos == null || apellidos == ""){
        mensaje = "APELLIDOS esta vacio.\n";
        correcto = false;
    }
    let apellido_re =/^[a-zA-Z]{3,40}$/;
    if(!apellido_re.exec(apellidos)){
        mensaje += "APELLIDOS solo letras entre 3 y 40 caracteres.\n";
        correcto = false;
    }

   

    if(telefono == null || telefono == ""){
        mensaje = "TELEFONO esta vacio.\n";
        correcto = false;
    }
    let telefono_re =/^[0-9]{8,9}$/;
    if(!telefono_re.exec(telefono)){
        mensaje += "TELEFONO solo puede tener entre 8 y 9 numeros.\n ";
        correcto = false;
    }

    if(email == null || email == ""){
        mensaje = "EMAIL esta vacio.\n";
        correcto = false;
    }
    let email_re =/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if(!email_re.exec(email)){
        mensaje += "EMAIL deve contener '@' y '.com'.\n";
        correcto = false;
    }

    if(producto == "" || producto == null){
        mensaje = "Debe seleccionar un alojamiento";
        correcto = false;
    }
    let producto_re = /^[a-zA-Z0-9]{2,9}$/;
    if(!producto_re.exec(producto)){
        mensaje = "Debe seleccionar un alojamiento";
        correcto = false;
    }
   
    

    if(plazos == "" || plazos == null ){
        mensaje = "Debe seleccionar entre 1 y 3 plazos de pago";
        correcto = true;
    }
    let plazos_re = /^[1-3]$/;
    if(!plazos_re.exec(plazos)){
        mensaje = "Debe seleccionar los plazos entre 1 y 3 .";
        correcto = false;
    }    

    if(!privacidad.checked){
        mensaje = "Tiene que aceptar las politicas de privacidad.";
        correcto = false;
    }


    if(correcto == true){
        return true;
    }else{
        alert(mensaje);
        return false;
    }
}






