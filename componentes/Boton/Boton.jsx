import { Link } from 'react-router-dom';
import './Boton.css';


function Boton(props) {

    return (
        <div>
            <Link to={props.destino}>
        <button onClick={props.onClick} className="boton">  {props.texto}</button>
         </Link>
         </div>
    );
}

export default Boton;   