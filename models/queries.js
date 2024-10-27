const peliculas ={
    getPeliculas:`
        SELECT * 
        FROM peliculas 
        ORDER BY pelicula_id ASC
    `,
    getPeliculasByTittle:`
        SELECT * 
        FROM peliculas 
        WHERE titulo Like '%$1%';
    `,
    crearPelicula:`
        INSERT INTO peliculas(titulo,anio,director,genero,duracion,foto)
        VALUES ($1,$2,$3,$4,$5,$6);
    `,
    actualizarPelicula:`
        UPDATE peliculas 
        SET titulo=$1,anio=$2,director=$3,genero=$4,duracion=$5,foto=$6
        where pelicula_id = $7;
        --[titulo,anio,director,genero,duracion,foto,pelicula_id]
    `,
    borrarPelicula:`
        Delete 
        FROM peliculas
        WHERE pelicula_id=$1;
    `
}

module.exports={
    peliculas
}