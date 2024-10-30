const 
    {
        getAllPeliculas,
        crearPeliculas,
        editarPelicula,
        borrarPelicula
    }=require("../models/movieModels");


// esto es /dashboard
const get_all_peliculas_controller=async(req,res)=>{
    let respuesta;
    try{
        respuesta=await getAllPeliculas()
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

// esto es /createMovie
const crear_pelicula_controller=async(req,res)=>{
    let newPelicula=req.body
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



const editar_pelicula_controller=async(req,res)=>{
    const {id}=req.params
    let body=req.body
    
    const peliculaeditada={...body,id}
    
    try{
        
        const result=await editarPelicula(peliculaeditada)
        return res.status(200).json({
            ok:true,
            msg:"editando pelicula",
            result
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg:"Error al editar peliculas"
        })
    }
}

const borrar_Pelicula_controller =async(req,res)=>{
    const {id}=req.params

    try{
        const result=await borrarPelicula(id)
        return res.status(200).json({
            ok:true,
            msg:"pelicula borrada",
            result
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg:"Error al borrar pelicula"
        })
    }
}

module.exports={
    borrar_Pelicula_controller,
    crear_pelicula_controller,
    editar_pelicula_controller,
    get_all_peliculas_controller
}