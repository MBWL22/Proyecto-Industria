'use strict'
let conectado = sessionStorage.getItem('conectado');
let tipoUsuario =sessionStorage.getItem('tipo_usuario');

if(conectado){
 console.log('tipo usuario', tipoUsuario)
}else{
    window.location.href = 'login.html';
}


function logout(){
    sessionStorage.clear();
    window.location.href = 'login.html';
}