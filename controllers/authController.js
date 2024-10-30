const
{
    crearUsuarioModel,
    obtenerUsuarioModel
}=require("../models/authModel")


//crear usuario
    //recibe id de firebase, nombre de firebase y email
    //añadir el rol , que por defecto sera usuario
    //objeto(que es un registro) que almacena sera 
const crearUsuarioController=async(req,res)=>{
    let newUsuario=req.body
    try{
        const result=await crearUsuarioModel(newUsuario)
        return res.status(200).json({
            ok:true,
            msg:"creando usuario",
            result
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg:"Error al crear usuario"
        })
    }
}


//obtener usuario
    //retornar objeto usuario

const obtenerUsuarioController =async(req,res)=>{
    let {email}=req.params
    try{
        const result=await obtenerUsuarioModel(email)
        return res.status(200).json({
            ok:true,
            msg:"mostrando usuario",
            result
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg:"error al mostrar usuario"
        })
    }
}


module.exports={
    crearUsuarioController,
    obtenerUsuarioController
}