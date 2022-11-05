import { Outlet  } from 'react-router-dom';

// Component
import Header from '../components/Header';
import Navegacion from '../components/Navegacion';
import Footer from '../components/Footer';
 
const Layout = () => {
  return (
    <>
      <Header/>
      <Navegacion/>
      {/* Contenido central */}
      <div className='main'>

          <Outlet/>

      </div>
      {/* Fin contenido central */}
      <Footer/>
    </>
  )
}

export default Layout