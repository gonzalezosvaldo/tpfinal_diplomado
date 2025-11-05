import { useState, useEffect  } from "react";
import { fetchChocolates } from "./api";
import { Link } from "react-router-dom";
import Boton from "../Boton/Boton";
import Menu from "../Menu/Menu";

function DetallesChocolate() {
  const [chocolates, setChocolates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchChocolates(); //Utiliza la funcion fetchPersonajes
        setChocolates(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <Menu/>
     
        <h1> Welcome to <s>Willy Wonk..</s> ChocoStore✨</h1>
      
    {loading ? (
      <h1>Cargando tienda...</h1> 
    ) : (
      <ul className="personaje-lista" >
        {chocolates.map((chocolate) => (
          <li key={chocolate.id} className="personaje-item">
            <h3>{chocolate.Nombre}🍫</h3>
            <p>{chocolate.Descripcion}</p>
            <p>Precio: ${chocolate.Precio || 'Desconocido'}</p>
            <p>Porcion: {chocolate.Porcion}</p>
            <p>Stock: {chocolate.Stock}</p>
            <p>Codigo: {chocolate.Codigo}</p>
            <Link to='/Suscripcion' > Agregar al carrito </Link>

          </li>
        ))}
      </ul>
    )}
    <Boton texto="🏠 Volver al inicio 🏠" destino="/" />

    <h6>Gracias por visitar nuestra tienda, vuelva prontos</h6>
  </section>
  );
}

export default DetallesChocolate;
