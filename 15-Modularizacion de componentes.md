# Modularizacion de componentes en folders  con ayuda de ES6

Una de las ventajas que da ES6 es poder modularizar los componentes
y poderlos importar desde otros

la forma más practica para crear los componentes seria

components
    |
    |_ MyComponent
        |
        |_index.js
        |_MyComponent.js
        |_MyComponent.css

    
se crea un archivo index.js para que al momento de importarlo solo 
se requiera apuntar a la carpeta y no directamente al archivo

Dentro del index.js se importa y exporta el archivo principal

```jsx
import MyComponent from './MyComponent';

export default MyComponent
```
o en una sola linea

```jsx
export {default} from './MyComponent'
```