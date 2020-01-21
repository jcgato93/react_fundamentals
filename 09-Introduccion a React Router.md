# Introduccion a React Router

Las aplicaciones que se trabajan en React son llamadas single page apps. Esto es posible gracias a React Router que es una librería Open Source.

- Multi Page Apps: Cada página implica una petición al servidor. La respuesta usualmente tiene todo el contenido de la página.

- Single Page Apps (SPA): Aplicaciones que cargan una sola página de HTML y cualquier actualización la hacen re-escribiendo el HTML que ya tenían.

- React Router (v4): Nos da las herramientas para poder hacer SPA fácilmente. Usaremos 4 componentes:

    - BrowserRouter: es un componente que debe estar siempre lo más arriba de la aplicación. Todo lo que esté adentro funcionará como una SPA.
    
    - Route: Cuando hay un match con el path, se hace render del component. El component va a recibir tres props: match, history, location.
    
    - Switch: Dentro de Switch solamente van elementos de Route. Switch se asegura que solamente un Route se renderize.
    
    - Link: Toma el lugar del elemento "a href", evita que se recargue la página completamente y actualiza la URL.