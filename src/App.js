import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Navbar />
        
        <Switch>
          <Route path="/" exact component={Main} />
        </Switch>

      </BrowserRouter>
    </>
  );
};

export default App;
