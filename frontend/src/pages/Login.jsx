import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      Login

      <div>
        
        <input type="text" placeholder="Tu Usuario" />
        <input type="password" placeholder="Tu Clave" />

        <button>
            Ingresar  
        </button>  
        
      </div> 


      <div>
        <NavLink to="/registro">
          Si no tinenes cuenta, registrate
        </NavLink>
      </div> 

      <div>
        <NavLink to="/olvide-clave">
          Olvide Clave
        </NavLink>
      </div>      

    </div>
  )
}

export default Login