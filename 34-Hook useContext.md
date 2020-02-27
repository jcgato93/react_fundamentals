# Hook useContext

Acepta un objeto de contexto (el valor devuelto de React.createContext) y devuelve el valor de contexto actual. El valor actual del contexto es determinado por la propiedad value del <MyContext.Provider> ascendentemente más cercano en el árbol al componente que hace la llamada.

Cuando el <MyContext.Provider> ascendentemente más cercano en el árbol se actualiza, el Hook activa una renderización con el value más reciente del contexto pasado a ese proveedor MyContext. Incluso sí un ancestro utiliza React.memo o shouldComponentUpdate, una nueva renderización aún pasará empezando con el componente en si mismo usando useContext.

No olvides que el argumento enviado a useContext debe ser el objeto del contexto en sí mismo:

- Correcto: useContext(MyContext)
- Incorrecto: useContext(MyContext.Consumer)
- Incorrecto: useContext(MyContext.Provider)

Un componente que llama a useContext siempre se volverá a renderizar cuando el valor del contexto cambie. Si volver a renderizar el componente es costoso, puedes optimizar esto usando memorización.

```jsx
import React, { useState, useContext } from 'react'

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
        Hook useContext
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

// { Provider, Consumer }
const MyContext = React.createContext()

// Consumir context de forma tradicional
// const Nieto = () => (
//   <MyContext.Consumer>
//     {(context) => (
//       <div>
//         <p>Nieto {context.num}</p>
//         <button onClick={context.addNum}>
//           Nieto Dispatcher
//         </button>
//       </div>
//     )}
//   </MyContext.Consumer>
// )

const Nieto = () => {
  const { num, addNum } = useContext(MyContext)
  
  return (
    <div>
      <p>Nieto {num}</p>
      <button onClick={addNum}>
        Nieto Dispatcher
      </button>
    </div>
  )
}


const Hijo = () => (
  <div>
    <p>Hijo</p>
    <Nieto />
  </div>
)

const App = () => {
  const [ num, setNum ] = useState(0)

  const addNum = () => setNum(num + 1)

  return (
    <MyContext.Provider value={{
      num,
      addNum
    }}>
      <div>
        <Header />
        <button onClick={addNum}>
          App ( {num} )
        </button>
        <Hijo />
      </div>
    </MyContext.Provider>
  )
}

export default App
```