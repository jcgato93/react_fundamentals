# ReactDOM.render

Para añadir nuevos elementos al HTML utilizando javascript se podria hacer 
de la siguiente manera

```javascript

// crear h1 con el texto Hello world !
const element = document.createElement('h1');
element.innertText = 'Hello world !';

// añadir el h1 a un elemento padre
const container = document.getElementById('app');
container.appendChild(element);

```

Con React funcionaria de la siguiente manera 

- React y ReactDOM trabajarán en conjunto.

    React como análogo a createElement
    ReactDOM a appendChild

- ReactDOM.render() toma dos argumentos: Qué queremos renderizar y dónde lo queremos renderizar.


```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const element = <h1>Hello world ! </h1>;

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__)
ReactDOM.render(element, container);
```