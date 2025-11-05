import { Link } from "react-router-dom"
import Boton from "../Boton/Boton"

function Sesion() {
    return(
           <div>
    <h1 className='iniciar'>Inicio de sesión</h1>
    <form className="registro-form">
        <label>Email:<input type="email" name="email" required/></label>
       <label>Contraseña:<input type="text" name="password" required/></label>

        <button type="submit">Iniciar Sesion</button>
      </form>

<h3>¿Acaso no estas registrado?</h3>

  <p> Deberas completar el siguiente formulario (sera corto lo prometemos)</p>

  <Link to='/Registrarse' > Registrarse <b>(¡CLICKEAME!)</b> </Link>



<Boton texto="🏠 Volver al inicio 🏠" destino="/" />
<Boton texto="🛒 Regresar a ChocoStore 🛒" destino="/DetallesChocolate" />

<h6>Gracias por visitar nuestra tienda, vuelva prontos</h6>
</div>
    )


}

export default Sesion