//entrar al formulario
const formulario = document.getElementById("formulario");


//acceso a todos los inputs
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");
const enviar = document.querySelector("enviarF");
const borrar = document.querySelector("borrarF");
const privacidad = document.getElementById("privacidad");
const plazos = document.getElementById("plazos");
const producto = document.getElementById("producto");

// Acceso a la comprobación de la validación del formulario
let valida = {
    nombre: false,
    apellido: false,
    telefono: false,
    email: false,
    producto: false,
    privacidad: false,
    plazos: false,
    enviar: false,
    borrar: false,
}



// Validación del nombre
nombre.addEventListener("blur", () => {
    let name_re = /^[a-zA-Z ]{2,30}$/;

    if (nombre.value == "" || nombre.value == null) {
        setErrorFor(nombre, "No puede dejar el nombre en blanco");
        valida.nombre = false;
    } else {
        if(!name_re.exec(nombre.value)){
            setErrorFor(nombre, "El nombre sólo letras entre 3 y 30 caracteres");
            valida.nombre = false;
        }else{
            setSuccessFor(nombre);
            valida.nombre = true
        }
    }
})

// Validación de los apellidos
apellidos.addEventListener("blur", () => {
    let apellidos_re = /^[a-zA-Z ]{2,30}$/;

    if (apellidos.value == "" || apellidos.value == null) {
        setErrorFor(apellidos, "No puede dejar los apellidos en blanco");
        valida.apellido = false;
    } else {
        if(!apellidos_re.exec(apellidos.value)){
            setErrorFor(apellidos, "Los apellidos sólo letras entre 3 y 30 caracteres");
            valida.apellido = false;
        }else{
            setSuccessFor(apellidos);
            valida.apellido = true;
        }
    }
})

// Validación del teléfono
telefono.addEventListener("blur", () => {
    let tel_re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/;

    if (telefono.value == "" || telefono.value == null) {
        setErrorFor(telefono, "No puede dejar los apellidos en blanco");
        valida.telefono = false;
    } else {
        if(!tel_re.exec(telefono.value)){
            setErrorFor(telefono, "El teléfono sólo puede estar formado por 9 números");
            valida.telefono = false;
        }else{
            setSuccessFor(telefono);
            valida.telefono = true;
        }
    }
})

// Validacion del email
email.addEventListener("blur", () =>{
    let email_re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    
    if(email.value == "" || email.value == null){
        setErrorFor(email, "No puede dejar el email en blanco");
        valida.email = false;
    } else  {
        if(!email_re.exec(email.value)){
            setErrorFor(email, "No ingreso un email valido");
            valida.email = false;
        }else{
            setSuccessFor(email);
            valida.email = true;
        }
    }
})

// Validacion alojamiento
producto.addEventListener("blur", () =>{
    let producto_re = /^([a-zA-Z])$/ 

    if(producto.value == "" || producto.value == null){
        setErrorFor(producto, "Debe seleccionar un alojamiento");
        valida.producto = false;
    } else{
        if(!producto_re.exec(producto.value)){
            setErrorFor(producto, "No ingreso un alojamiento valido");
            valida.producto = false;
        }else{
            setSuccessFor(producto);
            valida.producto = true;
        }
    }
})

// Validacion de plazos
plazos.addEventListener("blur", () =>{
    let plazos_re = /^[1-3]$/

    if(plazos.value == "" || plazos.value == null ){
        setErrorFor(plazos, "Debe selecciona plazos entre 1 y 3");
        valida.plazos = false;
    } else{
        if(!plazos_re.exec(plazos.value)){
            setErrorFor(plazos, "No ingreso plazos validos");
            valida.plazos = false;
        }else{
            setSuccessFor(plazos);
            valida.plazos = true;
        }
    }    
})

// validacion politica

     

    if(!privacidad.checked){
        setErrorFor(privacidad, "Debe ceptar las politicas");
        valida.privacidad = false;
  
        }else{
            setSuccessFor(privacidad);
            valida.privacidad = true;
        }
        


//politica de privacidad

// Mensaje de error
function setErrorFor(input, message) {
    //recibe como parametro input y mensaje
    const formControl = input.parentElement;
    const small = formControl.querySelector("small"); //seleciona donde esta escrito el mensaje
    formControl.className = "form-control error"; //selecciona la clase de css
    small.innerText = message;
}

//si todo esta correcto
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

//mensaje error 
function setErrorFor(input, message) {
    //recibe como parametro input y mensaje
    const presupuesto = input.parentElement;
    const small = presupuesto.querySelector("small"); //seleciona donde esta escrito el mensaje
    presupuesto.className = "form-control error"; //selecciona la clase de css
    small.innerText = message;
}

//si todo esta correcto
function setSuccessFor(input) {
    const presupuesto = input.parentElement;
    presupuesto.className = "form-control success";
}
//select y plazos
function setErrorFor(select, message) {
    //recibe como parametro input y mensaje
    const presupuesto = select.parentElement;
    const small = presupuesto.querySelector("small"); //seleciona donde esta escrito el mensaje
    presupuesto.className = "form-control error"; //selecciona la clase de css
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
    for (const property in valida) {
       // console.log(`${property}: ${valida[property]}`);
        if(valida[property] == false){
            errorV = true;
        }
    }
    if(!errorV){
        formulario.submit();
    }
})