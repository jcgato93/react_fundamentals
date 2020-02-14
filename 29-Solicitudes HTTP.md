# Solicitudes HTTP

React unicamente se encarga de la visualizacion y manejo de las vistas
por lo que el manejo de peticiones HTTP se puede hacer utilizando 
metodos nativos de javascript tales como "fetch" o utilizar librerias de terceros 
como Axios.

## Ejemplo de peticion con Fetch

```jsx
import React, { Component } from 'react'

class App extends Component {
  state = {
    users: [],
    cargando: true
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ users, cargando: false }))
      .catch(error => {
        // Manejo del error
      })
  }

  render () {
    if (this.state.cargando) {
      return <h1>Cargando...</h1>
    }

    return (
      <div>
        <h1>Peticion HTTP</h1>
        <h2>{ this.state.text }</h2>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              { user.name }
              <a href={`http://${user.website}`}>
                Website
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
```

## Ejemplo peticiones asincronas

```jsx
import React, { Component } from 'react'

class App extends Component {
  state = {
    movie: {},
    isFetching: false 
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({ isFetching: true })

    const title = event.target[0].value
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=5c24385e'
    fetch(url + '&t=' + title)
      .then(res => res.json())
      .then(movie => this.setState({ movie, isFetching: false }))
  }

  render () {
    const { movie, isFetching } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder='Nombre de Pelicula'
          />
          <button>
            Buscar
          </button>
        </form>
        {isFetching && (
          <h2>Cargando...</h2>
        )}
        { movie.Title && !isFetching && (
          <div>
            <h1>{ movie.Title }</h1>
            <p>
              { movie.Plot }
            </p>
            <img
              src={ movie.Poster }
              alt='Poster'
              style={{
                width: '150px'
              }}  
            />
          </div>
        ) }
      </div>
    )
  }
}

export default App
```


## Integrar libreria Axios para hacer solicitudes HTTP

Ya que React no tiene un core para peticiones HTTP , Axios es una buena opcion
para cubrir esta necesidad ademas de que da soporte a viejos navegadores.

1. Intalar axios

            npm i axios


2. Implementar

```jsx
import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  state = {
    movie: {},
    isFetching: false 
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    this.setState({ isFetching: true })

    const title = event.target[0].value
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=5c24385e'

    axios.get(url, {
      params: {
        t: title
      }
    })
      .then(res => this.setState({
        movie: res.data,
        isFetching: false
    }))
  }

  render () {
    const { movie, isFetching } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder='Nombre de Pelicula'
          />
          <button>
            Buscar
          </button>
        </form>
        {isFetching && (
          <h2>Cargando...</h2>
        )}
        { movie.Title && !isFetching && (
          <div>
            <h1>{ movie.Title }</h1>
            <p>
              { movie.Plot }
            </p>
            <img
              src={ movie.Poster }
              alt='Poster'
              style={{
                width: '150px'
              }}  
            />
          </div>
        ) }
      </div>
    )
  }
}

export default App
```

## Usando Asyn & Await para solicitudes HTTP

```jsx
import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  state = {
    movie: {},
    isFetching: false 
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    this.setState({ isFetching: true })

    const title = event.target[0].value
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=5c24385e'

    const res = await fetch(url + '&t=' + title)
    const movie = await res.json()

    this.setState({
      movie,
      isFetching: false
    })
  }

  render () {
    const { movie, isFetching } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder='Nombre de Pelicula'
          />
          <button>
            Buscar
          </button>
        </form>
        {isFetching && (
          <h2>Cargando...</h2>
        )}
        { movie.Title && !isFetching && (
          <div>
            <h1>{ movie.Title }</h1>
            <p>
              { movie.Plot }
            </p>
            <img
              src={ movie.Poster }
              alt='Poster'
              style={{
                width: '150px'
              }}  
            />
          </div>
        ) }
      </div>
    )
  }
}

export default App
```