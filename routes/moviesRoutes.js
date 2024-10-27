const express =require("express")
const router= express.Router()
const{getAllPeliculasController,crearPeliculaController}=require("../controllers/moviesController")

router.get("/",getAllPeliculasController)

router.post("/crear",crearPeliculaController)

















module.exports=router