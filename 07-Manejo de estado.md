# Manejo de estado

Hasta esta clase todos los componentes han obtenido su información a través de props que vienen desde afuera (otros componentes) pero hay otra manera en la que los componentes pueden producir su propia información y guardarla para ser consumida o pasada a otros componentes a través de sus props. La clave está en que la información del state a otros componentes pasará en una sola dirección y podrá ser consumida pero no modificada.

- Para guardar la información en el estado se usa una función de la clase component llamada setState a la cual se le debe pasar un objeto con la información que se quiere guardar.

- Aunque no se ve, la información está siendo guardada en dos sitios. Cada input guarda su propio valor y al tiempo la está guardando en setState, lo cual no es ideal. Para solucionarlo hay que modificar los inputs de un estado de no controlados a controlados.

para controlar que la informacion no este duplicada podemos hacer lo siguiente
cambiado el value del input con el valor que esta en el state

```javascript

    // se debe inicializar el estado
    state = {};

     handleChange = e =>{
         this.setState({
             [e.target.name]: e.target.value
         })
     }

      <div className="form-group">
        <label>First Name</label>
        <input
            onChange={this.handleChange}
            className="form-control"
            type="text"
            name="firstName"
            value={this.state.firstName}
        />
        </div>
```