import { Link, useLocation } from "react-router-dom";
import "./Menu.css";

function Menu() {
  const location = useLocation(); // Detecta en qué ruta estás

  return (
    <nav className="menu">
      <ul>
        {location.pathname === "/" && (
          <>
            <li><Link to="/Sesion">Iniciar sesión</Link></li>
            <li><Link to="/DetallesChocolate">Nuestra tienda</Link></li>
          </>
        )}

        {location.pathname === "/DetallesChocolate" && (
          <>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/Sesion">Iniciar sesión</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Menu;