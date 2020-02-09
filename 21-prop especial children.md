# Prop especial children

La propiedad especial children hace referencia a los elementos que se pasen en medio 
de las etiquetas de un componente.

```jsx
import React from 'react';

const Title = (props) => {

    const styles = {
        background: props.uiColor
    }

    return (
        <h1 style={styles}>
            { props.children }
        </h1>
    )
}


class App extends React.Component{

    state = {
        uiColor: 'purple'
    }

    render() {
        return (
            <div>
                <Title 
                    uiColor={ this.state.uiColor }
                >
                    <div>Super <em>Ninja</em></div>
                </Title>
            </div>
        )
    }
}
```