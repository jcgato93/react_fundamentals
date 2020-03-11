# Hooks de terceros

Con el fin de la reutilizacion de codigo de funciones con hooks
se pueden implementar y crear Hooks.

## Instalar e implementar un Hook

1- instalar 

        $npm i use-debounce

2- En el ejemplo se utiliza un Hook que actualiza una propiedad despues del tiempo que se le pase por parametro

```jsx
import React, { useState, useEffect, useRef } from 'react'
import { useDebounce } from 'use-debounce'

const Header = () => {
  const styles = {
    background: 'linear-gradient(20deg, #6813cb, #2575fc)',
    textAlign: 'center',
    borderRadius: '0.2em',
    color: '#FFF',
    padding: '0.3em',
    margin: '0.3em',
    fontSize: '14px'
  }

  return (
    <header style={styles}>
      <h1>
        Hook useRef
        <span
          role='img'
          aria-label='hook emoji'
        >
          âš“
        </span> 
      </h1>
    </header>
  )
}

const App = () => {
  const [ name, setName ] = useState('')
  const [ search ] = useDebounce(name, 1000)
  const [ products, setProducts ] = useState([])

  useEffect(() => {
    fetch('https://universidad-react-api-test.luxfenix.now.sh/products?name=' + name)
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [ search ])

  const handleInput = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      <Header />
      <input
        type='text'
        onChange={handleInput}
      />
      <ul>
        {products.map(product => (
          <li key={product.id}>
            { product.name }
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
```