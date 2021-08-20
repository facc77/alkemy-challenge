import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import Busqueda from "./pages/Busqueda";
import HeroInfo from "./pages/HeroInfo";

import Card from "./components/Card";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />

        <div className="container mt-2">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/heroInfo" component={HeroInfo} />
            <Route exact path="/busqueda" component={Busqueda} />
            <Route exact path="/test" component={Card} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
