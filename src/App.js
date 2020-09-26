import React from "react";
import Routes from "./Routes";
import { Switch, BrowserRouter as RBrowser } from "react-router-dom";
import OperacionContextProvider from "./context/OperacionContext";
import Navegacion from "./components/Navegacion";

export default function App() {
  return (
    <RBrowser>
      <OperacionContextProvider>
        <Navegacion />
        <div className="container">
          <Switch>
            <Routes />
          </Switch>
        </div>
      </OperacionContextProvider>
    </RBrowser>
  );
}
