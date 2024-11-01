const {peliculasByTittle}=require("../models/movieModels")
const {
    favoritosLista,
    favoritoDetalles,
    favoritoCrear
}=require("../models/userModel")

const get_pelicula_by_tittle_controller=async(req,res)=>{
    let {titulo}=req.params
    try{
        const result=await peliculasByTittle(titulo)
        if(!result){
            return res.status(400).json({
                ok:false,
                msg:"error al mostrar pelicula por titulo",
            })
        }
        return res.status(200).json({
            ok:true,
            msg:"mostrando pelicula",
            result
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg:"error al mostrar pelicula por titulo"
        })
    }
    
}

const get_detalle_pelicula_controller=async(req,res)=>{
    let detallesPelicula=req.boby
    //usuario_id   pelicula_id
    try{
        const result=await favoritoDetalles(detallesPelicula)
        if(!result){
            return res.status(400).json({
                ok:false,
                msg:"error al mostrar detalles del favorito",
            })
        }
        return res.status(200).json({
            ok:true,
            msg:"mostrando favorito",
            result
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg:"Error al mostrar detalles del favorito"
        })
    }

}

const get_peliculas_favoritas=async(req,res)=>{
    let identificador=req.body

    try{
        const result=await favoritosLista(identificador)
        if(!result){
            return res.status(400).json({
                ok:false,
                msg:"error al mostrar lista de favoritos",
            })
        }
        return res.status(200).json({
            ok:true,
            msg:"mostrando lista favoritos",
            result
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg:"Error al mostrar lista de favoritos"
        })
    }

}


module.exports={
    get_detalle_pelicula_controller,
    get_peliculas_favoritas,
    get_pelicula_by_tittle_controller
}