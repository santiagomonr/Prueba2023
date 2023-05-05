# Configuración

### Librería de estilos

bootstrap: https://getbootstrap.com/docs/5.1/getting-started/introduction/

### BD

Nombre: gc_equipos <br>
Tabla: gce_caracteristicas

- gce_id: Idetificación única del computador
- gce_nombre_equipo: Nombre del equipo
- gce_board: Tipo de placa base
- gce_case: Modelo de la torre
- gce_procesador: Marca del procesador
- gce_grafica: Marca de la trajeta gráfica
- gce_ram: Tamaño total de ram
- gce_disco_duro: Modelo del disco duro
- gce_teclado: Tipo de teclado
- gce_mouse: Tipo de mouse
- gce_pantalla: Tamaño total de la pantalla
- gce_estado: Estado del registro (0. Inactivo, 1. Activo)

#### Instalación

(Consola CMD) <br>
(Xampp) cd C:\xampp\htdocs <br>
(Wamp) cd C:\wamp64\www <br>
git clone https://github.com/Nelmajuva/Prueba-T-cnica-Angular.git <br>
Nótese que la carpeta debe renombrarse a "Prueba2023", de lo contrario, no funcionará correctamente <br>

#### Diseño

https://xd.adobe.com/view/abe67be2-dc70-489b-8cb3-dd24dc61f340-feb5/specs/

# Prueba aspirantes JavaScript y PHP

El proyecto de gestión de equipos permite registrar y listar las características de los computadores de la compañía, es necesario añadir las siguientes funciones al proyecto:

- Agregar una opción a la tabla que permita cambiar el estado de un computador, esta acción deberá verse reflejada en base de datos y en la tabla
- Agregar una regla de estilo a las filas con computadores inactivos, su color de fondo deberá ser rojo
- Actualizar el contenido de la tabla cuando se agregan nuevos computadores
- Agregar una opción a la tabla que permita actualizar los computadores, una vez seleccionado un computador en específico, se deben cargar en un formulario modificable los datos de éste, finalizado el proceso, deberá actualizar en base de datos y en la tabla las propiedades del compuador.
- Agregar una opción a la tabla que permita eliminar un computador, esta acción deberá verse reflejada en base de datos y en la tabla
- Desarrollar los elementos con base en el diseño asignado

Nota: Ninguna de las acciones descritas anteriormente deberá recargar la página

#### Instalación

(Consola CMD) <br>
(Xampp) cd C:\xampp\htdocs\Prueba2023 <br>
(Wamp) cd C:\wamp64\www\Prueba2023 <br>
composer install

#### Apertura

(Navegador) localhost/Prueba2023/views

# Prueba aspirantes Laravel

- Con base en el funcionamiento del código de PHP nativo, realizar migración del mismo para el framework de Laravel.
- Crear la definición de la tabla `gce_caracteristicas` en las migraciones.
- Crear modelo para la tabla `gce_caracteristicas`.
- Crear controlador para definir la lógica y métodos de `gce_caracteristicas`.
- Utilice el ORM Eloquent en todas las peticiones hacia la base de datos
- Crear API de servicios que retornen la información solicitada por el cliente => ANGULAR.
- Actualiza la versión de Laravel a la versión más actual. (10)

#### Instalación

(Consola CMD) <br>
(Xampp) cd C:\xampp\htdocs\Prueba2023\laravel <br>
(Wamp) cd C:\wamp64\www\Prueba2023\laravel <br>
composer install <br>
npm install <br>
<br>

#### Apertura

(Consola) php artisan serve <br>
(Navegador) localhost:8000

# Prueba aspirantes Angular

- Con base en el funcionamiento del código de HTML Y Javascript, realizar migración del mismo para el framework de Angular.
- La regla de estilo de la fila deberá aplicarse por medio de una directiva.
- El formulario de actualización debe crearse en un componente por separado y los datos del computador seleccionado deberán pasarse por decoradores Input.
- Una vez actualizado el computador, deberá informar al componente app por medio del decorador Output.
- Utilice formularios reactivos para la recolección y validación de información de registro y actualización.
- La construcción de la tabla deberá hacerce en el html, por medio de la directiva ngFor.
- Dentro de la tabla, utilice un pipe que convierta la inicial de cada una de las columnas siempre en mayúscula y el resto en minúscula.
- Los servicios deberán consumir la información del API de Laravel.
- Actualizar el proyecto de Angular a la versión más actual. (15)
- Actualizar el proyecto de Laravel a la versión más actual. (10)

#### Instalación

(Consola CMD) <br>
(Xampp) cd C:\xampp\htdocs\Prueba2023\public\components <br>
(Wamp) cd C:\wamp64\www\Prueba2023\public\components <br>
npm install

#### Apertura

(Consola) ng serve <br>
(Navegador) localhost:4200

###  Fecha límite del entregable

Cabe recarlacar que tienes un tiempo para hacer la entrega de la misma, siendo la fecha límite el domingo 7 de mayo a las 12 de la noche. Esto con el objetivo de darte pronto respuesta el siguiente día hábil.

###  Respuesta

Una vez finalizada la prueba, deberá subir el proyecto en su propio repositorio de git de forma pública y enviar el link al correo jclopezm@garantiascomunitarias.com, con el asunto POSTULADO RED SOPORTE TECNOLÓGICO, además deberá incluir sus datos personales como nombre, cédula y contacto.

Nuestro equipo de trabajo desarrolló este proyecto con el propósito de filtrar la gran cantidad de solicitudes que recibimos para este puesto y facilitar el proceso de selección. Agradecemos tu interés y esperamos que este proceso sea beneficioso tanto para nosotros como para ti.