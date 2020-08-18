$(document).ready(function() {
	//alertify.success("¡Bienvenido!");
	console.log("Funciona JS");
})

/* Preloader */
$(window).on('load', function() {
    var preloaderFadeOutTime = 500;
    function hidePreloader() {
        var preloader = $('.spinner-wrapper');
        setTimeout(function() {
            preloader.fadeOut(preloaderFadeOutTime);
        }, 500);
    }
    hidePreloader();
});

function validarvacio(dato){
    console.log(document.getElementById(dato).value);
    if(document.getElementById(dato).value=="" || document.getElementById(dato).value==null){
        document.getElementById(dato).style.color = "red";
    }else{  
        document.getElementById(dato).style.color = "green";
    }
}


function validarEmail(valor) {
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(valor)){
        document.getElementById("login-usuario").style.color = "green"
        document.getElementById("validacion-email-bad").style.display = "none";
        document.getElementById("validacion-email-good").style.display = "block";
        return true;
    } else {
        document.getElementById("login-usuario").style.color = "red"
        document.getElementById("validacion-email-bad").style.display = "block";
        document.getElementById("validacion-email-good").style.display = "none";
        document.getElementById("login-usuario").style.borderColor = "red";
        return false;
    }
  }

  function validarCampoVacio(id){
    if(document.getElementById(id).value == ""){
        document.getElementById(id).classList.remove("is-valid");
        document.getElementById(id).classList.add("is-invalid");
        return false;
    }else{
        document.getElementById(id).classList.remove("is-invalid");
        document.getElementById(id).classList.add("is-valid");
        return true;
    }
}
function writetxt(){
    document.getElementById("login-usuario").style.color = "black"
    document.getElementById("validacion-email-bad").style.display = "none";
    document.getElementById("validacion-email-good").style.display = "none";
    document.getElementById("login-usuario").style.borderColor = "black";
}


// peticion AJAX
// funcion para iniciar sesion

function inicio(){
    // validarEmail($("#login-usuario").val())
    // validando que los campos no esten vacios para ejecutar la peticion.
    if (validarCampoVacio("login-usuario") &&
        validarCampoVacio("login-password")) {

       let usuarios = JSON.parse(localStorage.getItem('usuarios'));
       let nombreUsuario = document.getElementById("login-usuario").value;
       let contrasena = document.getElementById("login-password").value;

       for (usuario of usuarios){
            if(usuario.tipoUsuario == 0 &&  ( usuario.nombreUsuario == nombreUsuario || usuario.correo == nombreUsuario ) && usuario.contrasena ==  contrasena ){
                // REDIRECCIONAR AQUI
                window.location = 'servicios.html';
            }
       }
    }
    
}






 // let parametros = "usuario="+ $("#login-usuario").val() + "&" + "contrasena="+ $("#login-password").val()
        // $.ajax({
        //     url: 'php/login-usuario.php',
        //     data: parametros,
        //     method: 'POST',
        //     dataType:'JSON',
        //     success:function(res){
        //         // el php devuelve un codigo y un mensaje, 0 para credenciales validas y 1 para invalidas.
        //         // se puede loggear tanto con nombreUsuario como con correo.
        //         console.log(res);
        //         if ( res.codigoRespuesta == 0 ){
        //             // OJOOOOOO: INSERTAR CODIGO DE REDIRECCIÓN AQUÍ
        //             console.log(res.mensaje);
        //         } else if ( res.codigoRespuesta == 1 ){
        //             alert(res.mensaje);
        //         }
        //     },
        //     error:function(err){
        //         console.log(err);
        //     }
        // })
