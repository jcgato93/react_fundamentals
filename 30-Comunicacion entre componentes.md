# Comunicación entre componentes


## Comunicación con Métodos de instancia (Padrea a Hijo)

```jsx
import React, { Component } from 'react'

const Header = () => {
  const subtitleStyles = {
    fontWeight: 'bold'
  }

  const headerStyles  = {
    margin: '0.6em',
    borderRadius: '0.3em',
    border: '1px solid #d2d2d2',
    padding: '2em 0.4em',
    fontFamily: 'monospace',
    fontSize: '17px'
  }

  return (
    <header style={headerStyles}>
      <div>
        Comunicacion entre componentes
      </div>
      <div style={subtitleStyles}>
        Metodos de Instancia 
        <span role='img' aria-label='flame' >
          🔥
        </span>
      </div>
    </header>
  )
}

class Hijo extends Component {
  state = {
    message: '****'
  }

  dispatchAlert = (e, message = 'Alert desde el Hijo') => {
    alert(message)
    this.setState({ message })
  }

  render () {
    return (
      <div>
        <h2>{ this.state.message }</h2>
        <button onClick={this.dispatchAlert}>
          Hijo
        </button>
      </div>
    )
  }
}

class App extends Component {
  hijo = React.createRef()

  handleClick = () => {
    this.hijo.current.dispatchAlert(null, 'Hola desde el Padre')
  }

  render () {
    return (
      <div>
        <Header />
        <Hijo ref={this.hijo} />
        <button onClick={this.handleClick}>
          Padre
        </button>
      </div>
    )
  }
}

export default App
```

## Comunicación Event Bubbling (Hijo a padre)

- No recomendado por ser un antipatron

```jsx
import React, { Component } from 'react'

const Header = () => {
  const subtitleStyles = {
    fontWeight: 'bold'
  }

  const headerStyles  = {
    margin: '0.6em',
    borderRadius: '0.3em',
    border: '1px solid #d2d2d2',
    padding: '2em 0.4em',
    fontFamily: 'monospace',
    fontSize: '17px',
    textAlign: 'center'
  }

  return (
    <header style={headerStyles}>
      <div>
        ( Hijo a Padre )
      </div>
      <div style={subtitleStyles}>
        Event Bubbling
        <span role='img' aria-label='flame' >
          🔥
        </span>
      </div>
    </header>
  )
}

const boxStyles = {
  padding: '0.5em',
  margin: ' 0.5em',
  border: '1px solid gray',
  borderRadius: '0.3em',
  textAlign: 'center'
}

class Hijo extends Component {
  handleClick = (e) => {
    // e.stopPropagation()
    e.saludo = 'Hola Mensaje desde el Hijo'
    console.log('Click en <Hijo />')
  }
  
  render () {
    return (
      <div
        style={boxStyles}
        onClick={this.handleClick}  
      >
        <p>Hijo</p>
      </div>
    )
  }
}

class App extends Component {
  handleClick = (e) => {
    console.log('Click en <Padre />   ', e.saludo)
  }

  render () {
    return (
      <div
        style={boxStyles}
        onClick={this.handleClick}  
      >
        <Header />
        <Hijo />
      </div>
    )
  }
}

export default App
```


## Comunicación Parent Component (Hermanos)

```jsx
import React, { Component } from 'react'

const Header = () => {
  const subtitleStyles = {
    fontWeight: 'bold'
  }

  const headerStyles  = {
    margin: '0.6em',
    borderRadius: '0.3em',
    border: '1px solid #d2d2d2',
    padding: '2em 0.4em',
    fontFamily: 'monospace',
    fontSize: '17px',
    textAlign: 'center'
  }

  return (
    <header style={headerStyles}>
      <div>
        ( Hermanos )
      </div>
      <div style={subtitleStyles}>
        Parent Component
        <span role='img' aria-label='flame' >
          🔥
        </span>
      </div>
    </header>
  )
}

const boxStyles = {
  padding: '0.5em',
  margin: ' 0.5em',
  border: '1px solid gray',
  borderRadius: '0.3em',
  textAlign: 'center'
}

const blueStyles = {
  ...boxStyles,
  border: '1px solid blue',
}

const redStyles = {
  ...boxStyles,
  border: '1px solid red',
}

class ComponentA extends Component {
  render () {
    const { num } = this.props
    return (
      <div style={blueStyles}>
        <button onClick={this.props.onAdd}>  
          Component A ( {num} )
        </button>
      </div>
    )
  }
}


class ComponentB extends Component {
  render () {
    const { num } = this.props
    return (
      <div style={redStyles}>
        <button onClick={this.props.onAdd}>  
          Component B ( {num} )
        </button>
      </div>
    )
  }
}

class App extends Component {
  state = {
    countA: 0,
    countB: 0
  }

  handleAddA = () => {
    this.setState(state => ({
      countA: state.countA + 1
    }))
  }

  handleAddB = () => {
    this.setState(state => ({
      countB: state.countB + 2
    }))
  }

  render () {
    const { countA, countB } = this.state

    return (
      <div style={boxStyles}>
        <Header />
        <ComponentA
          num={countA}
          onAdd={this.handleAddB}
        />
        <ComponentB
          num={countB}
          onAdd={this.handleAddA}
        />
      </div>
    )
  }
}

export default App
```

## Comunicación con API Context (Cualquier dirección)

Este fue liberado en la version 16 de React y es muy util para pasar 
información entre componentes sin importar el nivel de anidación que estos tengan

```jsx
import React, { Component } from 'react'

// { Provider, Consumer }
const { Provider, Consumer } = React.createContext()

const Header = () => {
  const subtitleStyles = {
    fontWeight: 'bold'
  }

  const headerStyles  = {
    margin: '0.6em',
    borderRadius: '0.3em',
    border: '1px solid #d2d2d2',
    padding: '2em 0.4em',
    fontFamily: 'monospace',
    fontSize: '17px',
    textAlign: 'center'
  }

  return (
    <header style={headerStyles}>
      <div>
        ( Cualquiera )
      </div>
      <div style={subtitleStyles}>
        React API Context
        <span role='img' aria-label='flame' >
          🔥
        </span>
      </div>
    </header>
  )
}

const boxStyles = {
  padding: '0.5em',
  margin: ' 0.5em',
  border: '1px solid gray',
  borderRadius: '0.3em',
  textAlign: 'center'
}

const Nieto = () => (
  <Consumer>
    {({ addClicks, clicks }) => (
      <div style={boxStyles}>
        <p>Nieto</p>
        <button onClick={addClicks}>
          Disparar ( { clicks } )
        </button>
      </div>
    )}
  </Consumer>
)

class Hijo extends Component {
  render () {
    return (
      <div style={boxStyles}>
        <p>Hijo</p>
        <Nieto />
      </div>
    )
  }
}

class App extends Component {
  state = {
    clicks: 0
  }

  addClicks = () => {
    this.setState(state => ({
      clicks: state.clicks + 1
    }))
  }

  render () {
    return (
      <Provider value={{
        clicks: this.state.clicks,
        addClicks: this.addClicks
      }}>
        <div style={boxStyles}>
          <Header />
          <Hijo />
        </div>
      </Provider>
    )
  }
}

export default App
```