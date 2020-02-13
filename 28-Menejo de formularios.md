# Manejo de formularios

## Inputs ( No controlados) con refs

```jsx
import React, { Component } from 'react'

const Unicorn = () => (
  <span role='img' aria-label='unicornio'>
    🦄
  </span>
)

class InpuntNoContolado extends Component {
  nombre = React.createRef()
  email = React.createRef()

  handleClick = () => {
    const nombre = this.nombre.current.value
    const email = this.email.current.value

    // Manejo de datos
    this.props.onSend({ nombre, email })
  }

  render () {
    return (
      <div>
        <input
          type="text"
          ref={this.nombre}
          placeholder='Nombre'
        />
        <input
          type="text"
          ref={this.email}
          placeholder='Email'
        />
        <button onClick={this.handleClick}>
          Enviar
        </button>
      </div>
    )
  }
}

class App extends Component {

  send = (data) => {
    console.log(data)
  }

  render () {
    return (
      <div>
        <h1>
          Inputs No controlados Refs <Unicorn />
        </h1>
        <InpuntNoContolado
          onSend={this.send}
        />
      </div>
    )
  }
}

export default App
```



## Inputs ( No controlados) con formularios

```jsx
import React, { Component } from 'react'

const Unicorn = () => (
  <span role='img' aria-label='unicornio'>
    🦄
  </span>
)

class InpuntNoContolado extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    const nombre = event.target[0].value
    const email = event.target[1].value

    // Manejo de datos
    this.props.onSend({ nombre, email })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder='Nombre'
        />
        <input
          type="text"
          placeholder='Email'
        />
        <button>
          Enviar
        </button>
      </form>
    )
  }
}

class App extends Component {

  send = (data) => {
    console.log(data)
  }

  render () {
    return (
      <div>
        <h1>
          Inputs No controlados Formularios <Unicorn />
        </h1>
        <InpuntNoContolado
          onSend={this.send}
        />
      </div>
    )
  }
}

export default App
```


## Manejo de Inputs controlados 

A diferencia de los inputs no controlados, con los controlados 
se puede evaluar el valor y propiedades de los elementos a medida que cambian o se dispara 
algun evento.

Basicamente un input controlado es aquel que tiene el valor igual al que se encuentra en el state

```jsx
import React, { Component } from 'react'

const Unicorn = () => (
  <span role='img' aria-label='unicornio'>
    🦄
  </span>
)

class InputControlado extends Component {
  state = {
    text: '',
    color: '#E8E8E8'
  }

  actualizar = (event) => {
    const text = event.target.value
    let color = 'green'

    if (text.trim() === '') {
      color = '#E8E8E8'
    }

    if (text.trim() !== '' && text.length < 5) {
      color = 'red'
    }

    this.setState({ text, color })
  }

  render () {
    const styles = {
      border: `1px solid ${this.state.color}`,
      padding: '0.3em 0.6em',
      outline: 'none'
    }
    return (
      <input
        type='text'
        value={this.state.text}
        onChange={this.actualizar}
        style={styles}
      />
    )
  }
}

class App extends Component {
  render () {
    return (
      <div>
        <h1>Input Controlado <Unicorn /></h1>
        <InputControlado />
      </div>
    )
  }
}

export default App
```



## Propagación de datos con inputs controlados

Propagar los datos sirve para que un componente sea reutilizable ya que el componente
padre podra estar al tanto de los datos que se propaguen.

