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

● Acumulativo de powerstats, agrupados por cada uno, es decir: suma total de intelligence,
strength, etc. de todos los miembros individuales del equipo.\
● El powerstat que más acumulativo tenga debería aparecer arriba para categorizar el tipo
de equipo (inteligencia, fuerza, etc.).\
● Pesos y altura promedio del equipo.\
● El equipo debe tener 6 miembros. Debe haber 3 miembros con orientación buena y 3 con
orientación mala. Esto debe validarse al intentar agregar un nuevo héroe.\
● Se deberá poder eliminar un miembro del equipo, lo que generará un nuevo promedio de
peso, acumulativo de powerstats, etc.

## Requerimientos técnicos

Aprovechando las características de React, deberán crearse las siguientes secciones, y modularizar las
mismas en componentes reutilizables.

### `1. Formulario de Login`

El formulario se deberá renderizar al ingresar a cualquier ruta si el usuario no está autenticado,
conteniendo los campos:

● Email.\
● Password.\
● Botón de “Enviar”.

Al hacer click en “Enviar”, se deberá validar que ambos campos no estén vacíos, y mostrar un mensaje
al usuario si lo estuviesen. Caso contrario, se deberá realizar una petición POST a la siguiente url, con
los campos email y password en el BODY.

Los datos válidos para obtener un token son:

● Email: challenge@alkemy.org\
● Password: react

En el caso de obtener un error de la API, se deberá mostrar una alerta, mientras que si es satisfactorio
deberá redirigir al Home y almacenar el token obtenido en localStorage.

Las validaciones del formulario deberán realizarse utilizando la librería Formik.

### `2. Equipo`

El Home de la aplicación mostrará a los miembros del equipo en un listado en un grid. Cada ítem del
listado contendrá:

● Nombre del héroe.\
● Imagen.\
● Powerstats.\
● Acciones para ver el detalle o eliminarlo del equipo.

### `3. Buscador de Héroes`

Para agregar un héroe a su equipo, se deberá visualizar un formulario que realice una petición GET al
endpoint de búsqueda y muestre los resultados disponibles en un grid. Esos resultados deberán
mostrar:

● Nombre del héroe.\
● Imagen.\
● Acciones para agregarlo al equipo

Las validaciones del formulario deberán realizarse utilizando la librería Formik.

### `4. Detalle de Héroe`

Al hacer click en un héroe del equipo, se mostrarán los detalles que figuran en el endpoint. De ellos,
mostrar:, altura, nombre completo, alias, color de ojos y cabello, y su lugar de trabajo.

● Peso.\
● Altura.\
● Nombre.\
● Alias.\
● Color de ojos.\
● Color de cabello.\
● Lugar de trabajo.

## Notas Adicionales

-Debido a que no encontré especificaciones sobre el manejo de peticiones utilicé el package [JSON-server](https://www.npmjs.com/package/json-server) que brinda una fake 
REST API, para enfocarme en el desarrollo de fron-end. El mismo se ejecuta con el siguiente comando : npx json-server --watch db.json --port 4000

-Para el manejo de alertas en la validación de agregrado de heroes decidí usar [sweetalert2](https://www.npmjs.com/package/sweetalert2)

-Luego utilice gráficos para la visualización de stats de los héroes que hice gracias a [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2)

-Hice uso de [React-redux](https://react-redux.js.org/) para almacenar datos del equipo como así tambien loading y errores.

-En la card tuve que implementar css para que en onHover, esta misma rote y allí se muestre el gráfico del heroé en particular.,o hice para no ingresar tantos datos de un sólo lado de la card. 

*Cabe aclarar que en resoluciones más pequenas, no se puede utilizar el evento onHover, por lo que en esos tamanos de pantalla, se agrega en la front card,
el boton de detalle para saltar a la sección de heroInfo
