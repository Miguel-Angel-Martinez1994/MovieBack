const {peliculasByTittle}=require("../models/movieModels")

const getPeliculaByTittleController=async(req,res)=>{
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

const getDetallePeliculaController=async(req,res)=>{

}

const getPeliculasFavoritas=async(req,res)=>{

}


module.exports={
    getDetallePeliculaController,
    getPeliculasFavoritas,
    getPeliculaByTittleController
}