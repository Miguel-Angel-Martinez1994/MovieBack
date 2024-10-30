const
{
    crearUsuarioModel,
    obtenerUsuarioModel
}=require("../models/authModel")


//crear usuario
    //recibe id de firebase, nombre de firebase y email
    //añadir el rol , que por defecto sera usuario
    //objeto(que es un registro) que almacena sera 
const crear_usuario_controller=async(req,res)=>{
    let newUsuario=req.body
    //nombre,firebase_id,email,rol_id
    const {firebase_id,email,rol_id}=newUsuario
    try{
        const result=await crearUsuarioModel([firebase_id,email,rol_id])
        if(!result){
            return res.status(400).json({
                ok:false,
                msg:"error al crear usuario",
            })
        }
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

const obtener_usuario_controller =async(req,res)=>{
    let obtenerUsuario=req.body
    let {email}=obtenerUsuario
    try{
        const result=await obtenerUsuarioModel([email])
        if(!result){
            return res.status(400).json({
                ok:false,
                msg:"error al mostrar usuario",
            })
        }
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
    crear_usuario_controller,
    obtener_usuario_controller
}