import Boton from "../Boton/Boton"

function Registrarse (){
    return(

        <div>
    <h1 className='title10'>Registrarse</h1>
    <h2 className='title1'>Deberas completar el siguiente formulario (es corto...) </h2>

    <form className="registro-form">
        <label>Usuario:<input type="text" name="nombre" required/></label>
       <label>Contraseña:<input type="text" name="password" required/></label>
       <label>Repetir contraseña:<input type="text" name="password" required/></label>
       <label>Email:<input type="email" name="email" required/></label>

        <button type="submit">Iniciar Sesion</button>
      </form>



<Boton texto="🏠 Volver al inicio 🏠" destino="/" />
<Boton texto="🛒 Regresar a ChocoStore 🛒" destino="/DetallesChocolate" />

<h6>Gracias por visitar nuestra tienda, vuelva prontos</h6>
</div>

    )}

export default Registrarse