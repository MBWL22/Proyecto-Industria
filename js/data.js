/*
TIPOS DE USARIOS  
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
    apellido: 'Sanchéz',
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
