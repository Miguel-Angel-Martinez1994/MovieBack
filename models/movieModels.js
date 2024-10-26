const { Pool } = require('pg')

const {peliculas}=require("./queries")

/**
 * Atributos de conexion necesarios para conectarse a la BBDD en postgre
 */
const pool = new Pool({
    host: 'localhost',
    user: 'movieApi',
    database: 'movieApi',
    password: 'admin'
})

/**
 * Funcion de conexion a BBDD con postgre a la tabla de peliculas
 * ahora mismo, estamos haciendo la query de mostrar todas las peliculas
 */
const connect = async()=>{
    let client;
    try{
        client=await pool.connect();
        const resp=await client.query(peliculas.getPeliculas);
        console.log(resp.rows);
    }catch(error){
        throw error
    }finally{
        client.release()
    }
}

module.exports={
    connect
}