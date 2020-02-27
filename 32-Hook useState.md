# Hook useState

El useState permite darle la funcion de State a un componente de function().

Para utilizar useState se debe primero importar desde react.

Luego podemos utilizarlos de la siguiente manera 

```jsx
//  [nombre de la propiedad, metodo set]
const [ clicks, setClicks ] = useState(0)  // useState recibe el valor inicial del stado
```


Ejemplo: 

```jsx
import React, { Component, useState } from 'react'

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
        Hook useState
        <span
          role='img'
          aria-label='hook emoji'
        >
          ⚓
        </span> 
      </h1>
    </header>
  )
}

// =============== Usando una function ===================
const App = () => {
  const [ clicks, setClicks ] = useState(0)

  const addClicks = () => {
    setClicks(clicks + 1)
  }

  return (
    <div>
      <Header />
      <button onClick={addClicks}>
        Clicks ({ clicks })
      </button>
    </div>
  )
}

// =============== Usando una clase ===================
// class App extends Component {
//   state = {
//     clicks: 0
//   }

//   addClicks = () => {
//     this.setState(state => ({
//       clicks: state.clicks + 1
//     }))
//   }

//   render () {
//     const { clicks } = this.state
//     return (
//       <div>
//         <Header />
//         <button onClick={this.addClicks}>
//           Clicks ({ clicks })
//         </button>
//       </div>
//     )
//   }
// }

export default App
```

## useState con boolean

```jsx
import React, { useState } from 'react'

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
        Hook useState
        <span
          role='img'
          aria-label='hook emoji'
        >
          ⚓
        </span> 
      </h1>
    </header>
  )
}

const App = () => {
  const [ isActive, setActive ] = useState(false)

  const toggle = () => {
    setActive(!isActive)
  }

  return (
    <div>
      { isActive && <Header /> }
      <button onClick={toggle}>
        { isActive ? 'Desactivar' : 'Activar' }
      </button>
    </div>
  )
}

export default App
```

## useState con Objetos

```jsx
import React, { useState } from 'react'

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
        Hook useState
        <span
          role='img'
          aria-label='hook emoji'
        >
          ⚓
        </span> 
      </h1>
    </header>
  )
}

const App = () => {
  const [ state, setState ] = useState({
    clicks: 0,
    title: ''
  })

  const merge = (nextState) => {
    setState({
      ...state,
      ...nextState
    })
  }

  const addClicks = () => {
    merge({
      clicks: state.clicks + 1
    })
  }

  const handleInput = (e) => {
    const title = e.target.value

    merge({
      title
    })
  }

  return (
    <div>
      <Header />
      <input
        type="text"
        value={state.title}
        onChange={handleInput}  
      />
      <button onClick={addClicks}>
        Clicks ({ state.clicks })
      </button>
      <h3>{ state.title }</h3>
    </div>
  )
}

export default App
```