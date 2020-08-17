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
    publicaciones: ['Muy buenas tardes compatriotas en esta tarde quisiera compartirles mis servicios de carpinteria, se hace de todo, mesas, sillas. mi número se encuntra en mi perfil, espero estar en contacto con ud pronto, que tenga lindo día.' , 'Buenas, si ud tiene algun problema con su coche contacteme por chat o en el número anclado a mi perfil, será un placer ayudarle.'],
    servicios: [{
        categoria: 'Carpintería',
        descripcion: 'experto con el uso de maderas puras.'
    },
    {
        categoria: 'Mecánica',
        descripcion: 'Trabajos de mecánica automotriz general.'
    }],
    descripcion: '10 años de experiencia en carpintería y 15 años en mecánica'
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
    publicaciones: ['Les invito a visitar el salón de belleza toxin, para sus cortes de cabello o arreglo de uñas. Estamos ubicados en el blvd Fuerzas armadas frente a colonia las brisas, sera un placer atenderle.' , 'En tiempos de COVID les ofrecemos envios a domicilio de mis deliciosos platillos, contacte conmigo para poder preparar su envio.'],
    servicios: [{
        categoria: 'Estilista',
        descripcion: 'Especialista en arreglo de uñas y alisado de cabello.'
    },
    {
        categoria: 'Cocinera',
        descripcion: 'Especialista en pastas.'
    }],
    descripcion: 'experta en cortes de cabello. Mi plato especial es el spagettie (lo unico que se hacer).'
},
{
    id: 6,
    tipoUsuario: 1,
    nombre: 'Jaime',
    apellido: 'Paguaga',
    nombreUsuario: 'Jaipa',
    contrasena: 'asd.456',
    correo: 'ejemplo10@gmail.com',
    telefono:'98745432',
    fotoPerfil: 'https://images.vectorhq.com/images/previews/4e1/female-user-icon-clip-art-92637.png',
    publicaciones: ['En esta día quisiera ofrecer mis servicios como albañil, se cobra por obra terminada y se hace en el menor tiempo posible, un trabajo honesto y bien hecho, contactenme, buen día.'],
    servicios: [{
        categoria: 'Albañil',
        descripcion: 'Obras de hogar y construcción de edificios.'
    }],
    descripcion: 'He sido albañil desde el 2000, habiendo trabajado en proyectos grandes como la construcción del edificio mas alto de tegucigalpa y en la creación de lindas viviendas tanto en barrios como residenciales.'
},
{
    id: 7,
    tipoUsuario: 1,
    nombre: 'Lorena',
    apellido: 'López',
    nombreUsuario: 'Lore',
    contrasena: 'asd.456',
    correo: 'ejemplo10@gmail.com',
    telefono:'98775232',
    fotoPerfil: 'https://images.vectorhq.com/images/previews/4e1/female-user-icon-clip-art-92637.png',
    publicaciones: ['Si a ud se le arruinó su lavadora, licuadora, plancha, lo que sea! No dude en contactarme para devolver a la vida sus electrodomestico, sera un placer ayudarle, en mi perfil está anclado para poder contactarme.'],
    servicios: [{
        categoria: 'Técnico en reparaciones',
        descripcion: 'Reparaciones de dispositivos electrodomesticos.'
    }],
    descripcion: 'Graduada como técnico electronico tengo todas las facultades y conocimientos necesarios para poder servirle y ayudarle de la manera que ud se merece.'
},
{
    id: 8,
    tipoUsuario: 1,
    nombre: 'Juan',
    apellido: 'Cuña',
    nombreUsuario: 'Juan1904',
    contrasena: 'asd.456',
    correo: 'ejemplo10@gmail.com',
    telefono:'88735432',
    fotoPerfil: 'https://images.vectorhq.com/images/previews/4e1/female-user-icon-clip-art-92637.png',
    publicaciones: ['Para cualquier evento, baby shower, cumpleaños, sus 15, lo que sea! Se le ofrece comida gourmet llevada hasta la puerta de su casa respetando todas las normas de bioseguridad.'],
    servicios: [{
        categoria: 'Cocinero',
        descripcion: 'Especialista en comida gourmet.'
    }],
    descripcion: 'Cocinero de principio empirico, habiendo sacado cursos de manera online en conocimientos de comidas europeas, si quiere probar el sazón de oriente soy su mejor opción.'
},
{
    id: 9,
    tipoUsuario: 1,
    nombre: 'Rodolfo',
    apellido: 'Sandoval',
    nombreUsuario: 'Fofo1904',
    contrasena: 'asd.456',
    correo: 'ejemplo10@gmail.com',
    telefono:'95735432',
    fotoPerfil: 'https://images.vectorhq.com/images/previews/4e1/female-user-icon-clip-art-92637.png',
    publicaciones: ['Ud sabe que la energía electrica de su casa es un tema delicado, asi que le ofrezco mis servicios como electricista con bastos años de experiencia, respetando todas las normas actuales para la instalción electricas actual, espero su mensaje o llamada, que tengan un lindo día.'],
    servicios: [{
        categoria: 'Electricista',
        descripcion: 'Instalaciones electricas de hogar e industriales.'
    }],
    descripcion: 'Graduado como técnico electricista contando con mas de 20 años de experiencia y manteniendome siempre al día con los estandares de instalaciones electrivas le aseguro ser su mejor opción.'
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
