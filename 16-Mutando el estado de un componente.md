# Mutando el estado de un componente con una funcion

El uso del this.setState en una clase se hace de forma asincrona por lo que verifica
cada componente revisando si algo cambio, por lo que esto podria traer ciertos problemas
inesperados si no se tiene en cuenta.

Una solucion es pasar por parametro al setState una funcion y que esta retorne el nuevo estado 

```jsx
add = () => {
    this.setState((prevState,props) => {
        if(state.click === 3){
            return null; // si se retorna null el estado no cambia
        }

        return {
            clicks: state.clicks + 1
        }
    })
}
```