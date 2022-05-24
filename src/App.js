
import './App.css';
import logo from './imagenes/fcc-logo.png'
import Button from './component/Button';

function App() {

  const manejarClic = () =>{
    alert('hola bobo')
  }

  const reiniciarContador = () =>{
    alert('Reiniciando...')
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
        <Button text="Clic" btnClick={true} click={manejarClic}/>
        <Button text="Reiniciar" btnClick={false} click={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
