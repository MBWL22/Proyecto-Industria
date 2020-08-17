/*
TIPOS DE USARIOS  
0 usuario normal
1 para usuario que ofrece sus serivicios
2 para usuario admon
*/


let usuarios = [{
    id: 1,
    tipoUsuario: 1,
    nombre: 'Mario',
    apellido: 'Rosales',
    nombreUsuario: 'josue1198',
    contrasena: 'asd.456',
    correo: 'ejemplo@gmail.com',
    telefono:'88765432',
    fotoPerfil: 'https://img.icons8.com/bubbles/2x/user.png',
    publicaciones: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem minus quae veritatis accusamus laudantium reiciendis officiis, numquam iusto quas ullam. Tempora amet commodi voluptatum quisquam laudantium accusantiu' , 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem minus quae veritatis accusamus laudantium reiciendis officiis, numquam iusto quas ullam. Tempora amet commodi voluptatum quisquam laudantium accusantium maiores perspiciatis officia labore'],
    servicios: [{
        categoria: 'Carpinteria',
        descripcion: 'trabajo con madera pura.'
    },
    {
        categoria: 'Mecanica',
        descripcion: 'trabajos de mecanica automotriz.'
    }],
    descripcion: '10 años de experiencia en carpinteria y 15 años en mecanica'
},
{
    id: 2,
    tipoUsuario: 1,
    nombre: 'Diana',
    apellido: 'Sánchez',
    nombreUsuario: 'DYSC',
    contrasena: 'asd.456',
    correo: 'ejemplo2@gmail.com',
    telefono:'98745432',
    fotoPerfil: 'https://images.vectorhq.com/images/previews/4e1/female-user-icon-clip-art-92637.png',
    publicaciones: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem minus quae veritatis accusamus laudantium reiciendis officiis, numquam iusto quas ullam. Tempora amet commodi voluptatum quisquam laudantium accusantiu' , 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem minus quae veritatis accusamus laudantium reiciendis officiis, numquam iusto quas ullam. Tempora amet commodi voluptatum quisquam laudantium accusantium maiores perspiciatis officia labore'],
    servicios: [{
        categoria: 'Estilista',
        descripcion: 'trabajo con madera pura'
    },
    {
        categoria: 'Cocinera',
        descripcion: 'trabajos de mecanica automotriz'
    }],
    descripcion: 'experta en cortes de cabello. Mi plato especial es el spagettie (lo unico que se hacer).'
},
{   id: 3,
    tipoUsuario: 0,
    nombre: "Ledys",
    apellido: "Santos",
    nombreUsuario: "Lidis",
    contrasena: "asd.456",
    correo: "ejemplo3@gmail.com",
    telefono: "93765469",
    fotoPerfil: "https://images.vectorhq.com/images/previews/4e1/female-user-icon-clip-art-92637.png"
},    
{
    id: 4,
    tipoUsuario: 2,
    nombre: 'Michael',
    apellido: 'Banegas',
    nombreUsuario: 'Micky',
    contrasena: 'asd.456',
    correo: 'ejemplo4@gmail.com',
    telefono:'85789031',
    fotoPerfil: 'https://img.icons8.com/bubbles/2x/user.png',
},];


//ocalStorage.setItem('usuarios', JSON.stringify(usuarios) );
/* console.log(JSON.parse( localStorage.getItem('usuarios')) ); */



    (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            alert("hola");
            event.preventDefault();
            event.stopPropagation();
          }else{
             
              for (let i = 0; i < usuarios.length; i++) {
                  var element = usuarios[i].id;
              }
              let idUser = element + 1;
              let nuevoUsuario = {
                id: idUser,
                tipoUsuario: 0,
                nombre: document.getElementById("input-name").value,
                apellido: document.getElementById("input-apellido").value,
                nombreUsuario: document.getElementById("input-user").value,
                contrasena: document.getElementById("input-password").value,
                correo: document.getElementById("input-email").value,
                telefono: document.getElementById("input-tel").value,
                fotoPerfil: null
            }
            usuarios.push(nuevoUsuario);
            localStorage.setItem('usuarios', JSON.stringify(usuarios) );  
        }
            form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();






/* console.log(getOficios())
// console.log(usuarios[0].servicios[0].categoria); EJEMPLO DE COMO ACCEDER A UN ATTR

function getOficios(){
    let usuarioOficio=[];
    let usuario;
    for (let i = 0; i<usuarios.length; i++) {
        usuario = usuarios[i];
        if (usuario.tipoUsuario == 1){
            usuarioOficio.push(usuario);
            // console.log(usuarioOficio);
        }
    }
    return usuarioOficio;
} */
