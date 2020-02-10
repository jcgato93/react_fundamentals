# Elementos sin etiqueta Fragments

con React.Fragment evitamos renderizar elementos "div" o algun otro que envuelva 
codigo cuando realmente no los necesitamos. puesto que las funciones solo deben retornar 
un unico nodo la forma de hacerlo es envolviendo el codigo en algun elemento como "div"


```jsx
import React from 'react';

const Computacion = () =>{
    return (
        <React.Fragment>
            <li>Monitor</li>
            <li>Mouse</li>
            <li>Teclado</li>
        </React.Fragment>
    )
}

const Ropa = () =>{
    return (
        <React.Fragment>
            <li>Playera</li>
            <li>Jeans</li>            
        </React.Fragment>
    )
}

class App extends React.Component{
    

    render() {
        return (
            <div>
                <ul>
                    <Computacion />
                    <Ropa />
                </ul>
            </div>
        )
    }
}
```


