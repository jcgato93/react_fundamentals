# Hook useEffect

useEffect permite utilizar los efectos de ciclo de vida en una function
tales como componentDidmount, componentDidUpdate, componentWillUnmount

Ejemplo Basico:

```jsx
import React, { useState, useEffect } from 'react'

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
        Hook useEffect
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
  const [ clicks, setClicks ] = useState(0)

  useEffect(() => {
    // componentDidMount
    // componentDidUpdate
    console.log('Dentro de useEffect', clicks)
    console.log('%c------------------------', 'color: green')
    
    return () => {
      // componentWillUnmount
      console.log('Return de useEffect', clicks)
    }
  })

  const add = () => setClicks(clicks + 1)

  return (  
    <div>
      <Header />
      <button onClick={add}>
        Clicks ({ clicks })
      </button>
    </div>
  )
}

export default App
```


Ejemplo borrar escuchadores de Eventos:

```jsx
import React, { useState, useEffect } from 'react'

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
        Hook useEffect
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
  const [ mouseX, setMouseX ] = useState(0)
  const [ mouseY, setMouseY ] = useState(0)

  const handleMove = (e) => {
    setMouseX(e.clientX)
    setMouseY(e.clientY)
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMove)

    return () => {
      window.removeEventListener('mousemove', handleMove)
    }
  })

  return (  
    <div>
      <Header />
      <h1>
        X: { mouseX } Y: { mouseY }
      </h1>
    </div>
  )
}

export default App
```

## Controlar la ejecucion de useEffect

Cuando se debe de ejecutar y cuando no.
El useEffect recibe como segundo parametro un array de las propiedades que 
disparan la ejecucion del useEffect, es decir que si la propiedad que este dentro del array
llega a cambiar este disparara el useEffect. Si se pasa el array vacio no se dispara el useEffect

```jsx
import React, { useState, useEffect } from 'react'

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
        Hook useEffect
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
  const [ num, setNum ] = useState(0)
  const [ emoji, setEmoji ] = useState('🦁')

  useEffect(() => {
    alert('useEffect 🎇')
  }, [ emoji ])

  const addNum = () => setNum(num + 1)
  
  const toggleEmoji = () => {
    const nextEmoji = emoji === '🦁' ? '🙊' : '🦁'
    setEmoji(nextEmoji)
  }

  return (  
    <div>
      <Header />
      <button onClick={addNum}>
        ADD ( { num } )
      </button>
      <button onClick={toggleEmoji}>
        Alternar Emoji
      </button>
      <h1>
        { emoji }
      </h1>
    </div>
  )
}

export default App
```

## Solicitudes HTTP con useEffect

En el caso de que se ingrese una solicitud HTTP que cambia el estado 
de una propiedad , se debe tener en cuenta que si no se controla causara un bucle 
infinito ya que el cambio de dicha propiedad volvera a disparar el useEffect realizando
la peticion HTTP nuevamente

```jsx
import React, { useState, useEffect } from 'react'

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
        Hook useEffect
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
  const [ users, setUsers ] = useState([])
  const [ isFetching, setFetching ] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        setUsers(users)
        setFetching(false)
      })
  }, [])

  return (  
    <div>
      <Header />
      { isFetching && <h1>Cargando...</h1> }
      <ul>
        { users.map(user => (
          <li key={user.id}>
            { user.name }
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
```