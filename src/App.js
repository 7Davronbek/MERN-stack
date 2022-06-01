import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
