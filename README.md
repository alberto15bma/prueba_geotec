## PRUEBA GEOTEC
 Prueba tecnica

*Se agrega pasos para correr el proyecto*

**1. BASE DE DATOS**
  - Crear base de datos con el nombre de "GEOTEC"
  - Entrar a la carpeta BD y ejecutar el "script" en SQL SERVER
  - Ejecutar el archivo "DATOS DE PRUEBA", para tener datos

**2. SERVIDOR**
  - Entrar a la carpeta "SERVIDOR" y abrir el proyecto "ApiGeotec", se encuentra creado con .Net Core 2.2
  - Cambiar los parametros de conexión que se encuentra en el archivo del proyecto: "\Sistema\BDParametros.cs"
    - Se debe modificar las siguientes variables del archivo:
      - static public string BDAplicacion = "GEOTEC";   -> Nombre de la base de datos
      - static public string BDUsuario = "sa";		-> Usuario de la base de datos
      - static public string BDPassword = "12345678";	-> Contraseña de la base de datos
  - Iniciar el proyecto y obtener la URl y el PUERTO para agregarlo al cliente

**3 CLIENTE**
  - Instalar las dependencias con "npm i"
  - Entrar a la carpeta "CLIENTE" y abrir el proyecto "ApiGeotec", se encuentra creado con REACT
  - Abrir el archivo \test-geotec\src\sistema\server.js
  - Se debe modificar las variables con la ruta del servidor y el puerto
    - ip: "http://192.168.100.9", // DIRECCI�N IP DEL SERVIDOR
    - puerto: "1238", // PUERTO DEL SERVIDOR
  - Ejecutar el proyecto con "npm start"

  