# Crear eventos personalizados

El crear eventos personalizados servira para comunicar informacion desde
un componente hijo hacia un componente padre

```jsx
import React, {Component} from 'react';

class Child extends Component {
 handleClick = () => {
     this.props.onSaluda('Data from Child');
 }
 
 render() {
    return (
        <div>
            <h2>Hijo</h2>
            <button onClick={this.handleClick}>Saluda</button>
        </div>
    )
 }
}


class App  extends Component {

    handleSaluda = (data) => {
        alert(data);
    }

    render() {
        return (
            <div>
                <Child
                onSaluda={this.handleSaluda}
                />
            </div>
        )
    }
}
```
