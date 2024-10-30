const peliculas ={
    getPeliculas:`
        SELECT * 
        FROM peliculas 
        ORDER BY pelicula_id ASC
    `,
    getPeliculasByTittle:`
        SELECT * 
        FROM peliculas 
        WHERE titulo LIKE '%' || $1 || '%' ;
    `,
    crearPelicula:`
        INSERT INTO peliculas(titulo,anio,director,genero,duracion,foto)
        VALUES ($1,$2,$3,$4,$5,$6);
    `,
    actualizarPelicula:`
        UPDATE peliculas 
        SET titulo=$1,anio=$2,director=$3,genero=$4,duracion=$5,foto=$6
        where pelicula_id = $7;
    `,
    borrarPelicula:`
        Delete 
        FROM peliculas
        WHERE pelicula_id=$1;
    `
}

const usuarios={
    crearUsuario:`
        INSERT INTO usuarios(nombre,firebase_id,email,rol_id)
        VALUES('$1','$2','$3',(SELECT rol_id FROM roles WHERE rol_id=$4));
    `,
    obtenerUsuario:`
        SELECT * 
        FROM usuarios 
        WHERE email= '$1' ;
    `
}

const favoritos={
    listaFavoritos:`
        SELECT 
            usuarios.nombre AS nombre_usuario,
            peliculas.titulo AS titulo_pelicula
        FROM favoritos
        JOIN usuarios ON favoritos.usuario_id = usuarios.usuario_id
        JOIN peliculas ON favoritos.pelicula_id = peliculas.pelicula_id
        WHERE favoritos.usuario_id = $1
        ORDER BY usuarios.nombre, peliculas.titulo;
    `,
    detallesFavorito:`
        SELECT 
            peliculas.pelicula_id,
            peliculas.titulo AS titulo_pelicula,
            peliculas.anio,
            peliculas.director,
            peliculas.genero,
            peliculas.duracion
        FROM favoritos
        JOIN usuarios ON favoritos.usuario_id = usuarios.usuario_id
        JOIN peliculas ON favoritos.pelicula_id = peliculas.pelicula_id
        WHERE favoritos.usuario_id = $1 AND peliculas.pelicula_id=$2
        ORDER BY peliculas.titulo;
    `,
    crearFavorito:`
        INSERT INTO favoritos(usuario_id,pelicula_id)
        VALUES
        ((SELECT usuario_id FROM usuarios WHERE usuario_id=$1),(SELECT pelicula_id FROM peliculas WHERE pelicula_id=$2))
    `
}

module.exports={
    peliculas,
    usuarios,
    favoritos
}