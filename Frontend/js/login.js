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

    let parametros = "correo="+ $("#login-usuario").val() + "&" + "contrasena="+ $("#login-password").val()
                $.ajax({
                    url: 'http://localhost:8888/api/login',
                    data: parametros,
                    method: 'POST',
                    dataType:'JSON',
                    success:function(res){
                        console.log(res);
                        if (res){
                            ///varaibles de session 
                            sessionStorage.setItem('conectado', res.success);
                            sessionStorage.setItem('tipoUsuario', res.data.tipoUsuario);
                            window.location = 'servicios.html';
                            console.log(res);
                        }
                    },
                    error:function(err){
                        if(err.status === 404){
                            //el usuario no existe
                            console.log('el usuario no existe');
                        }else if(err.status === 401){
                            console.log('contrasena invalida');
                        }else{
                            console.log(err);
                        }
                        
                    }
                })
            }
       }





 
