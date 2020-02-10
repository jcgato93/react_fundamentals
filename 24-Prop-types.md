# Controlar datos de entrada con prop-types

Los props que normalmente se utilizan son un objeto plano y pueden traer 
complicaciones cuando pasamos props diferentes a las que espera un componente

Con props-type podemos validar las variables que se pasan a los componentes asi
como validar el tipo de dato que esperan

1. Instalar el paquete con npm

        $ npm i prop-types

2. Implementar

```jsx
import React from 'react';
import PropTypes from 'prop-types'


class Profile extends React.Component {
    
    // see more https://www.npmjs.com/package/prop-types
    static propTypes = {
        name: PropTypes.string.isRequired,
        bio: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number
    }

    render () {

        const { name, bio, email } = this.props

        return (
            <div>
                <h1>Nombre</h1>
                <p>
                   .. bio 
                </p>
                <a href={`mailto:${email}`}>
                    {email}
                </a>
            </div>
        )
    }
}

class App extends React.Component{
    render() {
        return (
            <div>
                <Profile 
                    name= 'Juan'
                    bio='Im a software developer'
                    email='my-email@gmail.com'
                />
            </div>
        )
    }
}
```