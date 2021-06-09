// DEPENDENCIAS:
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// COMPONENTES:
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// PÁGINAS:
import Inicio from "./pages/inicio/Inicio";
import Personajes from "./pages/personajes/Personajes";
import Locaciones from "./pages/locaciones/Locaciones";
import Episodios from "./pages/episodios/Episodios";
import MasInformacionpage from "./pages/mas-informacion/MasInformacionpage";

function App() {
  return (
    <Router>
      <div className="contenedor">
        <Header/>
        <Switch>
          {/* Rutas para navegar en la página */}
          <Route exact={true} path="/Personajes" component={Personajes}/>
          <Route exact={true} path="/Locaciones" component={Locaciones}/>
          <Route exact={true} path="/Episodios" component={Episodios}/>
          <Route exact={true} path="/Mas-información" component={MasInformacionpage}/>
          <Route exact={true} path="/" component={Inicio}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
