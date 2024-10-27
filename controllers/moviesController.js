const {crearPeliculas,getAllPeliculas}=require("../models/movieModels");



const getAllPeliculasController=async(req,res)=>{
    let respuesta;
    try{
         respuesta=await getAllPeliculas()
        console.log(respuesta,"en get peliculas")
        return res.status(200).json({
            msg:"mostrando peliculas",
            respuesta
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg:" Error al ver peliculas"
            
        })
    }
   
}


const crearPeliculaController=async(req,res)=>{
    let newPelicula=req.body
    console.log(newPelicula)
    try{
        const result=await crearPeliculas(newPelicula)
        return res.status(200).json({
            ok:true,
            msg:"creando peliculas ",
            result
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg:" Error al crear peliculas"
            
        })
    }
}

module.exports={
    getAllPeliculasController,
    crearPeliculaController
}