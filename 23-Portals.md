# Portals 

Los portals fueron introducidos en la version 16 y nos permiten crear
componentes fuera del nodo raiz de la aplicacion.

Comunmente se utiliza para crear modales

1. Agregar un "div" con id en el index.html

```html
    <div id="root"></div>
    <!-- Modal -->
    <div id="modal-root"></div>
```

2. Crear el portal

```jsx
class PortalModal extends React.Component {
  render() {
    return ReactDOM.createPortal((
      <div>
        { this.props.children }
      </div>
    ), document.getElementById('modal-root'))
  }
}

class App  extends React.Component {
  render() {
    return (
      <div>
        <PortalModal>
          <h1>
            Hola desde un portal modal 😁
          </h1>
        </PortalModal>
      </div>
    )
  }
}

export default App;
```
