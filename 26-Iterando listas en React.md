# Iterando listas en React

Una necesidad muy comun es crear listas

```jsx
import React from 'react';

const frutas = [
    'fruta 1',
    'fruta 2',
    'fruta 3',
    'fruta 4',
    'fruta 5',
    'fruta 6'
]

class App extends React.Component{
    render() {
        return (
            <div>
                <ul>
                    {frutas.map((fruta) => {
                        return (
                            <li>{fruta}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
```

## Iterando listas de objetos

```jsx
import React from 'react';

class App extends React.Component {
  state = {
    productos: [
      {
        id: 'BAAA693A-AF9E-FD73-9E0A-480FE1CC8962',
        name: 'Rosa, Robert O.',
        colors: ['violet'],
        price: 355
      },
      {
        id: '1DD65705-4DBC-0711-C5BB-B01A5B3C5F87',
        name: 'Merritt, Audra Y.',
        colors: ['red'],
        price: 830
      },
      {
        id: '46A6C5D0-0710-4357-6D9C-FC30F6B6544B',
        name: 'Harding, Heather Q.',
        colors: ['red, yellow, indigo'],
        price: 972
      }
    ]
  };

  render() {
    return (
      <div>
        <h3>Iterando listas de objetos ⭐ </h3>

        <div>
            {this.state.productos.map((producto) => {
                return (
                    <div>
                        { producto.name } : $ { producto.price }

                        <div>
                            {producto.colors.map((color) => {
                                return (
                                    <span style={{
                                        width: '13px',
                                        height: '13px',
                                        borderRadius: '0.1em',
                                        border: '1px solid gray',
                                        display: 'inline-block',
                                        margin: '0.1em',
                                        background: color
                                    }}></span>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
    );
  }
}
```

## La propiedad key en las listas

Para que React sepa que elemento se actulizo de manera más rapida utiliza
la propiedad especial "key" la cual debe ser un identificador (string) unico en el listado

```jsx
import React from 'react';

class App extends React.Component{

  state = {
    productos: [
      {
        id: 'BAAA693A-AF9E-FD73-9E0A-480FE1CC8962',
        name: 'Rosa, Robert O.',
        colors: ['violet'],
        price: 355
      },
      {
        id: '1DD65705-4DBC-0711-C5BB-B01A5B3C5F87',
        name: 'Merritt, Audra Y.',
        colors: ['red'],
        price: 830
      },
      {
        id: '46A6C5D0-0710-4357-6D9C-FC30F6B6544B',
        name: 'Harding, Heather Q.',
        colors: ['red, yellow, indigo'],
        price: 972
      }
    ]
  };

    render() {
        return (
            <div>
                <ul>
                    {this.state.products.map((product) => {
                        return (
                            <li key={product.id}>{product.name}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
```


## Pasar datos al iterar

En ocaciones se necesita pasar datos desde una lista , un ejemplo seria 
que se envie la informacion cuando se le de click a un item del listado y se 
envie la informacion de ese item.

```jsx
import React, { Component } from 'react'

class App extends Component {
  state = {
    fruits: [
      { name: 'Fresa', price: 5.4 },
      { name: 'Manzana', price: 2.3 },
      { name: 'Sandia', price: 1.2 },
      { name: 'Guayaba', price: 5 },
      { name: 'Pera', price: 4.12 },
      { name: 'Kiwi', price: 3.87 },
      { name: 'Limon', price: 7.21 },
      { name: 'Melon', price: 6.21 },
      { name: 'Cereza', price: 4.98 }
    ],

    frutaSeleccionada: {}
  }

  select = (frutaSeleccionada, event) => {
    this.setState({
      frutaSeleccionada
    })
  }

  render () {
    const { fruits, frutaSeleccionada } = this.state

    return (
      <ul>
        {fruits.map(fruit => (
          <li
            key={fruit.name}
            /* no se puede hacer directamente 
               onClick= {this.select(fruit)} , porque lo llamaria de inmediato y 
               crearia un bucle infinito
            */
            /* otra forma seria 
             onClick= {() => {
                this.select(fruit)   
             }}
            */
            onClick={this.select.bind(this, fruit)}
            style={{
              color: frutaSeleccionada.name === fruit.name
                ? 'red'
                : '#000'
            }}
          >
            { fruit.name } - $ { fruit.price }
          </li>
        ))}
      </ul>
    )
  }
}

export default App
```