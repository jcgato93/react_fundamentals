# Renderizados condicionales

Se utiliza cuando queremos renderizar cierto fragmento de codigo segun 
una evaluacion condicional

- Utilizando if
```jsx
const Saludo = (props) => {

    if (props.saluda){
        return (
            <h1>Hello !</h1>
        )
    }

    return (
        <h1>Sorry, no hay saludo</h1>
    )

}
```

- condicional ternario
```jsx
const Saludo = (props) => {

   return (
       <div>
        { props.saluda ? ( <h1>saludo</h1> ) : ( <h1>no hay saludo</h1> )}
       </div>
   )

}
```

- con el operador &&

```jsx
const Saludo = (props) => {

   return (
       <div>
        { /* si saluda es true , renderiza lo siguiente*/}
        { props.saluda &&  <h1>saludo</h1> }
       </div>
   )

}
```