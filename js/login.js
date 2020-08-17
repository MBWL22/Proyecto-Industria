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

function inicio(){
    validarCampoVacio("login-usuario");
    validarCampoVacio("login-password");
    console.log($("#login-usuario").val());
    validarEmail($("#login-usuario").val());
}

function validarEmail(valor) {
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(valor)){
        document.getElementById("login-usuario").style.color = "green"
        document.getElementById("validacion-email-bad").style.display = "none";
        document.getElementById("validacion-email-good").style.display = "block";
    } else {
        document.getElementById("login-usuario").style.color = "red"
        document.getElementById("validacion-email-bad").style.display = "block";
        document.getElementById("validacion-email-good").style.display = "none";
        document.getElementById("login-usuario").style.borderColor = "red";
    }
  }

  function validarCampoVacio(id){
    if(document.getElementById(id).value == ""){
        document.getElementById(id).classList.remove("is-valid");
        document.getElementById(id).classList.add("is-invalid");
    }else{
        document.getElementById(id).classList.remove("is-invalid");
        document.getElementById(id).classList.add("is-valid");
    }
}
function writetxt(){
    document.getElementById("login-usuario").style.color = "black"
    document.getElementById("validacion-email-bad").style.display = "none";
    document.getElementById("validacion-email-good").style.display = "none";
    document.getElementById("login-usuario").style.borderColor = "black";
}