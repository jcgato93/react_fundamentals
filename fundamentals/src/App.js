import React from 'react';
import ReactDOM from 'react-dom';
import TarjetaFruta  from "./components/TarjetaFruta";
import Graficas from './components/charts';

// const App = () => (
//     <div>
//       <TarjetaFruta name={'Sandia'} price={5.00} />
//       <TarjetaFruta name={'Naranja'} price={1.50} />
//       <TarjetaFruta name='Kiwi' price={3.30} />
//     </div>
// )

class PortalModal extends React.Component {
  render() {
    return ReactDOM.createPortal((
      <div>
        { this.props.children }
      </div>
    ), document.getElementById('modal-root'))
  }
}

class App  extends React.Component {
  render() {
    return (
      <div>
        {/* <PortalModal>
          <h1>
            Hola desde un portal modal 😃
          </h1>
        </PortalModal> */}
        <Graficas />
      </div>
    )
  }
}

export default App;
  