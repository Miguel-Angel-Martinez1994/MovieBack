const express =require("express")
const router= express.Router()

const{
    crearUsuarioController,
    obtenerUsuarioController
}=require("../controllers/authController")


//LOGIN

//vista de registrase en la APP de la aplicacion
router.post("/signup",crearUsuarioController)

//vista de loggearse en la APP de la aplicacion
router.post("/login",obtenerUsuarioController)

//vista de salirse de la aplicacion
router.post("/logout")


module.exports=router