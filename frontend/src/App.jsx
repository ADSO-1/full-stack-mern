import { 
        BrowserRouter, 
        Routes, 
        Route 
} from 'react-router-dom';

// Layout
import Layout from './Layout/Layout';

// Paginas
import Login from './pages/Login';
import AcercaDe from './pages/AcercaDe';
import Registro from './pages/Registro';
import Contactos from './pages/Contactos';
import OlvideClave from './pages/OlvideClave';

function App() {
 

  return (
      <BrowserRouter>
          {/* Rutas Publicas */}
          <Routes>
              <Route path='/' element={<Layout/>}>
                <Route index element={<Login/>}/>
                <Route path='acerca-de' element={<AcercaDe/>}/>
                <Route path='contactos' element={<Contactos/>}/>
                <Route path='olvide-clave' element={<OlvideClave/>}/>
                <Route path='registro' element={<Registro/>}/>
              </Route>
          </Routes>
          {/* Rutas Privadas */}
      </BrowserRouter>
  )
}

export default App
