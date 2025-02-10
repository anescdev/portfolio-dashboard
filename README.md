# Portfolio Dashboard
Panel de administración que permite administrar el (portfolio)[https://www.anescdev.es] de forma sencilla.

Esta versión del portfolio se puede considerar en beta ya que faltan detalles por pulir pero entre las funciones que incorpora está:
* Manejar las empresas en la que he trabajado
* Manejar los proyectos personales y los puestos de trabajo (experiencias).
* Manejar las tecnologías con las que he trabajado.

Para aprender cosas nuevas he incluido cosas como la internacionalización de la aplicación, hooks personalizados, panel de inicio de sesión y uso de la Context API de React, gestión de la sesión dentro de la app.


## Build
Para construir la aplicación para producción, se deberá de hacer usando `npm run buildProd` ya que esta es desplegada en un subdirectorio del servidor.

Muy importante tener declaradas las variables de entorno del siguiente bloque de código antes de construir la app, tras esto dentro de la carpeta dist se encontrará la aplicación contruida y lista para usar en producción.

```env
VITE_API_BASE_URL=<Url base donde la aplicación atacará para obtener los datos que necesite.>
VITE_BASE_PATHNAME=<Url base donde la aplicación será desplegada>
```