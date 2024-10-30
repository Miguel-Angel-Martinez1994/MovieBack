  --Tabla de Peliculas
  CREATE TABLE peliculas(
    pelicula_id SERIAL NOT NULL PRIMARY KEY, 
    titulo varchar(255) UNIQUE, 
    anio int,
	  director varchar(50),
	  genero varchar(50),
	  duracion int,
	  foto text
  );

CREATE TABLE roles(
	rol_id SERIAL NOT NULL PRIMARY KEY,
	rol varchar(100)
);

--Tabla de usuarios
CREATE TABLE usuarios(
  usuario_id SERIAL NOT NULL PRIMARY KEY , 
  nombre varchar(255),
  firebase_id varchar(255),
  email varchar(255), 
	rol_id int,
	FOREIGN KEY (rol_id) REFERENCES roles(rol_id)
  );

--Tabla de favoritos
CREATE TABLE favoritos(
	favorito_id SERIAL NOT NULL PRIMARY KEY,
	usuario_id int,
	FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id),
	 pelicula_id int,
	 FOREIGN KEY (pelicula_id) REFERENCES peliculas(pelicula_id)
);



--Inserccion Peliculas de Prueba
INSERT INTO peliculas(pelicula_id,titulo,anio,director,genero,duracion,foto)
VALUES 
('Gladiator','2000','Ridley Scott','Acción','155','https://pics.filmaffinity.com/Gladiator-331143379-large.jpg'),
('Pulp Fiction','1994','Quentin Tarantino','Comedia Negra','154','https://pics.filmaffinity.com/Pulp_Fiction-210382116-large.jpg'),
('Reservoir Dogs','1992','Quentin Tarantino','Crimen','99','https://m.media-amazon.com/images/I/71mdZnv0bRL._AC_UF1000,1000_QL80_.jpg'),
('Deadpool','2016','Tim Miller','Superheroes','108','https://static.wikia.nocookie.net/wiki-doblaje-espana/images/b/b3/Deadpool_pel%C3%ADcula_portada.png/revision/latest?cb=20220917102555&path-prefix=es'),
('Deadpool y Lobezno','2024','Shawn Levy','Superheroes','128','https://es.web.img3.acsta.net/img/3f/2e/3f2efc609e5e23d748f1d44231bf6b2f.jpg')

--Inserccion de roles
INSERT INTO roles(rol)
VALUES
('admin'),('usuario')

--inserccion de usuarios
INSERT INTO usuarios(nombre,firebase_id,email,rol_id)
VALUES
('pepe','12345qwert','pepe@email.com',(SELECT rol_id FROM roles WHERE rol_id=1)),
('maria','123456qwert','maria@email.com',(SELECT rol_id FROM roles WHERE rol_id=2))

--inserccion de favoritos
INSERT INTO favoritos(usuario_id,pelicula_id)
VALUES
((SELECT usuario_id FROM usuarios WHERE usuario_id=2),(SELECT pelicula_id FROM peliculas WHERE pelicula_id=2)),
((SELECT usuario_id FROM usuarios WHERE usuario_id=2),(SELECT pelicula_id FROM peliculas WHERE pelicula_id=3)),
((SELECT usuario_id FROM usuarios WHERE usuario_id=1),(SELECT pelicula_id FROM peliculas WHERE pelicula_id=5))







