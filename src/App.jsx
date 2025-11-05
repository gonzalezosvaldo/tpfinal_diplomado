import { useState } from "react";
import "./App.css";
import Header from "../componentes/Header/Header";
import Footer from "../componentes/Footer/Footer";
import Home from "../componentes/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetallesChocolate from "../componentes/DetallesChocolate/DetallesChocolate";
import Suscripcion from "../componentes/Suscripcion/Suscripcion";
import Registrarse from "../componentes/Registrarse/Registrarse";
import Sesion from "../componentes/Sesion/Sesion";


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/DetallesChocolate" element={ <DetallesChocolate />} />
          <Route path="/Suscripcion" element={ <Suscripcion />} />
          <Route path="/Registrarse" element={ <Registrarse />} />
          <Route path="/Sesion" element={ <Sesion />} />
        </Routes>
      </main>
      <Footer />
      </Router>
  );
}

export default App;
