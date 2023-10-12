Introducción

JavaScript es un lenguaje de programación interpretado (El navegador lee directamente el código, sin necesidad de terceros) de alto nivel. Es el lenguaje de programación encargado de dotar de mayor interactividad y dinamismo a las páginas web. 



¿Cuáles son los principales objetivos de estos ejercicios?

⦁ Entender cómo funciona la asincronía.
⦁ Aprender cómo llamar a una API
⦁ Aprender lo básico sobre cómo utilizar Axios.
1.Obtener y mostrar usuarios utilizando la API de JSONPlaceholder
En este ejercicio utilizaremos la API de https://jsonplaceholder.typicode.com/users. Leyendo su documentación, deberás hacer lo siguiente:
Imprimir por consola la lista (array) de usuarios.
Imprimir por consola solo el nombre de los usuarios.
Crear una variable global llamada "users" y, al hacer la solicitud utilizando Axios, rellenarla con la respuesta de la API(el array). Este proceso debe realizarse fuera de cualquier función.
Nota: Después de realizar el console.log de la variable "users", es normal que aparezca vacía debido a que JavaScript no es bloqueante y el console.log se ejecuta antes de que la variable sea llenada con la información de la solicitud.
// archivo JS


// variable global
// petición axios (aquí hago la petición y dentro relleno la variable creada anteriormente)

Crear una función llamada "showUsers" que muestre por consola la variable global "users" que has creado.
Crea un botón que cuando lo cliques ejecute la función que habías creado
Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM (en el HTML).

Recuerda que para estos ejercicios deberás utilizar Axios.

Extras

1. Quiero un perrito, pero no se que raza escoger, ¿me ayudas?

En este ejercicio utilizaremos la API de https://dog.ceo/dog-api/. Leyendo su documentación, deberás hacer lo siguiente:


Imprimir por consola la lista de razas de todos los perros.
Imprimir por consola una imagen random de una raza.
Imprimir por consola todas las imágenes de una raza concreta.

Recuerda que para estos ejercicios deberás utilizar Axios. Al haber conseguido que se imprima por consola, el siguiente paso será que se muestren en pantalla con las herramientas que nos ofrece el árbol DOM.

*Extra ¿Y si ahora te pidiéramos que podamos poner otra raza en la url para que nos busque otras imágenes? Adapta las urls que ya tenías para que puedas pasarle argumentos.

Entregables

Subir el ejercicio a un repositorio en GitHub.
Dejar el enlace del repositorio adjuntado en Classroom.
