import logo from './logo.svg';
import './App.css';
import './Saludo'

import Tabla from './Tabla';
import Bienvenido from './Bienvenido';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Bienvenido />
        <Tabla />
        {/* <Saludo />
        <Andrea /> */}

      </header>
    </div>
  );
}

export default App;
// una tabla 2x2 con borde
// Crear un componente que escriba el mensaje bienvenido al incos

