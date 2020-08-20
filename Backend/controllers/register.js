const usuarios = require("../models/register")
const { validationResult } = require("express-validator");


//@desc     Registrar nuevo usuario
//@route    POST /api/register
//@access   Public

exports.register = async( req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            success: false,
            msg: "Error en validaciones",
            errors: errors
        });
    }
    try {
        const { nombre, apellido, usuario, contrasena, correo, telefono } = req.body;
        const newUser = new usuarios ({
            nombre, apellido, usuario, contrasena, correo, telefono,
            tipoUsuario: 1,  fotoPerfil: 'https://www.trecebits.com/wp-content/uploads/2019/02/Persona-1-445x445.jpg'
        })
        await newUser.save( (err) =>{
            if(err){
                return res.status(400).json({
                    success: false,
                    msg: "No se guardo correctamente",
                    errors: err
                });
            } return res.status(201).json({
                success: true,
                msg: "Registrado correctamente",
                data: newUser
            });
        } );
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            msg: "Server error"
        })        
    }

};
