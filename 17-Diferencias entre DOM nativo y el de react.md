# Diferencias entre DOM nativo y el de react

1. Los eventos como "onclick" en HTML se escriben en minusculas , en react 
es lowerCamelCase "onClick"

2- En HTML las funciones se pasan como string y en react debe ser una funcion evaluada entre llaves

```jsx
// HTML
<button onclick="myFunction()"/>

// ReactJs
<button onClick={myFunction()}/>
```

3- En react para prevenir el comportamiento natural de un evento

```jsx
handler = (event) => {
    event.preventDefault()
}
```

4- En React los eventos no son los navitos del navegador ya que estos pueden variar segun el navegador
por lo que react pasa uno sintetico ya estandarizado

```jsx
handler = (event) => {
    console.log(event); // event sintetico

    console.log(event.nativeEvent) // event nativo
}
```