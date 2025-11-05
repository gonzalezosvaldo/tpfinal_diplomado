import DatosChocolate from "./DatosChocolate";
import Chocolate from "./Chocolate";

function ListaChocolate() {
  return (
    <div>
      {DatosChocolate.map((choco) => (
        <Chocolate
          key={choco.id}
          nombre={choco.nombre}
          descripcion={choco.descripcion}
          porcion={choco.porcion}
          codigo={choco.codigo}
          imagen={choco.imagen}
        />
      ))}
    </div>
  );
}

export default ListaChocolate;