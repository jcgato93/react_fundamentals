# Cómo aplicar estilos

- Para los estilos crearemos una carpeta llamada Styles y allí vivirán todos los archivos de estilos que tienen que ver con los componentes.

- Para usar los estilos es necesario importarlos con import

- React funciona ligeramente diferente y para los atributos de clases no se utiliza class sino className

- Es posible utilizar Bootstrap con React, sólo debe ser instalado con npm install bootstrap y debe ser importado en el index.js

- Existen estilos que son usados de manera global o en varios componentes, así que deben ser importados en el index.js

```javascript
// en el index.js
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(<Badge />, container);
```