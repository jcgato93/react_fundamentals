# Uso de las ref

React tiene una utilidad para seleccionar (tener la referencia) elementos del HTML sin 
utilizar metodos como "document.getElementById()"

```jsx
import React, { Component } from 'react'

class Entrada extends Component {
  // Crear referencia
  entrada = React.createRef()

  componentDidMount () {
    this.focus()
  }

  focus = () => {
    // Con la referencia se puede acceder a los metodos nativos del objeto
    this.entrada.current.focus()
  }

  blur = () => {
    // Con la referencia se puede acceder a los metodos nativos del objeto
    this.entrada.current.blur()
  }

  render () {
    return (
      <div>
        <h1>React refs 🦄</h1>
        <input
          type="text"
          // asignar referencia
          ref={this.entrada}
        />
        <button onClick={this.focus}>
          Focus
        </button>
        <button onClick={this.blur}>
          Blur
        </button>
      </div>
    )
  }
}

class App extends Component {

  render () {

    return (
      <div>
        <Entrada />
      </div>
    )
  }
}

export default App
```


## Integrar librerias de terceros usando las refs de React

1. Instalar libreria , en este caso chart.js

        $ npm i chart.js

2. Implementar 

```jsx
import React, { Component } from 'react'
import Chart from 'chart.js'

class Graficas extends Component {
  // Crear referencia
  grafica = React.createRef()

  componentDidMount () {
    const ctx = this.grafica.current.getContext('2d')
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [2, 10, 12, 6, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
    })
  }

  render () {
    return (
      <div>
        <canvas
          // Asignar la referencia
          ref={this.grafica}
          width='400'
          height='400'
        ></canvas>
      </div>
    )
  }
}

class App extends Component {

  render () {

    return (
      <div>
        <Graficas />
      </div>
    )
  }
}

export default App
```

