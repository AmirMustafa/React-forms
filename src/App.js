import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <Form />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        {/* <Home />
      <About />
      <Contact /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
