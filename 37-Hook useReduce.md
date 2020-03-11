# Hook useReduce

Como buna practica se recomienda utilizar la forma

```jsx
const [couns, setCount] useState(1)
```
Esto por cada una de las propiedades , pero en ciertos casos de componentes principales 
como el que contiene el state de toda la aplicacion les resultaria más facil, para esto
react utiliza el useReduce

```jsx
import React, { useReducer } from 'react'

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
        Hook useReducer
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

// dispatch({ type: 'INCREMENT', title: 'algo' })
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }

    case 'SET_TITLE':
      return {
        ...state,
        title: action.title
      }

    default:
      return state
  }
}

const initialState = {
  count: 0,
  title: 'Hola'
}

const App = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  const increment = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const decrement = () => {
    dispatch({ type: 'DECREMENT' })
  }

  const handleTitle = (e) => {
    dispatch({
      type: 'SET_TITLE',
      title: e.target.value
    })
  }

  return (
    <div>
      <Header />
      <input
        type='text'
        onChange={handleTitle}
        value={state.title}
      />
      <button onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
      <h1>
        { state.count } - { state.title }
      </h1>
    </div>
  )
}

export default Apps
```