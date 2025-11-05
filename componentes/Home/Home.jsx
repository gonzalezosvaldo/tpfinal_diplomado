import Boton from '../Boton/Boton';
import ListaChocolate from '../Chocolate/ListaChocolate';
import Menu from '../Menu/Menu';
import './Home.css';
import Chocolate from './chocolates.webp';

function Home (){
return (
    <section className='home'>
        <Menu/>
        <h2 className='titulo-home'>Chocolates franceses, Chocolates artesanales</h2>
        <div> El chocolate artesanal es una alternativa más ética, sostenible y saludable al chocolate producido en masa.Tenemos la convicción de querer hacer el mejor chocolate del mundo y para eso elegimos los mejores ingredientes, damos especial cuidado a cada paso del proceso y creamos nuevos productos para que nos sigas eligiendo. Nosotros mismos seleccionamos las mejores materias primas y nuestra dedicación exclusiva, cada creación está llena de detalles.
            Nuestro enfoque en la elaboración artesanal de chocolate se centra en la ética, la sostenibilidad y, por supuesto, ¡el delicioso sabor! <br />
           <div className='elaboracion'>
           <span style={{ fontStyle: 'italic', fontWeight: 'bold', textDecoration: 'underline' }}>
      Elaboración:
    </span>

<ul style={{ listStylePosition: 'inside', paddingLeft: 0 }}>
    <li>- Fundimos el chocolate bien troceado en el microondas removiendo cada cierto tiempo para evitar que se queme.</li>

<li>- Una vez fundido, verterlo en una superficie limpia, lisa y fría. Con una espátula, extender el chocolate para obtener una fina capa de menos de 1 milímetro de espesor.</li>

<li>- Ahora, el chocolate está brillante pero se irá cobrando un color mate a medida que se seque. Cuando la superficie se solidifique un poco, empezar a hacer virutas con la ayuda de una espátula; para ello, hay que rascar con la espátula el chocolate de manera rápida y continua.</li>

<li>- Para hacerlas de un ancho determinado, marcar líneas en el chocolate con un cuchillo antes de comenzar a rascar</li>

<li>- Puedes armar virutas de muchas formas y tamaños diferentes. Sólo tienes que dominar un poco el grueso de la capa de chocolate, la temperatura del chocolate y el tamaño de los rollitos.</li>
</ul></div>

        </div>
        <div>
            <img src={Chocolate} alt="" />
        </div>

        <h2>¿Que ofrecemos de distinto frente a otras marcas?</h2>

        <p>Desde 1865 custodiamos celosamente la receta de nuestra chocolates franceses. Tradición que se transmite de generación en generación perdurando a través del tiempo. Nuestro amor puesto en su elaboración, logran un exquisito sabor y humedad característicos de este producto.

El nombre <b>CHOCOLATERIA FRANCESA</b> es en honor a una tradición familiar, que nace con la colonización Galesa en las costas del Chubut en 1865, donde arribó en el velero Mimosa, John Jones. Desde aquel entonces se ha mantenido intacta esta receta por 6 generaciones, lográndose así una expresión <strong>CHOCOLATERIA FRANCESA </strong>de nuestra cultura.

.</p>
        <br />
        <p>Es por eso que fundamentamos nuestra filosofía de empresa en algo muy particular:
Productos naturales sin agregados químicos que contengan la frescura y el sabor propio de nuestras recetas de antaño, productos originales y originarios, que tengan sentido de pertenencia histórico, cultural y geográfico de nuestra región. Productos para darse o convidar placeres, para deleitar amigos o familiares, para contar una historia de vida, de viaje o para compartir un momento particular del día..</p>

        <h3>Contamos con 15 diferentes tipos de chocolates artesanales</h3>
        <h4 className='titulo'>Entre los mas destacados tenemos:</h4>
        <ListaChocolate/>
        <p>Y muchos mas... ¿Queres visitar nuestra tienda y ver la coleccion de chocolates que tenemos para ofrecerte?</p> 
        <h4>¡Pues, haz click en ChocoStore!</h4>
        <Boton texto='🛒ChocoStore🛒' destino="/DetallesChocolate" />
        <h5>Y si aun no estas registrado (obligatorio para comprar), resgistrese</h5>

        <Boton texto="🎩 Registrarme 🎩" destino="/Registrarse" />

        <h6>Gracias por visitar nuestra tienda, vuelva prontos</h6>
</section>

);

}

export default Home