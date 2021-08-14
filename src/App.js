import React from "react";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import Busqueda from "./pages/Busqueda";
import HeroInfo from "./pages/HeroInfo";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-2">
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/heroInfo" component={HeroInfo} />
        <Route exact path="/busqueda" component={Busqueda} />
      </div>
    </Router>
  );
}

export default App;