```jsx
class InputControlado extends Component {
  
  const text = event.target.value

  actualizar = (event) => {   
    // Propagando datos al padre
    this.props.onChange(this.props.name, text)
  }

  render () {
   
    return (
      <input
        type='text'
        value={this.state.text}
        onChange={this.actualizar}       
        placeholder={this.props.placeholder}
      />
    )
  }
}

class App extends Component {
  state = {
    name: '',
    email: ''
  }

  actualizar = (name, text) => {
    this.setState({
      [name]: text
    })
  }
  
  render () {
    return (
      <div>
        <h1>Input Controlado <Unicorn /></h1>
        <InputControlado
          onChange={this.actualizar}
          placeholder='Nombre Completo'
          name='name'
        />
        <InputControlado
          onChange={this.actualizar}
          placeholder='Tu Email'
          name='email'
        />
        <h2>
          Nombre: { this.state.name }
        </h2>
        <h2>
          Email: { this.state.email }
        </h2>
      </div>
    )
  }
}

export default App

```


## Utilizando el atributo "for" en formularios

El atributo "for" sirve para enlazar un elemento a otro , asi cuando se seleccione el que contiene
el "for" el elemento al que esta referenciando tendra el foco.

"for" es una palabra reservada en javascript por lo que para utilizar la misma funcionalidad , React
brinda el atributo "htmlFor".

```jsx
import React, { Component } from 'react'

const Unicorn = () => (
  <span role='img' aria-label='unicornio'>
    🦄
  </span>
)

class InpuntNoContolado extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    const nombre = event.target[0].value
    const email = event.target[1].value

    // Manejo de datos
    this.props.onSend({ nombre, email })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor='name'>Nombre:</label>
          <input
            type="text"
            placeholder='Nombre'
            id='name'
          />
        </p>
        <p>
          <label>Email:</label>
          <input
            type="text"
            placeholder='Email'
          />
        </p>
        <button>
          Enviar
        </button>
      </form>
    )
  }
}

class App extends Component {

  send = (data) => {
    console.log(data)
  }

  render () {
    return (
      <div>
        <h1>
          Atributo ref <Unicorn />
        </h1>
        <InpuntNoContolado
          onSend={this.send}
        />
      </div>
    )
  }
}

export default App
```

## Ejemplo de formulario con opciones de Selección

```jsx
import React, { Component } from 'react'

const Unicorn = () => (
  <span role='img' aria-label='unicornio'>
    🦄
  </span>
)

class App extends Component {
  state = {
    tech: 'Vue'
  }

  handleChange = (event) => {
    this.setState({
      tech: event.target.value
    })
  }

  render () {
    return (
      <div>
        <h1>
          Etiqueta Select <Unicorn />
          { this.state.tech }
        </h1>
        <form>
          <select value={this.state.tech} onChange={this.handleChange}>
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Vanilla">Vanilla</option>
          </select>
        </form>
      </div>
    )
  }
}

export default App
```

## Ejemplo de formulario con opciones de Selección Multiple

```jsx
import React, { Component } from 'react'

const Unicorn = () => (
  <span role='img' aria-label='unicornio'>
    🦄
  </span>
)

class App extends Component {
  state = {
    techs: [ 'Vue' ]
  }

  handleChange = (event) => {
    const techs = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    )

    this.setState({ techs })
  }

  render () {
    return (
      <div>
        <h1>
          Etiqueta Select <Unicorn />
        </h1>
        <form>
          <select
            value={this.state.techs}
            onChange={this.handleChange}
            multiple
          >
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Vanilla">Vanilla</option>
          </select>
        </form>
        <ul>
          {this.state.techs.map(tech => (
            <li key={tech}>
              { tech }
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
```


## Ejemplo de Input Checkbox

```jsx
import React, { Component } from 'react'

const Unicorn = () => (
  <span role='img' aria-label='unicornio'>
    🦄
  </span>
)

class App extends Component {
  state = {
    active: true
  }

  handleChange = (event) => {
    this.setState({
      active: event.target.checked
    })
  }

  render () {
    const { active } = this.state
    return (
      <div>
        <form>
          <input
            type="checkbox"
            checked={active}
            onChange={this.handleChange}  
          />
        </form>
        {active && (
          <h1>
            Etiqueta Checkbox <Unicorn />
          </h1>
        )}
      </div>
    )
  }
}

export default App
```