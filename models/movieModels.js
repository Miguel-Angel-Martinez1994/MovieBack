const {connect}=require("../helpers/connect");
const {peliculas}=require("./queries");


const getAllPeliculas=async()=>{
   try{
        const respuesta=await connect(peliculas.getPeliculas,[])
        console.log(respuesta,"en modelo")
        return respuesta
    }catch(error){
        console.log(error)
    }

}

const crearPeliculas=async(newPelicula)=>{
    const {titulo,anio,director,genero,duracion,foto}=newPelicula
   // obtener del controlador const body=req.body
    //titulo,anio,director,genero,duracion,foto
    try{
         const respuesta=await connect(peliculas.crearPelicula,[titulo,anio,director,genero,duracion,foto])
         console.log(respuesta,"get all peliculas ")
         return respuesta
     }catch(error){
         console.log(error)
     }
 }

 module.exports={
    getAllPeliculas,
    crearPeliculas
}