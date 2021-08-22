# React Alkemy Challenge!!

Este proyecto corresponde a un desafío de Alkemy Labs

## Objetivo:

Desarrollar una aplicación para crear un equipo de superhéroes que consumirá una API externa y
mostrará diferentes atributos a nivel individual de cada miembro y del equipo consolidado.

las diferentes secciones que tendrá la app deberán protegerse verificando que el
usuario autenticado disponga de un token que se almacenará en localStorage. \
El mismo, se obtendrá de una API con datos de muestra.
Si un usuario intenta ingresar a cualquier ruta sin estar autenticado,
deberá ser redirigido al login.

-Para el manejo de peticiones HTTP deberá utilizarse la librería Axios.

-El sitio deberá ser responsive, y utilizar Bootstrap como punto de partida para aprovechar las
características de la librería.

## Requerimientos funcionales

En la pantalla de Home se deberá mostrar, además de los miembros del equipo:

●Acumulativo de powerstats, agrupados por cada uno, es decir: suma total de intelligence,
strength, etc. de todos los miembros individuales del equipo.
● El powerstat que más acumulativo tenga debería aparecer arriba para categorizar el tipo
de equipo (inteligencia, fuerza, etc.).
● Pesos y altura promedio del equipo.
● El equipo debe tener 6 miembros. Debe haber 3 miembros con orientación buena y 3 con
orientación mala. Esto debe validarse al intentar agregar un nuevo héroe.
● Se deberá poder eliminar un miembro del equipo, lo que generará un nuevo promedio de
peso, acumulativo de powerstats, etc.

## Requerimientos técnicos

Aprovechando las características de React, deberán crearse las siguientes secciones, y modularizar las
mismas en componentes reutilizables.

### `1. Formulario de Login`

El formulario se deberá renderizar al ingresar a cualquier ruta si el usuario no está autenticado,
conteniendo los campos:

● Email.
● Password.
● Botón de “Enviar”.

Al hacer click en “Enviar”, se deberá validar que ambos campos no estén vacíos, y mostrar un mensaje
al usuario si lo estuviesen. Caso contrario, se deberá realizar una petición POST a la siguiente url, con
los campos email y password en el BODY.

Los datos válidos para obtener un token son:

● Email: challenge@alkemy.org
● Password: react

En el caso de obtener un error de la API, se deberá mostrar una alerta, mientras que si es satisfactorio
deberá redirigir al Home y almacenar el token obtenido en localStorage.

Las validaciones del formulario deberán realizarse utilizando la librería Formik.

### `2. Equipo`

El Home de la aplicación mostrará a los miembros del equipo en un listado en un grid. Cada ítem del
listado contendrá:

● Nombre del héroe.
● Imagen.
● Powerstats.
● Acciones para ver el detalle o eliminarlo del equipo.

### `3. Buscador de Héroes`

Para agregar un héroe a su equipo, se deberá visualizar un formulario que realice una petición GET al
endpoint de búsqueda y muestre los resultados disponibles en un grid. Esos resultados deberán
mostrar:

● Nombre del héroe.
● Imagen.
● Acciones para agregarlo al equipo

Las validaciones del formulario deberán realizarse utilizando la librería Formik.

### `4. Detalle de Héroe`

Al hacer click en un héroe del equipo, se mostrarán los detalles que figuran en el endpoint. De ellos,
mostrar:, altura, nombre completo, alias, color de ojos y cabello, y su lugar de trabajo.

● Peso.
● Altura.
● Nombre.
● Alias.
● Color de ojos.
● Color de cabello.
● Lugar de trabajo.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
