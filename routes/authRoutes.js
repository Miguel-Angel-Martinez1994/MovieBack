const express =require("express")
const router= express.Router()

const{
    crear_usuario_controller,
    obtener_usuario_controller
}=require("../controllers/authController")


//LOGIN

//vista de registrase en la APP de la aplicacion
router.post("/signup",crear_usuario_controller)

//vista de loggearse en la APP de la aplicacion
router.post("/login",obtener_usuario_controller)

//vista de salirse de la aplicacion
router.post("/logout")


module.exports=router