const express =require("express")
const router= express.Router()
const{
        getAllPeliculasController,
        crearPeliculaController,
        getPeliculaByTittleController,
        getDetallePeliculaController,
        getPeliculasFavoritas,
        editarPeliculaController,
        borrarPeliculaController
    }=require("../controllers/moviesController")

//LOGIN

//vista de registrase en la APP de la aplicacion
router.post("/signup")

//vista de loggearse en la APP de la aplicacion
router.post("/login")

//vista de salirse de la aplicacion
router.post("/logout")



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