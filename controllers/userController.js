const {peliculasByTittle}=require("../models/movieModels")

const get_pelicula_by_tittle_controller=async(req,res)=>{
    let {titulo}=req.params
    try{
        const result=await peliculasByTittle(titulo)
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

}

const get_peliculas_favoritas=async(req,res)=>{

}


module.exports={
    get_detalle_pelicula_controller,
    get_peliculas_favoritas,
    get_pelicula_by_tittle_controller
}