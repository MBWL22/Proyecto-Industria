const userService = require('../models/services')

//@desc     data de servicios
//@route    GET /api/datadb/:category
//@access   Private

exports.services = async (req, res) => {
    const category = req.params.category;
    //res.send(category);
    const servicios = await userService.find({"servicios.categoria": category},
    {
        primerNombre :1, 
        segundoNombre: 1,
        primerApellido: 1,
        'servicios.nombreServicio' : 1,
        'servicios.descripcionServicio': 1,
        'servicios.categoria': 1,

    });
    
    try {
        if(servicios.length === 0){
            return res.status(404).json({
                success: false,
                msg: "Data not found",
                
            })
        }
        res.send(servicios);
    } catch (error) {
        return res.status(500).send(error);
    }

}

//@desc     data de usuario servicio
//@route    GET /api/datadb/id
//@access   Private

exports.services = async (req, res) => {
    const category = req.params.category;
    //res.send(category);
    const servicios = await userService.find({"servicios.categoria": category},
    {
        primerNombre :1, 
        segundoNombre: 1,
        primerApellido: 1,
        'servicios.nombreServicio' : 1,
        'servicios.descripcionServicio': 1,
        'servicios.categoria': 1,

    });
    
    try {
        if(servicios.length === 0){
            return res.status(404).json({
                success: false,
                msg: "Data not found",
                
            })
        }
        res.send(servicios);
    } catch (error) {
        return res.status(500).send(error);
    }

}