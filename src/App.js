import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Verify from "./pages/Verify";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/register" exact component={Register} />
          <Route path="/verify" exact component={Verify} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
