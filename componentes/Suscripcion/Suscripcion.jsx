import { Link } from 'react-router-dom';
import Boton from '../Boton/Boton';
import './Suscripcion.css'; 

function Suscripcion (){
return (

    <div>
    <h1 className='title'>¡Upss.. parece que sucedio un error!</h1>
    <h2 className='title2'>Lamentamos molestarte, pero debemos saber mas sobre ti 😜</h2>
<p>Para finalizar con la compra por la tienda, primero debe iniciar sesion...</p>
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


)}
export default Suscripcion