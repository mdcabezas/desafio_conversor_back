## Desafío Técnico: Conversor de monedas

- El Conversor de monedas **Backend**, se ejecuta sobre NodeJS con Express en el puerto **3001**, pero es posible cambiarlo en el archivo **.env** en la variable **PORT** (environment variables) .

- Interactúa con una base de datos **Postgres** que proporciona datos a los diferentes endpoints.


### Variables disponibles para la base de datos en archivo .env:

```
PGHOST=localhost  
PGPORT=5432  
PGUSER=miusuario  
PGPASSWORD=miclave  
PGDATABASE=mibase  
```
 ### Archivos disponibles:

- **DockerPostgres.txt** para generar contenedor en Docker.

- **init.sql** para inicializar la BD (tablas, relaciones, etc.).

- **/src/config/database.js** para la configuracion de conexión para la Base de Datos.

## Instrucciones de instalación y ejecución:

1. Descarga el repositorio.
2. Abre una terminal en el directorio raíz del proyecto.
3. En el directorio raíz del proyecto, ejecuta el siguiente comando para instalar las dependencias necesarias:

   ```
   npm install
   ```

4. Ejecuta el programa, utilizando el comando:
   ```
   npm start
   ```
   
