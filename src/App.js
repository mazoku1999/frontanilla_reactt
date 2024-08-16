// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


// import Tabla from './Tabla';
// import Bienvenido from './Bienvenido';
// import Saludo2 from './Saludo2';
// import Saludo from './Saludo';

function Cuadrado() {
  const [texto, setTexto] = useState('Default');
  const [cambio, setCambio] = useState(false);
  function cambiarTexto() {
    setTexto(cambio ? 'Default' : 'Nuevo mensaje');
    // switch (cambio) {
    //   case true:
    //     setTexto('Default')
    //     break;

    //   case false:
    //     setTexto('Nuevo mensaje');
    //   default:
    //     break;
    // }
    // if (!cambio) {
    //   setTexto("Nuevo mensaje");
    // } else {
    //   setTexto('Default');
    // }
    setCambio(!cambio);
  }

  return (
    <div>
      <h1>
        {texto}
      </h1>
      <button onClick={cambiarTexto}>Cambiar texto</button>
    </div>
  );

}

function Listas() {
  const [t1, setTexto1] = useState('');
  const [t2, setTexto2] = useState('');
  const [t3, setTexto3] = useState('');


  const [obj, setObj] = useState({
    nombre: '',
    apellido: '',
    edad: '',
  })

  function cambiarObj() {
    setObj({
      nombre: 'Uno',
      apellido: 'Dos',
      edad: 'Tres',
    });
  }

  function cambiarTexto() {
    setTexto1(obj.nombre);
    setTexto2(obj.apellido);
    setTexto3(obj.edad);
  }

  return (
    <div>
      <ul>
        <li>
          {t1}
        </li>
        <li>
          {t2}
        </li>
        <li>
          {t3}
        </li>
      </ul>
      <br />
      <div>
        <input value={obj.nombre} />
        <input value={obj.apellido} />
        <input value={obj.edad} />
      </div>
      <br />
      <button onClick={cambiarObj}>Boton 1</button>
      <button onClick={cambiarTexto}>Boton 2</button>
    </div>

  );
  // ul, li
}

function Listas2() {
  const [obj, setTexto1] = useState({
    nombre: 'Juan',
    apellido: 'Marquez',
    edad: 22,
  })
  return (
    <div>
      <input value={obj.nombre} />
      <input value={obj.apellido} />
      <input value={obj.edad} />
    </div>
  );
}



var bandera = false;
function ChangeMessage() {
  const [message, setMessage] = useState('Welcome');


  function Cambio() {

    if (bandera) {
      setMessage('Boton presionado');
    } else {
      setMessage('Welcome');
    }
    bandera = !bandera;

  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={Cambio}>Change Message</button>
    </div>
  );
}








function App() {
  return (
    <Listas />
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       {/* <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a> */}
  //       <Bienvenido />
  //       <Tabla />
  //       {/* <Saludo2 />
  //       <Saludo nombre="Juan" /> */}

  //       {/* <Andrea /> */}
  //       <Suma
  //         n1={12} n2={20} />
  //       <Resta
  //         n1={12} n2={20} />
  //       <Multiplicacion
  //         n1={12} n2={20} />
  //       <Division
  //         n1={12} n2={20} />


  //     </header>
  //   </div>
  // );
}

export default App;

export function Suma({ n1, n2 }) {
  return (
    <h1>La suma es: {parseInt(n1) + parseInt(n2)}</h1>
  );
}
export function Resta({ n1, n2 }) {
  return (
    <h1>La resta es: {parseInt(n1) - parseInt(n2)}</h1>
  );
}
export function Multiplicacion({ n1, n2 }) {
  return (
    <h1>La multiplicacion es: {parseInt(n1) * parseInt(n2)}</h1>
  );
}
export function Division({ n1, n2 }) {
  return (
    <h1>La division es: {parseInt(n1) / parseInt(n2)}</h1>
  );
}
