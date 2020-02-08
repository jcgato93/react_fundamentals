# Inyectando HTML en marcado de componente con React

```jsx
class App extends Component {

    state = {
        marcado: `
        <h1>Inyectando HTML con React</h1>        
        `;
    }

    render() {
        return (
            <div>
                <div
                    dangerouslySetInnerHTML={{
                        __html: this.state.marcado
                    }}
                ></div>
            </div>
        )
    }
}

```