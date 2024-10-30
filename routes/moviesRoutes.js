const express =require("express")
const router= express.Router()
const{
        getAllPeliculasController,
        crearPeliculaController,
        editarPeliculaController,
        borrarPeliculaController
    }=require("../controllers/moviesController")

const{
    getDetallePeliculaController,
    getPeliculaByTittleController,
    getPeliculasFavoritas
}=require("../controllers/userController")



//USER

// vista de inicio de la APP
router.get("/")

//vista de la pagina del buscador de peliculas del usuario
router.get("/search",getPeliculaByTittleController)

//vista de la pagina de detalles sobre una pelicula
router.get("/search/:title",getDetallePeliculaController)

//vista de la pagina de favoritos del usuario
router.get("/movies",getPeliculasFavoritas)


//ADMIN

//pagina principal del admin
router.get("/dashboard",getAllPeliculasController)

//pagina de admin de crear nuevas peliculas
router.post("/createMovie",crearPeliculaController)

//pagina de admin de editar peliculas
router.put("/editMovie/:id",editarPeliculaController)

//pagina de admin para borrar peliculas
router.delete("/removeMovie",borrarPeliculaController)




module.exports=router