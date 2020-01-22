# Crear un Layout

Cuando tenemos un compente Layout que se repite y lo que se quiere 
es que se cambia lo que esta dentro de este segun la ruta 
podemos hacer lo siguiente

1. Cerar archivo del Layout

```javascript
// src/component/Layout.js
import React from 'react';
import Navbar from '../components/Navbar';

function Layout(props){    
    return (
        <div>
            <Navbar />
            // con este se define que va a renderizar el contenido del layout
            {props.children}
        </div>
    )
}

export default Layout;
```


2. Aplicar el componente Layout
```javascript
import React from 'react';
import { BrowserRouter, Route , Switch} from "react-router-dom";

import Layout from './Layout';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';

function App(){
    return (
      <BrowserRouter>
       // ======= Layout
        <Layout>
          <Switch>
            <Route exact path="/badges" component={Badges}></Route>
            <Route exact path="/badges/new" component={BadgeNew}></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
}

export default App;
```