# Proyecto intermedio: Movie App 

## Parte API

### Como instalar el proyecto

- Deberemos descargarnos el proyecto de github y copiarlo en una nueva carpeta con el comando de github de git clone.

- Una vez descargado el proyecto, deberemos crear nuestro propio archivo .env, usando como base, el archivo env-templates y rellenandolo con nuestros propios datos.

` PORT= Nuestro puerto`
` DB_HOST= Nuestra base de datos`
` DB_USER= Nuestro usuario de base de datos`
` DB_DATABASE= Nombre de nuestra base de datos`
` DB_PASSWORD= Nuestra contraseña de base de datos`

- Ya creado nuestro archivo .env, ahora descargaremos todos los node_modules que necesitamos en este proyecto.

` npm i `

- Si no tenemos la base de datos con la que trabaja esta API, en el archivo queries-inicio estan preparadas las querys que crean tablas de prueba junto a unas insercciones para estas, que se pueden usar para pruebas.

- Con los node_modules ya instalados y la base de datos ahora estamos listos para arrancar el proyecto, para arrancarlo usaremos el comando npm run dev, para arrancarlo asi con nodemon, por el contrario, si queremos arrancarlo de forma tradicional el comando que usaremos es el npm start

` npm run dev`
` npm start`

### Como funciona esta API

- Esta API funciona recibiendo datos en formato JSON, la API desestructurara el JSON recibido para usar los parametros necesarios para las diferentes Querys que se hayan requerido, se realizara dicha query en la base de datos, guardando el resultado de esta en un JSON y devolviendolo. 

- Es importante siempre recibir JSON para asi la API pueda trabajar.

### Endpoints de prueba

- Mostrar peliculas

` http://localhost:4000/api/v1/dashboard`

- Mostrar pelicula por su titulo

` http://localhost:4000/api/v1/search/Gladiator`

- Editar pelicula, usamos el id de dicha pelicula

` http://localhost:4000/api/v1/editMovie/3`

- Crear una pelicula nueva, recuerda que deberas introducir los valores de dicha pelicula en formato JSON

` http://localhost:4000/api/v1/createMovie`

- Borrar una pelicula, en el JSON mandaremos el id de la pelicula que deseemos borrar

` http://localhost:4000/api/v1/removeMovie`

- loggearnos en la APP, recibirimos los valores del usuario en formato JSON

` http://localhost:4000/api/v1/auth/signup`

