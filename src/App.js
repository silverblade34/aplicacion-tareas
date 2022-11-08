import './App.css';
import Logo from './img/logo-sapo.png';
import ListaDeTareas from './components/ListaTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
       <div className='logo-contenedor'>
          <img
            className='img-logo'
            src={Logo}
          />
       </div>
       <div className='lista-tareas-principal'>
          <div className='tareas-principal'>
              <h1>Mis tareas</h1>
              <ListaDeTareas/>
          </div>
       </div> 
    </div>
  );
}

export default App;
