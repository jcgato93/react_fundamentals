# Props

Los props que es la forma corta de properties son argumentos de una función y en este caso serán los atributos de nuestro componente como class, src, etc.

Estos props salen de una variable de la clase que se llama this.props y los valores son asignados directamente en el ReactDOM.render().

```javascript
//desde Badge.js
        <h1>
          {this.props.firstName} <br /> {this.props.lastName}
        </h1>
```

```javascript
//desde index.js

import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(<Badge firstName="Juan" lastName="Castillo" />, container);
```

