# Style en JSX

Para añadir los styles dentro del JSX , se hace de la siguiente manera 

```jsx
  render () {
    return (
      <div style={{
        border: '1px solid black'
      }}>
        ...
      </div>
    )
  }
}
```

o tener los styles como un objeto aparte y pasarlo por parametro

```jsx
  render () {
    const styles = {
      border: '1px solid black'
    }

    return (
      <div style={ styles }>
        ...
      </div>
    )
  }
}
```

## Propiedades de styles separadas por dash

javascript no reconoce estas propiedades por lo que el equipo de react recomiendo utilizar camelCase

Ejemplo:

```jsx
  render () {
    const styles = {
      border: '1px solid black'
      //margin-bottom
      marginBottom: '1em'
    }

    return (
      <div style={ styles }>
        ...
      </div>
    )
  }
}
```

## Styles dinamicos

```jsx
const styles = {
      border: '1px solid black',
      marginBottom: '1em',
      borderRadius: '0.5em',
      padding: '1em',
      background: this.state.cantidad > 0 ? 'green' : '#FFF',
      color: this.state.cantidad > 0 ? '#FFF' : '#000'
    }
```

## Aplicar Styles con clases CSS en componentes de React

La palabra "class" no se reconoce dentro de los componentes de React
por lo que se debe utilizar "className". De este modo se pueden
utilizar clases desde un archivo .css

```jsx
import './TarjetaFruta.css';

...

 render () {
    const hasItems = this.state.cantidad > 0 ;
    const classes = hasItems ? 'TarjetaFruta-activa' : 'TarjetaFruta';

    return (
      <div className={classes}>
      ...
      </div>
```