

function Chocolate(props) {
  return (
    <section
      className="seccion"
      style={{
        backgroundImage: `url(${props.imagen})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        padding: "30px",
        borderRadius: "15px",
      }}
    >
      <h3>{props.nombre}</h3>
      <p>{props.descripcion}</p>
      <p>Cantidad de gramos y calorías: {props.porcion}</p>
      <p>Código de compra: {props.codigo}</p>
    </section>
  );
}

export default Chocolate