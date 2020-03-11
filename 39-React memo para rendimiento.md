# React memo para rendimiento

React.memo() sirve para indicar que un elemento no se debe volver a renderizar 
si este no cambio

Ejemplo: Se tiene dos componentes hermanos que se le pasan las props, pero que en ocasiones 
estas props solo cambian para uno de los componentes y no para el otro, React.memo evita 
que se renderice nuevamente el componente en el cual no cambiaron las props

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
        React.memo
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

// React.memo() HOC
const Counter = React.memo(({ count }) => {
  console.log('%cRender <Counter />', 'color: blue')

  return (
    <h1>
      { count }
    </h1>
  )
})

const Title = React.memo(({ text }) => {
  console.log('%cRender <Title />', 'color: orangered')

  return (
    <h1>
      { text }
    </h1>
  )
})

const App = () => {
  const [ title, setTitle ] = useState('')
  const [ count, setCount ] = useState(0)
  
  const handleInput = (e) => {
    setTitle(e.target.value)
  }

  const handleAdd = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <Header />
      <input
        type='text'
        onChange={handleInput}
      />
      <button onClick={handleAdd}>
        Add
      </button>
      <Counter count={count} />
      <Title text={title} />
    </div>
  )
}

export default App
```