const express =require("express")
const router= express.Router()
const{
        borrar_Pelicula_controller,
        crear_pelicula_controller,
        editar_pelicula_controller,
        get_all_peliculas_controller
    }=require("../controllers/moviesController")

const{
    get_detalle_pelicula_controller,
    get_pelicula_by_tittle_controller,
    get_peliculas_favoritas
}=require("../controllers/userController")



//USER

// vista de inicio de la APP
router.get("/")

//vista de la pagina del buscador de peliculas del usuario
router.get("/search",get_pelicula_by_tittle_controller)

//vista de la pagina de detalles sobre una pelicula
router.get("/search/:title",get_detalle_pelicula_controller)

//vista de la pagina de favoritos del usuario
router.get("/movies",get_peliculas_favoritas)


//ADMIN

//pagina principal del admin
router.get("/dashboard",get_all_peliculas_controller)

//pagina de admin de crear nuevas peliculas
router.post("/createMovie",crear_pelicula_controller)

//pagina de admin de editar peliculas
router.put("/editMovie/:id",editar_pelicula_controller)

//pagina de admin para borrar peliculas
router.delete("/removeMovie",borrar_Pelicula_controller)




module.exports=router