const {connect}=require("../helpers/connect");
const {usuarios}=require("./queries")


//crearUsuario:`     obtenerUsuario:`

const crearUsuarioModel=async(dataUsuario)=>{
    const [firebase_id,email,rol_id]=dataUsuario
    //nombre,firebase_id,email,rol_id
    try{
        const respuesta =await connect(usuarios.crearUsuario,[firebase_id,email,rol_id])
        return respuesta
    }catch(error){
        console.log(error)
    }
}


const obtenerUsuarioModel=async(dataUsuario)=>{
    const {email}=dataUsuario
    try{
        const respuesta=await connect(usuarios.obtenerUsuario,[email])
        return respuesta
    }catch(error){
        console.log(error)
    }
}


module.exports={
    crearUsuarioModel,
    obtenerUsuarioModel
}