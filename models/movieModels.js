const {connect}=require("../helpers/connect");
const {peliculas}=require("./queries");

//ADMIN

//PAGINA DASHBOARD
const getAllPeliculas=async()=>{
   try{
        const respuesta=await connect(peliculas.getPeliculas,[])
        //console.log(respuesta,"en modelo")
        return respuesta
    }catch(error){
        console.log(error)
    }

}

//PAGINA DE CREAR PELICULA
const crearPeliculas=async(newPelicula)=>{
    // obtener del controlador const body=req.body
    const {titulo,anio,director,genero,duracion,foto}=newPelicula
    
    //titulo,anio,director,genero,duracion,foto
    try{
         const respuesta=await connect(peliculas.crearPelicula,[titulo,anio,director,genero,duracion,foto])
        // console.log(respuesta,"get all peliculas ")
         return respuesta
     }catch(error){
         console.log(error)
     }
 }

 //PAGINA DE EDITAR PELICULA
 const editarPelicula=async(cambiarPelicula)=>{
    
    const {titulo,anio,director,genero,duracion,foto,id}=cambiarPelicula

    try{
        const respuesta=await connect(peliculas.actualizarPelicula,[titulo,anio,director,genero,duracion,foto,id])
        return respuesta
    }catch(error){
        console.log(error)
    }
 }

 const borrarPelicula=async(id)=>{
    try{
        const respuesta=await connect(peliculas.borrarPelicula,[id])
        return respuesta
    }catch(error){
        console.log(error)
    }
 }

 const peliculasByTittle=async(pelicula_data)=>{
    const {titulo}=pelicula_data
    try{
        const respuesta=await connect(peliculas.getPeliculasByTittle,[titulo])
        return respuesta
    }catch(error){
        console.log(error)
    }
    
 }

 module.exports={
    getAllPeliculas,
    crearPeliculas,
    editarPelicula,
    borrarPelicula,
    peliculasByTittle
}