  --Tabla de Peliculas
  CREATE TABLE peliculas 
   (
    pelicula_id int NOT NULL , 
    titulo varchar(255), 
    anio int,
	director varchar(50),
	genero varchar(50),
	duracion int,
	foto text,
    PRIMARY KEY (pelicula_id) 
  );

--Inserccion Peliculas de Prueba
INSERT INTO peliculas(pelicula_id,titulo,anio,director,genero,duracion,foto)
VALUES ('1','Gladiator','2000','Ridley Scott','Acción','155','https://pics.filmaffinity.com/Gladiator-331143379-large.jpg');

INSERT INTO peliculas(pelicula_id,titulo,anio,director,genero,duracion,foto)
VALUES ('2','Pulp Fiction','1994','Quentin Tarantino','Comedia Negra','154','https://pics.filmaffinity.com/Pulp_Fiction-210382116-large.jpg');

INSERT INTO peliculas(pelicula_id,titulo,anio,director,genero,duracion,foto)
VALUES ('3','Reservoir Dogs','1992','Quentin Tarantino','Crimen','99','https://m.media-amazon.com/images/I/71mdZnv0bRL._AC_UF1000,1000_QL80_.jpg');

INSERT INTO peliculas(pelicula_id,titulo,anio,director,genero,duracion,foto)
VALUES ('4','Deadpool','2016','Tim Miller','Superheroes','108','https://static.wikia.nocookie.net/wiki-doblaje-espana/images/b/b3/Deadpool_pel%C3%ADcula_portada.png/revision/latest?cb=20220917102555&path-prefix=es');

INSERT INTO peliculas(pelicula_id,titulo,anio,director,genero,duracion,foto)
VALUES ('5','Deadpool y Lobezno','2024','Shawn Levy','Superheroes','128','https://es.web.img3.acsta.net/img/3f/2e/3f2efc609e5e23d748f1d44231bf6b2f.jpg');

--Buscar por nombre, devolviendo todas las peliculas que empiecen por ese nombre (QUERY BUSCADORA DEL USER)
SELECT * 
FROM peliculas 
WHERE titulo Like 'Deadpool%';

--Actualizar peliculas por su ID
UPDATE peliculas 
SET titulo='gladiator', director='El ridels'
where pelicula_id = 1;

--Borrar peliculas por su ID
Delete 
FROM peliculas
WHERE pelicula_id=1;



-- QUERYS TABLA USUARIOS

--Tabla de usuarios
CREATE TABLE usuarios 
   (
    usuario_id int NOT NULL , 
    nombre varchar(255), 
    email varchar(255),
	rol varchar(25),
	peli_favorita int,
    FOREIGN KEY (peli_favorita) REFERENCES peliculas(pelicula_id)
  );

--Mostrar usuarios
select * from usuarios ORDER BY usuario_id ASC

--inserccion de usuarios de prueba
INSERT INTO usuarios(usuario_id,nombre,email,rol,peli_favorita)
VALUES ('1','Manolo','eldelbombo@españa.com','usuario','1');

INSERT INTO usuarios(usuario_id,nombre,email,rol,peli_favorita)
VALUES ('2','Beatriz','princesa@gmail.com','usuario','1');

INSERT INTO usuarios(usuario_id,nombre,email,rol,peli_favorita)
VALUES ('3','Esteban','asecas@hotmail.com','usuario','3');

INSERT INTO usuarios(usuario_id,nombre,email,rol,peli_favorita)
VALUES ('3','Esteban','asecas@hotmail.com','usuario','2');

INSERT INTO usuarios(usuario_id,nombre,email,rol,peli_favorita)
VALUES ('4','Hector','profe@hotmail.com','admin','4');

