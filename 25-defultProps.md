# DefaultProps

Declarar propiedades con un valor por defecto

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

    static defaultProps = {
        name: 'default value'
    }

    render () {

        const { name, bio, email } = this.props

        return (
            <div>
                <h1>{name}</h1>
                <p>
                   {bio}
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
                    bio='Im a software developer'
                    email='my-email@gmail.com'
                />
            </div>
        )
    }
}
```