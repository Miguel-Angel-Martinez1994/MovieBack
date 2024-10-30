const {connect}=require("../helpers/connect");
const {favoritos}=require("./queries");


//  listaFavoritos    detallesFavorito    crearFavorito       


const favoritosLista=async(usuario)=>{
    //recibir el usuario_id
    const {usuario_id}=usuario
    try{
        const respuesta=await connect(favoritos.listaFavoritos,[usuario_id])
        return respuesta
    }catch(error){
        console.log(error)
    }
}


const favoritoDetalles=async(data)=>{
    //recibir usuario_id y pelicula_id
    const {usuario_id,pelicula_id}=data
    try{
        const respuesta=await connect(favoritos.detallesFavorito,[usuario_id,pelicula_id])
        return respuesta
    }catch(error){
        console.log(error)
    }
}


const favoritoCrear=async(data)=>{
    //recibir usuario_id y pelicula_id
    const {usuario_id,pelicula_id}=data
    try{
        const respuesta=await connect(favoritos.crearFavorito,[usuario_id,pelicula_id])
        return respuesta
    }catch(error){
        console.log(error)
    }
}

module.exports={
    favoritoCrear,
    favoritoDetalles,
    favoritosLista
}