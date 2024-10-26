const peliculas ={
    getPeliculas:`
        select * 
        from peliculas 
        ORDER BY pelicula_id ASC
    `,
    getPeliculasById:`
        SELECT * 
        FROM peliculas 
        WHERE titulo Like 'Deadpool%';
    `,
    crearPelicula:`
        INSERT INTO peliculas(pelicula_id,titulo,anio,director,genero,duracion,foto)
        VALUES ('1','Gladiator','2000','Ridley Scott','Acción','155','https://pics.filmaffinity.com/Gladiator-331143379-large.jpg');
    `,
    actualizarPelicula:`
        UPDATE peliculas 
        SET titulo='gladiator', director='El ridels'
        where pelicula_id = 1;
    `,
    borrarPelicula:`
        Delete 
        FROM peliculas
        WHERE pelicula_id=1;
    `
}

module.exports={
    peliculas
}