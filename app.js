const express=require("express");
var cors =require("cors");
require("dotenv").config();

const app=express();
const port=process.env.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'))
app.use(cors())


app.listen(port, () => {
    console.log(`Servicor por el puerto ${port}`)
})