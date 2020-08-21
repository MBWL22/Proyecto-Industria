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

function buscarCategoria(i){
    $.ajax({
        url:`http://localhost:8888/api/datadb/services/${i}`,
        method: 'GET',
        dataType: 'JSON',
        success: function(res){
            console.log(res);
            let contenedor = document.getElementById('cont-servicios');
            contenedor.innerHTML = ``;
            for (let j = 0; j < res.length;  j++){
                for (let k = 0; k < res[j].servicios.length; k++){
                    if (res[j].servicios[k].categoria === i){
                        contenedor.innerHTML += `<div class="row animated fadeIn">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 shadow p-3 mb-5 bg-white rounded mt-4">
                                <table>
                                    <tr>
                                        <td>
                                            <div class="cont-img">
                                                <img class="img-perfil" src="https://www.trecebits.com/wp-content/uploads/2019/02/Persona-1-445x445.jpg" alt="">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="informacion">
                                                <div class="nombre">
                                                    ${res[j].primerNombre} ${res[j].segundoNombre} ${res[j].primerApellido}
                                                </div>
                                                <div class="trabajo">
                                                    ${res[j].servicios[k].nombreServicio}
                                                </div>
                                                <div class="descripcion">
                                                    ${res[j].servicios[k].descripcionServicio}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                                <div style="float: right;"><button onclick="mostrarUsuario(event)" class="btn-mas-inf mt-4" data-toggle="modal" data-target="#masInformacion" data-id="${res[j]._id}">Más información</button></div> 
                                </div> 
                            </div>`
                    }
                    
                }
            }
        },
        error: function(err){
            console.log(err);
        }
    });
}

function mostrarUsuario(e){
    // console.log(e.target.dataset.id);
    let idUsuario = e.target.dataset.id;
}