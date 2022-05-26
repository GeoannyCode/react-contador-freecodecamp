
import './App.css';
import logo from './imagenes/fcc-logo.png'
import Button from './component/Button';
import Contador from './component/Contador';
import { useState } from 'react';

function App() {

  const[numClics, setNumClics] = useState(0);

  const manejarClic = () =>{
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () =>{
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={logo}
          alt='Logo de freecodecamp'
        />
      </div>

      <div className='contenedor-principal'>
        <Contador numClics={numClics}/>
        <Button text="Clic" btnClick={true} click={manejarClic}/>
        <Button text="Reiniciar" btnClick={false} click={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
