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


const favoritoDetalles=async()=>{
    //recibir usuario_id y pelicula_id
}


const favoritoCrear=async()=>{

}

module.exports={
    favoritoCrear,
    favoritoDetalles,
    favoritosLista
}