const { Pool } = require('pg')


/**
 * Atributos de conexion necesarios para conectarse a la BBDD en postgre
 */
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD
})

/**
 * Funcion de conexion a BBDD con postgre a la tabla de peliculas
 * ahora mismo, estamos haciendo la query de mostrar todas las peliculas
 */
const connect = async(consulta,arrayVariables=[])=>{
    let client,result;
    try{
        client=await pool.connect();
        const resp=await client.query(consulta,arrayVariables);
        result= resp.rows;
    }catch(error){
        throw error
    }finally{
        client.release()
    }
    return result
}

module.exports={
    connect
}