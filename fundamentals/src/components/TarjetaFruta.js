import React from 'react';

import './TarjetaFruta.css';

class TarjetaFruta extends React.Component {
  constructor () {
    super()

    // nombre de los metodos para luego hacer biding con la clase
    // const METHODS = [
    //   'agregar',
    //   'quitar',
    //   'limpiar'
    // ]

    // hacer binding para que this se refiera a la clase
    // METHODS.forEach((method) => {
    //   this[method] = this[method].bind(this)
    // })

    this.state = {
      cantidad: 0
    }
  }

  agregar = () => {
    this.setState({
      cantidad: this.state.cantidad + 1
    })
  }

  quitar = () => {
    this.setState({
      cantidad: this.state.cantidad - 1
    })
  }

  limpiar = () => {
    this.setState({
      cantidad: 0
    })
  }

  render () {
    const hasItems = this.state.cantidad > 0 ;
    const classes = hasItems ? 'TarjetaFruta-activa' : 'TarjetaFruta';

    return (
      <div className={classes}>
        <h3>{ this.props.name }</h3>
        <div>Cantidad: { this.state.cantidad }</div>
        <button onClick={this.agregar} > + </button>
        <button onClick={this.quitar} > - </button>
        <button onClick={this.limpiar} > Limpiar</button>        
        <hr/>
        <p>$ { this.props.price }</p>
        <p>
          Total : ${ this.props.price * this.state.cantidad }
        </p>
      </div>
    )
  }
}

export default TarjetaFruta;