import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Busqueda from "./pages/Busqueda";
import HeroInfo from "./pages/HeroInfo";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/heroInfo/" component={HeroInfo} />
          <Route exact path="/busqueda" component={Busqueda} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
