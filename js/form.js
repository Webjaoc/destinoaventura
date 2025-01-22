const miBoton = document.querySelector(".enviarF");
const miForm = document.querySelector(".formulario");

miBoton.addEventListener("click", (evento) => {
    evento.preventDefault();
    correcto = validar();

    if(correcto == true){
        miForm.submit();
    }
})

function validar(){
    // DECLARAMOS LAS VARIABLES QUE VAMOS A UTILIZAR
    const nombre = document.getElementById("nombre");
    const apellidos = document.getElementById("apellidos");
    const telefono = document.getElementById("telefono");
    const email = document.getElementById("email");
    const alojamiento = document.getElementById("producto");
    const plazos = document.getElementById("plazos");

    const privacidad = document.getElementById("privacidad");

    // REALIZAMOS LAS COMPROBACIONES DE CADA CAMPO

    let correcto = true;
    // NOMBRE
    if(nombre.value == null || nombre.value == ""){
        setErrorFor(nombre, "No puede dejar el nombre en blanco");
        correcto = false;
    }else{
        let name_re = /^[a-zA-Z ]{2,30}$/;
        if(!name_re.exec(nombre.value)){
            setErrorFor(nombre, "El nombre sólo  letras y  entre 2 y 30 caracteres");
            correcto = false;
        }else{
            setSuccessFor(nombre);
        }
    }
    
    // Apellidos
    if(apellidos.value == null || apellidos.value == ""){
        setErrorFor(apellidos, "No puede dejar el apellido en blanco.");
        correcto = false;
    }else{
        let apellidos_re = /^[a-zA-Z ]{2,30}$/;
        if(!apellidos_re.exec(apellidos.value)){
            setErrorFor(apellidos, "El apellido sólo letras y contener entre 2 y 30 caracteres");
            correcto = false;
        }else{
            setSuccessFor(apellidos);
        }
    }

    // TELEFONO
    if (telefono.value == null || telefono.value == ""){
        setErrorFor(telefono, "El campo teléfono no puede estar en blanco");
        correcto = false;
    }else{
        let tel_re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/
        if(!tel_re.exec(telefono.value)){
            setErrorFor(telefono, "Telefono solo numeros de 8 a 9 digitos.");
            correcto = false;
        }else{
            setSuccessFor(telefono);
        }
    }

    // EMAIL
    if(email.value == null || email.value == ""){
        setErrorFor(email, "El campo email no puede estar en blanco");
        correcto = false;
    }else{
        let email_re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(!email_re.exec(email.value)){
            setErrorFor(email, "Solo numeros entre 8 y 9 digitos");
            correcto = false;
        }else{
            setSuccessFor(email);
        }
    }
//alojamiento
    if(alojamiento.value == null || alojamiento.value == "0"){
        setErrorFor(alojamiento, "El campo alojamiento no puede estar en blanco");
        correcto = false;
    }else{
        let alojamiento_re = /^[0-9]{3}$/
        if(!alojamiento_re.exec(alojamiento.value)){
            setErrorFor(alojamiento, "Solo numeros entre 8 y 9 digitos");
            correcto = false;
        }else{
            setSuccessFor(alojamiento);
        }
    }
//plazos
    if(plazos.value == null || plazos.value == "0"){
        setErrorFor(plazos, "El campo alojamiento no puede estar en blanco");
        correcto = false;
    }else{
        let plazos_re = /^[1-3]{1}$/
        if(!plazos_re.exec(plazos.value)){
            setErrorFor(plazos, "Solo numeros entre 1 y 3 digitos");
            correcto = false;
        }else{
            setSuccessFor(plazos);
        }
    }
    
    // Privacidad
    if(!privacidad.checked){
        setErrorFor(privacidad, "Tienes que aceptar las condiciones");
        correcto = false;
    }else{
        setSuccessFor(privacidad);
    }

    // En caso de que todos los datos sean correctos, se envía el formulario
    if(correcto == true){
        return true;
    }else{
        
        return false;
    }
    
}
// Mensaje de error
function setErrorFor(input, message) {
    //recibe como parametro input y mensaje
    const formControl = input.parentElement;
    const small = formControl.querySelector("small"); //seleciona donde esta escrito el mensaje
    formControl.className = "form-control error"; //selecciona la clase de css
    small.innerText = message;
}
//si todo esta correcto
function setSuccessFor(select) {
    const presupuesto = select.parentElement;
    presupuesto.className = "form-control success";
}
function setSuccessFor(input) {
    const condiciones = input.parentElement;
    condiciones.className = "form-control success";
}
// Envío del formulario
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let errorV = false;
    for (const property in validar) {
       // console.log(`${property}: ${valida[property]}`);
        if(validar[property] == false){
            errorV = true;
        }
    }
    if(!errorV){
        formulario.submit();
    }
})

